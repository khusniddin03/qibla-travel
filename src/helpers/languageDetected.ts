import { TLang } from "../interface";

export const languageDetected = (path: string): TLang => {
    if (path.includes("/ru")) {
        return 'ru';
    } else if (path.includes("/en")) {
        return 'en';
    } else if (path.includes("/uz")) {
        return 'uz';
    }

    return 'uz'
}