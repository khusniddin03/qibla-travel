import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useAppContext } from '../../context/appContext';
import Button from '../button/button';
import Container from '../container/container';
import './confirmContent.css';


const ConfirmContent = () => {
    const { t } = useTranslation();
    const { lang } = useAppContext();
    const navigate = useNavigate();

    const backHandler = () => {
        navigate(`/${lang}`);
    }

    return (
        <div className="confirm-content">
            <Container>
                <div className="confirm-content__wrap">
                    <h1 className="confirm-content__title">
                        {t("confirm_page_title")}
                    </h1>
                    <div className="confirm-content__links">
                        <a href="tel:+998995180505">
                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            +998995180505
                        </a>
                        <a href="tel:+998910700505">
                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            +998910700505
                        </a>
                    </div>
                    <Button onClick={backHandler} className='confirm-content__btn'>
                        {t("confirm_btn_text")}
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default ConfirmContent;