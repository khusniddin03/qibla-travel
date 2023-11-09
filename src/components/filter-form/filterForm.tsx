import Button from "../button/button";
import Container from "../container/container";
import Select from "../select/select";
import TouristButton from "../tourist-button/touristButton";
import * as Yup from "yup";
import CustomDatepicker from "../custom-datepicker/customDatepicker";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {
    Control,
    FormState,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReset,
    UseFormSetValue,
} from "react-hook-form";
import "./filterForm.css";
import { useQuery } from "react-query";
import {
    ICitiesData,
    ICity,
    ITourPack,
    ITourPacksData,
} from "../../interface";
import { getCities, getTourPacks } from "./filterForm.api";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { tourPackDecode } from "../../helpers/tourPackDecode";

const selectData2 = [
    {
        id: 0,
        label: {
            uz: 'Guruhli',
            ru: 'С группой',
            en: 'With a group'
        },
        value: "group",
    },
    {
        id: 1,
        label: {
            uz: 'Shaxsiy',
            ru: 'Персональный',
            en: 'Personal'
        },
        value: "personal",
    },
];

export interface IFilterSchema {
    city_id: string;
    tourpack_id: string;
    date: string;
    people_count: string;
    child_count: string;
    transfer: string;
}

export interface IFilterSchemaData {
    control: Control<IFilterSchema, any>;
    register: UseFormRegister<IFilterSchema>;
    getValues: UseFormGetValues<IFilterSchema>;
    formState: FormState<IFilterSchema>;
    handleSubmit: UseFormHandleSubmit<IFilterSchema, undefined>;
    reset: UseFormReset<IFilterSchema>;
    setValue: UseFormSetValue<IFilterSchema>;
}

const FilterForm = () => {
    const navigate = useNavigate();
    const { lang } = useAppContext();
    const { t } = useTranslation();
    const [currenCity, setCurrentCity] = useState<number>();
    const [currentTourPackId, setCurrentTourPackId] = useState<number | string>();

    const schema = Yup.object().shape({
        city_id: Yup.string().required("1"),
        tourpack_id: Yup.string().required("1"),
        date: Yup.string().required("1").test("", "Пароль недействителен!", (value) => {
            if (value) {
                return value !== "dd/mm/yyyy";
            }
            return false;
        }),
        people_count: Yup.string().required("1"),
        child_count: Yup.string().required("1"),
        transfer: Yup.string().required("1"),
    });

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
        register,
        setValue,
        clearErrors,
        resetField,
        watch
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            city_id: '',
            tourpack_id: '',
            date: "dd/mm/yyyy",
            people_count: '1',
            child_count: '',
            transfer: 'group'
        }
    });

    const watchDate = watch('date');

    useEffect(() => {
        navigate("", { state: getValues() });
    }, [navigate, getValues]);

    const { isLoading, data: cities } = useQuery<ICitiesData>({
        queryKey: ["cities"],
        queryFn: getCities,
    });

    const citySelectHandleChange = (value: number | string) => {
        setCurrentCity(Number(value));
        resetField('tourpack_id');
        resetField('people_count');
        resetField('transfer');
        resetField('date');
        setValue('date', 'dd/mm/yyyy');
        setCurrentTourPackId('');
    }

    useEffect(() => {
        cities?.data?.data?.[0] && setCurrentCity(cities?.data?.data?.[0]?.id);
        setValue('city_id', String(cities?.data?.data?.[0]?.id));
    }, [isLoading, cities?.data?.data, setValue]);

    const {
        isLoading: tourPacksLoading,
        data: tourPacks,
    } = useQuery<ITourPacksData>({
        queryKey: ["tourpacks", currenCity],
        queryFn: getTourPacks(currenCity),
    });

    const tourpackSelectHandleChange = (value: number | string) => {
        setCurrentTourPackId(Number(value))
        resetField('people_count');
        resetField('transfer');
        resetField('date');
        setValue('date', 'dd/mm/yyyy');
    }

    const currentTourPack = tourPacks?.data?.data?.find(
        (tourPack: ITourPack) => tourPack.id === currentTourPackId
    );

    const currentDates = tourPackDecode(currentTourPack?.data?.dates ?? {})?.map((date) => {
        return {
            label: currentTourPack?.title?.[lang] + ' Joylar soni: ' + date?.people_count,
            date: date?.date,
            count: date?.people_count,
        }
    }) || [];

    const currentDatePeopleCount = currentDates.find((date) => date?.date === watchDate)?.count ?? 0;

    const tourPackSelectData = [
        {
            id: '',
            title: {
                uz: 'Yo\'nalishni tanlang',
                ru: 'Выберите направление',
                en: 'Choose a direction'
            }
        },
        ...(tourPacks?.data?.data ?? [])
    ];

    const datepickerHandleChange = () => {
        resetField('people_count');
        resetField('transfer');
    }

    const searchHandler = () => {
        navigate("", { state: { ...getValues(), tourpack: currentTourPack } });
    };    

    return (
        <div className="filter-form">
            <Container>
                <form
                    onSubmit={handleSubmit(searchHandler)}
                    className="filter-form__wrap"
                >
                    <h2 className="filter-form__title">{t("find_page_title")}</h2>
                    <div className="filter-form__grid">
                        <Select
                            label={t("country_departure_label")}
                            name="city_id"
                            selectData={cities?.data?.data ?? []}
                            control={control}
                            errors={errors}
                            valueKey="id"
                            render={(item: ICity) => item?.title?.[lang]}
                            isLoading={isLoading}
                            onChange={citySelectHandleChange}
                        />
                        <Select
                            label={t("direction_label")}
                            name="tourpack_id"
                            selectData={tourPackSelectData}
                            control={control}
                            errors={errors}
                            disabled={!currenCity}
                            isLoading={tourPacksLoading}
                            valueKey="id"
                            render={(item: ITourPack) => item?.title?.[lang]}
                            onChange={tourpackSelectHandleChange}
                        />
                        <CustomDatepicker
                            name="date"
                            label={t('date_field_label')}
                            tourPackDates={currentDates}
                            countCondition={currentTourPack?.data?.count ?? 0}
                            errors={errors}
                            setValue={setValue}
                            clearErrors={clearErrors}
                            placeholder="dd/mm/yyyy"
                            control={control}
                            onChange={datepickerHandleChange}
                            isLoading={tourPacksLoading}
                            disabled={!currentTourPackId}
                        />
                        <TouristButton
                            fname="people_count"
                            register={register}
                            setValue={setValue}
                            control={control}
                            count={currentDatePeopleCount}
                            cityId={currenCity}
                            tourPackId={currentTourPackId}
                            getValues={getValues}
                            tourpack={currentTourPack}
                        />
                        <Select
                            label={t("transfer_label")}
                            name="transfer"
                            defaultValue="group"
                            control={control}
                            selectData={selectData2}
                            errors={errors}
                            render={(item) => item?.label?.[lang]}
                        />
                        <Button height="45px" width="100%">
                            {t("find_btn_text")}
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default FilterForm;
