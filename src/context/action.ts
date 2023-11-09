import { TDispatch, TLang, TSetLanguage } from "../interface";
import { ActionTypes } from "./appContext";

export const setLanguage: TSetLanguage = (dispatch: TDispatch) => (payload: TLang) => {
    dispatch({ type: ActionTypes.SET_LANG, payload });
};