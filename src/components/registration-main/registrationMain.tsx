import RegistrationUserForm from "../registration-user-form/registrationUserForm";
import TextareaField from "../textarea-field/textareaField";
import YoungPeopleForm from "../young-people-form/youngPeopleForm";
import { useTranslation } from "react-i18next";
import { FormValues } from "../../interface";
import {
    FieldErrors,
    FieldArrayWithId,
    UseFormRegister,
} from "react-hook-form";
import "./registrationMain.css";

interface IProps {
    people: FieldArrayWithId<FormValues, "people", "id">[];
    childs: FieldArrayWithId<FormValues, "childs", "id">[];
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    isLoading?: boolean;
}

const RegistrationMain = ({ people, register, errors, childs, isLoading }: IProps) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="registration-main">
                <div className="registration-main__form">
                    <div className="registration-main__form-info">
                        <h4>{t("information_about_tourists_title")}</h4>
                        <p>{t("information_about_tourists_desc1")} </p>
                        <p>{t("information_about_tourists_desc2")} </p>
                    </div>
                    {people &&
                        people.map((_, index) => {
                            return (
                                <div key={index}>
                                    <RegistrationUserForm
                                        register={register}
                                        errors={errors}
                                        index={index}
                                        isLoading={isLoading}
                                    />
                                    {index + 1 !== people.length && <div className="line"></div>}
                                </div>
                            )
                        })}

                    {childs &&
                        childs.map((_, index) => {
                            return (
                                <div key={index}>
                                    <YoungPeopleForm
                                        register={register}
                                        errors={errors}
                                        index={index}
                                        isLoading={isLoading}
                                    />
                                    {index + 1 !== childs.length && <div className="line"></div>}
                                </div>
                            )
                        })}
                </div>

                <div className="registration-main__description-field">
                    <TextareaField
                        register={register}
                        errors={errors}
                        label={t("description_label")}
                        placeholder={t("description_label")}
                        name="description"
                        disabled={isLoading}
                    />
                </div>
            </div>
        </>
    );
};

export default RegistrationMain;
