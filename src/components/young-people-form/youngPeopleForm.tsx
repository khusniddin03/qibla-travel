import DateField from "../date-field/dateField";
import Select from "../select/select";
import TextField from "../text-field/textField";
import { FormValues } from "../../interface";
import { useTranslation } from "react-i18next";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { COUNTIRES_DATA, GENDER_DATA } from "../registration-user-form/registrationUserFormData";
import { useAppContext } from "../../context/appContext";
import '../registration-user-form/registrationUserForm.css';

interface IProps {
    index: number;
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    isLoading?: boolean;
}

const YoungchildsForm = ({ register, errors, index, isLoading }: IProps) => {
    const { t } = useTranslation();
    const {lang} = useAppContext();

    return (
        <div className="registration-user-form">
            <h4 className="registration-user-form__title">
                <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" width={13} height={20} viewBox="0 0 320 512">
                    <path d="M112 48a48 48 0 1196 0 48 48 0 11-96 0zm40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"></path>
                </svg>
                {t("child_title")}
            </h4>
            <div className="registration-user-form__wrap">
                <TextField
                    label={t("fname_label")}
                    placeholder={t("fname_label")}
                    register={register}
                    name={`childs.${index}.fname`}
                    error={!!errors?.childs?.[index]?.fname}
                    disabled={isLoading}
                    required
                />
                <TextField
                    label={t("lname_label")}
                    placeholder={t("lname_label")}
                    register={register}
                    name={`childs.${index}.lname`}
                    errors={errors}
                    error={!!errors?.childs?.[index]?.lname}
                    disabled={isLoading}
                    required
                />
                <Select
                    label={t("citizenship_label")}
                    name={`childs.${index}.citizenship`}
                    defaultValue=""
                    register={register}
                    selectData={COUNTIRES_DATA}
                    error={!!errors?.childs?.[index]?.citizenship}
                    disabled={isLoading}
                    render={(item) => item?.label === 'Fuqarolik' ? t("citizenship_label") : item?.label}
                />
                <Select
                    label={t("sex_label")}
                    name={`childs.${index}.sex`}
                    defaultValue=""
                    register={register}
                    selectData={GENDER_DATA}
                    error={!!errors?.childs?.[index]?.sex}
                    disabled={isLoading}
                    render={(item) => item?.label?.[lang]}
                />
                <DateField
                    label={t("date_of_birth_label")}
                    register={register}
                    name={`childs.${index}.date_of_birth`}
                    error={!!errors?.childs?.[index]?.date_of_birth}
                    disabled={isLoading}
                />
                <TextField
                    label={t('birth_certificate')}
                    placeholder={t('birth_certificate')}
                    register={register}
                    name={`childs.${index}.birth_certificate`}
                    errors={errors}
                    error={!!errors?.childs?.[index]?.birth_certificate}
                    disabled={isLoading}
                    required
                />
            </div>
        </div>
    );
}

export default YoungchildsForm;