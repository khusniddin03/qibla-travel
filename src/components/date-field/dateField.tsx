import { useId } from "react";
import "./dateField.css";

interface IProps {
    label?: string;
    name?: string;
    errors?: any;
    max?: string;
    min?: string;
    register?: any;
    error?: boolean;
    disabled?: boolean;
}

const DateField = ({
    name = "",
    label = "Label",
    errors,
    min = "1900-01-01",
    max = "2500-01-01",
    error,
    register = () => { },
    disabled = false
}: IProps) => {
    const id = useId();

    return (
        <div className="date-field" data-error={error ? error : !!errors?.[name]}>
            <label htmlFor={id} className="date-field__label">
                {label}
            </label>
            <input
                disabled={disabled}
                {...register(name, { required: true })}
                placeholder="Date"
                min={min}
                max={max}
                type="date"
                className="date-field__field"
                name={name}
                id={id}
            />
        </div>
    );
};

export default DateField;
