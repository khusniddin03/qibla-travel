import Container from "../container/container";
import RegistrationAside from "../registration-aside/registrationAside";
import RegistrationContactForm from "../registration-contact-form/registrationContactForm";
import RegistrationMain from "../registration-main/registrationMain";
import { useForm, useFieldArray } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FormValues } from "../../interface";
import { createOrder } from "./registrationLayout.api";
import { useMutation } from "react-query";
import { useAppContext } from "../../context/appContext";
import { clearChilds } from "../../helpers/disabledCounter";
import "./registrationLayout.css";

const RegistrationLayout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { lang } = useAppContext();

    const oldPeoples = Array(+state?.people_count)
        .fill("")
        .map(() => {
            return {};
        });

    const childsCount = JSON.parse(state?.child_count || "[]")?.length;

    const childs = Array(childsCount)
        .fill("")
        .map(() => {
            return {};
        });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            people: oldPeoples,
            childs: childs,
            description: "",
        },
        mode: "onBlur",
    });

    const { fields: poepleForm, remove: clearPeople } = useFieldArray({
        name: "people",
        control,
        rules: {
            required: true,
        },
    });

    const { fields: childsForm, remove: clearChildsValues } = useFieldArray({
        name: "childs",
        control,
    });

    const { isLoading, mutateAsync } = useMutation(createOrder);

    const onSubmit = async (data: FormValues) => {
        const peopleCount = +state?.people_count + clearChilds(JSON.parse(state.child_count ?? '[]'))?.length
        const sendData = { data: { ...data, tour_date: state?.date }, people_count: peopleCount, tour_id: +state?.tourpack_id };

        try {
            await mutateAsync(sendData);
        } catch (error) {
            console.warn("error");
        } finally {
            navigate(`/${lang}/confirm`);
            reset();
            clearPeople();
            clearChildsValues();
        }
    };

    return (
        <div className="registration-layout">
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="registration-layout__wrap">
                        <RegistrationMain
                            people={poepleForm}
                            register={register}
                            errors={errors}
                            childs={childsForm}
                            isLoading={isLoading}
                        />
                        <RegistrationAside />
                    </div>
                    <RegistrationContactForm
                        register={register}
                        errors={errors}
                        isLoading={isLoading}
                    />
                </form>
            </Container>
        </div>
    );
};

export default RegistrationLayout;
