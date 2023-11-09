import { FC, PropsWithChildren, ReactNode, useMemo, useReducer } from "react";
import { setLanguage } from "../../context/action";
import { IAppContext } from "../../interface";
import { AppContext, reducer } from "../../context/appContext";

interface Props {
    children: ReactNode;
}

const ContextWrapper: FC<Props> = ({ children }: PropsWithChildren<Props>) => {
    const [store, dispatch] = useReducer(reducer, { lang: 'uz' });

    const combineStore: IAppContext = useMemo(
        () => ({
            setLanguage: setLanguage(dispatch),
            ...store,
        }),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [store]
    );

    return (
        <AppContext.Provider value={combineStore}>
            {children}
        </AppContext.Provider>);
};

export default ContextWrapper;