import Select from "../select/select";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ADD_BTN_TEXT, AGE_TEXT, MOCK_CHILDS, TWO_AGE_TEXT } from "./childMockData";
import "./childCounter.css";
import { disabledCounter } from "../../helpers/disabledCounter";
import { useAppContext } from "../../context/appContext";

export interface IChild {
    id: number;
    label: string;
}

interface IProps {
    setChilds: Dispatch<SetStateAction<IChild[]>>;
    childs: IChild[];
    peopleCount: number;
    disabledCount: number;
    cityId?: number;
    tourPackId?: number | string;
}


const ChildCounter = ({ childs, setChilds, peopleCount, disabledCount, cityId, tourPackId }: IProps) => {
    const { lang } = useAppContext();

    function selectItemRender(child: IChild) {
        if (child?.id === 0) {
            return ADD_BTN_TEXT[lang];
        } else if (child?.id === 1) {
            return TWO_AGE_TEXT[lang];
        }
        return `${child?.label} ${AGE_TEXT[lang]}`;
    }

    useEffect(() => {
        setChilds([]);
    }, [cityId, setChilds, tourPackId]);

    const handleChange = (value: string | number) => {
        if (disabledCounter(disabledCount, peopleCount, childs) || value === '1') {
            if (+value) {
                const currentChild = MOCK_CHILDS?.find(
                    (child: IChild) => child?.id === +value
                );
                currentChild && setChilds((prev: IChild[]) => [...prev, currentChild]);
            }
        }
    };

    const removeHandler = (index: number) => {
        const newChilds = childs?.filter((_: IChild, childIndex: number) => childIndex !== index);
        setChilds(newChilds);
    };

    return (
        <div className="child-counter">
            <div className="child-counter__wrap">
                {childs.map((child: IChild, index: number) => {
                    return (
                        <div key={index} className="child-counter__item">
                            <div className="child-counter__text">{selectItemRender(child)}</div>
                            <button
                                className="child-counter__remove-btn"
                                onClick={() => removeHandler(index)}
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="child-counter__add-btn">
                <Select
                    disableLabel
                    selectData={disabledCounter(disabledCount, peopleCount, childs) ? MOCK_CHILDS : MOCK_CHILDS.slice(0, 2)}
                    onChange={handleChange}
                    valueKey="id"
                    currentValue="0"
                    render={selectItemRender}
                />
            </div>
        </div>
    );
};

export default ChildCounter;
