import { useState, useEffect } from "react";
import { clearChilds, disabledCounter } from "../../helpers/disabledCounter";
import { IChild } from "../child-counter/childCounter";
import "./counter.css";

interface IProps {
    name: string;
    setValue: any;
    register: any;
    setPeopleCount: (count: number) => void;
    disabledCount: number;
    childs: IChild[];
    cityId?: number;
    tourPackId?: number | string;
}

const Counter = ({
    name,
    register,
    setValue: registerSetValue,
    disabledCount,
    childs,
    setPeopleCount,
    cityId,
    tourPackId
}: IProps) => {
    const [count, setCount] = useState<number | string>(1);

    useEffect(() => {
        if (cityId) {
            setCount(1);
        }
    }, [cityId, tourPackId]);

    const pluseHandler = () => {
        if (disabledCounter(disabledCount, count, childs)) {
            setCount((prev: number | string) => {
                return 1 + Number(prev);
            });
        }
    };

    const minusHandler = () => {
        setCount((prev: number | string) => {
            return Number(prev) - 1;
        });
    };

    const handleInputChange = (
        regExp: RegExp,
        e: React.ChangeEvent<HTMLInputElement>,
        setValue: (param: number | string) => void
    ) => {
        const inputValue = e.target.value;
        const sanitizedInput = inputValue.replace(regExp, "");
        if (disabledCounter(disabledCount, +sanitizedInput, childs)) {
            setValue(sanitizedInput);
        } else {
            setValue(disabledCount - clearChilds(childs)?.length);
        }
    };

    const handleKeyDown = (
        regExp: RegExp,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (!event.ctrlKey && event.code === "Backsapce") {
            if (!regExp.test(event.key)) {
                event.preventDefault();
            }
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        if (+event?.currentTarget?.value < 1) {
            setCount(1);
        }
    };

    useEffect(() => {
        registerSetValue(name, count);
    }, [count, name, registerSetValue]);

    useEffect(() => {
        setPeopleCount(Number(count));
    }, [count, setPeopleCount]);

    return (
        <div className="counter">
            <button
                onClick={minusHandler}
                type="button"
                disabled={count === 1}
                className="counter__btn"
            >
                <svg
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
            </button>
            <input
                {...register(name)}
                name="amounts[1830098906]"
                type="text"
                className="counter__input"
                maxLength={3}
                value={count}
                onChange={(event) => handleInputChange(/[^0-9]/g, event, setCount)}
                onKeyDown={(event) => handleKeyDown(/[0-9]/i, event)}
                onBlur={handleBlur}
            />
            <button
                onClick={pluseHandler}
                type="button"
                disabled={!disabledCounter(disabledCount, count, childs)}
                className="counter__btn"
            >
                <svg
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Counter;
