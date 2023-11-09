import Container from '../container/container';
import Logo from '../logo/logo';
import { useTranslation } from "react-i18next";
import './footer.css';

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrap">
                    <div className="footer__left">
                        <Logo />
                    </div>
                    <div className="footer__right">
                        <p className="footer__title">
                            {t("compy_text")}
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;  