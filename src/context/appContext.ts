import { createContext, useContext } from "react";
import { ActionType, IAppContext, IState } from "../interface";

export const initialState: IAppContext = {
    lang: 'uz',
    setLanguage: () => { }
};

export const AppContext = createContext<IAppContext>(initialState);

export enum ActionTypes {
    SET_LANG = "SET_LANG",
}

export function reducer(state: IState, action: ActionType) {
    switch (action.type) {
        case ActionTypes.SET_LANG:
            return { ...state, lang: action.payload };
        default:
            return state;
    }
}

export function useAppContext(): IAppContext {
    const appContext: IAppContext = useContext<IAppContext>(AppContext);
    return appContext;
}