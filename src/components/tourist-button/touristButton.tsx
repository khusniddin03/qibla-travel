import Counter from "../counter/counter";
import ChildCounter, { IChild } from "../child-counter/childCounter";
import { useEffect, useState } from "react";
import { UseFormSetValue, Control, UseFormGetValues } from "react-hook-form";
import { IFilterSchema } from "../filter-form/filterForm";
import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import "./touristButton.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ITourPack } from "../../interface";

interface IProps {
    register: any;
    fname: string;
    setValue: UseFormSetValue<IFilterSchema>;
    getValues: UseFormGetValues<IFilterSchema>;
    control: Control<IFilterSchema>;
    count: number;
    cityId?: number;
    tourPackId?: number | string;
    tourpack?: ITourPack;
}

const TouristButton = ({
    fname,
    register,
    setValue,
    control,
    count,
    cityId,
    tourPackId,
    getValues,
    tourpack
}: IProps) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const [childs, setChilds] = useState<IChild[]>([]);
    const [peopleCount, setPeopleCount] = useState<number>(1);
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setValue("child_count", JSON.stringify(childs));
    }, [setValue, childs]);

    useEffect(() => {
        function keyboardClose() {
            window.addEventListener("keydown", ({ code }: KeyboardEvent) => {
                if (code === "Escape" && open) {
                    setOpen(false);
                    setRouteStateData(open);
                }
            });
        }
        keyboardClose();

        return () => {
            window.removeEventListener("keydown", keyboardClose);
        };
        // eslint-disable-next-line
    }, [open]);

    const toggleOpenClose = (newValue: boolean) => {
        setOpen(newValue);
        setRouteStateData(newValue);
    }

    const setRouteStateData = (controller: boolean) => {
        if (!controller && state?.tourpack) {
            navigate("", { state: { ...getValues(), tourpack } });
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.code === 'Enter') {
            toggleOpenClose(false);
        }
    }

    return (
        <div className="tourist" onKeyDown={handleKeyDown}>
            <label className="tourist__title-label">{t("tourists_label")}</label>

            <div className="tourist__wrap">
                <Controller
                    control={control ?? {}}
                    name="people_count"
                    render={({ field: { value } }) => (
                        <button
                            type="button"
                            data-focus={open}
                            onClick={() => toggleOpenClose(!open)}
                            className="tourist__btn"
                        >
                            {value} kishi {!!childs.length && `, ${childs.length}  Bola`}
                        </button>
                    )}
                />

                <div className="tourist__popover" data-visible={open}>
                    <div className="tourist__popover-item">
                        <div className="tourist__item-wrap">
                            <div className="tourist__label">
                                <p>{t("adult_title")}</p>
                                <span>{t("twenty_age_text")}</span>
                            </div>
                            <Counter
                                disabledCount={count}
                                childs={childs}
                                name={fname}
                                register={register}
                                setValue={setValue}
                                setPeopleCount={setPeopleCount}
                                cityId={cityId}
                                tourPackId={tourPackId}
                            />
                        </div>
                        <ChildCounter
                            disabledCount={count}
                            peopleCount={peopleCount}
                            childs={childs}
                            setChilds={setChilds}
                            cityId={cityId}
                            tourPackId={tourPackId}
                        />
                    </div>
                </div>

                <div onClick={() => toggleOpenClose(false)} className="tourist__backdrop"></div>
            </div>
        </div>
    );
};

export default TouristButton;
