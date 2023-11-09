import DateField from "../date-field/dateField";
import PassportField from "../passport-field/passportField";
import Select from "../select/select";
import TextField from "../text-field/textField";
import { useTranslation } from "react-i18next";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { COUNTIRES_DATA, GENDER_DATA } from "./registrationUserFormData";
import { FormValues } from "../../interface";
import { useAppContext } from "../../context/appContext";
import "./registrationUserForm.css";

interface IProps {
    index: number;
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    isLoading?: boolean;
}

const RegistrationUserForm = ({ register, errors, index, isLoading = false }: IProps) => {
    const { t } = useTranslation();
    const { lang } = useAppContext();

    return (
        <div className="registration-user-form">
            <h4 className="registration-user-form__title">
                <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={20}
                    viewBox="0 0 320 512"
                >
                    <path d="M112 48a48 48 0 1196 0 48 48 0 11-96 0zm40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"></path>
                </svg>
                {t("adult_title")}
            </h4>
            <div className="registration-user-form__wrap">
                <TextField
                    label={t("fname_label")}
                    placeholder={t("fname_label")}
                    register={register}
                    name={`people.${index}.fname`}
                    error={!!errors?.people?.[index]?.fname}
                    disabled={isLoading}
                    required
                />
                <TextField
                    label={t("lname_label")}
                    placeholder={t("lname_label")}
                    register={register}
                    name={`people.${index}.lname`}
                    errors={errors}
                    error={!!errors?.people?.[index]?.lname}
                    disabled={isLoading}
                    required
                />
                <Select
                    label={t("citizenship_label")}
                    name={`people.${index}.citizenship`}
                    defaultValue=""
                    register={register}
                    selectData={COUNTIRES_DATA}
                    error={!!errors?.people?.[index]?.citizenship}
                    disabled={isLoading}
                    render={(item) => item?.label === 'Fuqarolik' ? t("citizenship_label") : item?.label}
                />
                <Select
                    label={t("sex_label")}
                    name={`people.${index}.sex`}
                    defaultValue=""
                    register={register}
                    selectData={GENDER_DATA}
                    error={!!errors?.people?.[index]?.sex}
                    disabled={isLoading}
                    render={(item) => item?.label?.[lang]}
                />
                <DateField
                    label={t("date_of_birth_label")}
                    register={register}
                    name={`people.${index}.date_of_birth`}
                    error={!!errors?.people?.[index]?.date_of_birth}
                    disabled={isLoading}
                />
                <PassportField
                    label={t("passport_label")}
                    placeholder={t("passport_label")}
                    register={register}
                    seriaName={`people.${index}.seria`}
                    seriaNumberName={`people.${index}.seria_number`}
                    error={
                        !!errors?.people?.[index]?.seria ||
                        !!errors?.people?.[index]?.seria_number
                    }
                    disabled={isLoading}
                />
                <DateField
                    label={t("validity_period_label")}
                    register={register}
                    name={`people.${index}.validity_period`}
                    error={!!errors?.people?.[index]?.validity_period}
                    disabled={isLoading}
                />
            </div>
        </div>
    );
};

export default RegistrationUserForm;
