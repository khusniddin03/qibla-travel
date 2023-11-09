import Container from '../container/container';
import { useTranslation } from "react-i18next";
import './registrationTitle.css';

const RegistrationTitle = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <h1 className="registration-title">{t("tour_pack_title")}</h1>
        </Container>
    );
}

export default RegistrationTitle;