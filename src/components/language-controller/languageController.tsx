import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { useTranslation } from "react-i18next";
import { languageDetected } from "../../helpers/languageDetected";

const LanguageController = () => {
    const { pathname, state } = useLocation();
    const navigate = useNavigate();
    const { setLanguage } = useAppContext();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/uz", { state });
        }

        const newLang = languageDetected(pathname);
        setLanguage(newLang);
        i18n.changeLanguage(newLang);

        //eslint-disable-next-line
    }, [pathname]);

    return ('');
};

export default LanguageController;