import DatePicker from "react-datepicker";
import moment from 'moment';
import CustomDatepickerBtn from "./customDatepickerBtn";
import { useId, useState } from "react";
import { datePickerItem } from "./datePickerItem";
import { ITourPackDate } from "../../interface";
import { IFilterSchema } from "../filter-form/filterForm";
import { Control } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "./customDatepicker.css";

interface IProps {
    label?: string;
    name?: string;
    placeholder?: string;
    errors?: any;
    tourPackDates?: ITourPackDate[];
    countCondition?: number;
    setValue?: any;
    clearErrors: any;
    control: Control<IFilterSchema, any>;
    onChange?: (date: Date) => void;
    isLoading?: boolean;
    disabled?: boolean;
}

const mockTourPackDates = [
    {
        label: 'First label',
        date: '2023-10-29',
        count: 20
    },
    {
        label: 'Second label',
        date: '2023-12-24',
        count: 9
    },
    {
        label: 'Third label',
        date: '2023-11-20',
        count: 0
    }
]

const CustomDatepicker = ({
    name = "",
    placeholder = "",
    label = "Label",
    errors,
    tourPackDates = mockTourPackDates,
    countCondition = 10,
    setValue,
    clearErrors,
    control,
    onChange,
    isLoading = false,
    disabled = false
}: IProps) => {
    const [startDate, setStartDate] = useState<Date>();
    const id = useId();

    return (
        <div className="custom-datepicker" data-error={!!errors?.[name]}>
            <label htmlFor={id} className="custom-datepicker__label">
                {label}
            </label>

            <DatePicker
                selected={startDate}
                onChange={(date: Date) => {
                    setValue(name, moment(date).format('YYYY-MM-DD'));
                    setStartDate(date);
                    clearErrors(name);
                    onChange && onChange(date);
                }}
                dateFormat="dd/MM/yyyy"
                className="custom-datepicker__field"
                calendarClassName="custom-datepicker__popover"
                renderDayContents={(day: number, date: Date) => datePickerItem(day, date, tourPackDates, countCondition)}
                placeholderText={placeholder}
                customInput={<CustomDatepickerBtn isLoading={isLoading} control={control} />}
                name={name}
                disabled={disabled}
            />
        </div>
    );
};

export default CustomDatepicker;
