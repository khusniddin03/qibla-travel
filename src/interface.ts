export type ActionType = {
    payload: any;
    type: string;
};

export interface IChildSelectItem {
    id: number;
    label: string;
    value: string;
}

export interface IGroupSelectItem {
    label: string;
    children: IChildSelectItem[];
}

export type TLang = "uz" | "ru" | "en";

export type TDispatch = React.Dispatch<ActionType>;

export type TSetLanguage = (dispatch: TDispatch) => (payload: TLang) => void;

export interface IAppContext {
    lang: TLang;
    setLanguage: (lang: TLang) => void;
}

export interface IState {
    lang: TLang;
}

export interface ITourPackDate {
    label: string;
    date: string;
    count: number;
}

export interface ICity {
    id?: number;
    title: {
        uz: string;
        ru: string;
        en: string;
    };
    created_at?: string;
    updated_at?: string;
}

export interface ICities {
    data: ICity[];
    total: number;
}

export interface ICitiesData {
    data: ICities;
}

export interface ITourPack {
    id?: number;
    title: {
        uz: string;
        ru: string;
        en: string;
    };
    description: {
        uz: string;
        ru: string;
        en: string;
    };
    price: number;
    logo: string;
    data: {
        price_uzs: number;
        count?: number | null;
        date?: string | null;
        additional: {
            uz: string;
            ru: string;
            en: string;
        };
        dates?: {
            [key: string]: {
                people_count: number;
                duration: number;
            }
        }
    };
    city_id: number;
}

export interface IDate {
    date: string;
    people_count: number;
    duration: number;
}

export interface ITourPacks {
    data: ITourPack[];
    total: number;
}

export interface ITourPacksData {
    data: ITourPacks;
}

export type FormValues = {
    people: {
        fname: string;
        lname: string;
        date_of_birth: string;
        sex: string;
        citizenship: string;
        validity_period: string;
        seria: string;
        seria_number: string;
    }[];
    childs: {
        fname: string;
        lname: string;
        date_of_birth: string;
        sex: string;
        citizenship: string;
        validity_period: string;
        birth_certificate: string;
    }[];
    name: string;
    email: string;
    phone_number: string;
    description: string;
};
