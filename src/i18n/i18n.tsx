import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationUzbek from './translation/uzbek/translaton.json';
import translationEnglish from './translation/english/translaton.json';
import translationRussian from './translation/russian/translaton.json';

const resources = {
    en: {
        translation: translationEnglish
    },
    uz: {
        translation: translationUzbek
    },
    ru: {
        translation: translationRussian
    },
}

i18next.use(initReactI18next).init({ resources, lng: "uz" });

export default i18next;