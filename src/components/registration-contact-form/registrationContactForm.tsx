import Button from '../button/button';
import TextField from '../text-field/textField';
import { useTranslation } from "react-i18next";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from '../../interface';
import './registrationContactForm.css';

interface IProps {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    isLoading?: boolean;
}

const RegistrationContactForm = ({ register, errors, isLoading = true }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className="registration-contact-form">
            <div className="registration-contact-form__title">
                <span>{t("customer_contact_information_title")}</span>
            </div>
            <div className="registration-contact-form__wrap">
                <TextField
                    label={t("lname_label")}
                    placeholder={t("lname_label")}
                    register={register}
                    name='name'
                    errors={errors}
                    disabled={isLoading}
                    required
                />
                <TextField
                    label={t("email_label")}
                    placeholder={t("email_label")}
                    register={register}
                    name='email'
                    errors={errors}
                    disabled={isLoading}
                    required={false}
                />
                <TextField
                    label={t("phone_label")}
                    placeholder={t("phone_label")}
                    register={register}
                    name='phone_number'
                    errors={errors}
                    disabled={isLoading}
                    required
                />
                <Button isLoading={isLoading} height='45px' width="100%">{t("registration_btn_text")}</Button>
            </div>
            <p className='registration-contact-form__description'>{t("payment_policy_text")}</p>
        </div>
    );
}

export default RegistrationContactForm;