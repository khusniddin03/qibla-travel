import { useId } from "react";
import "./textField.css";

interface IProps {
    label?: string;
    name?: string;
    placeholder?: string;
    errors?: any;
    register?: any;
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
}

const TextField = ({
    name = "",
    placeholder = "",
    label = "Label",
    errors,
    error = false,
    register = () => { },
    disabled = false,
    required = false
}: IProps) => {
    const id = useId();

    return (
        <div className="text-field" data-error={error ? error : !!errors?.[name]}>
            <label htmlFor={id} className="text-field__label">
                {label}
            </label>
            <input
                {...register(name, { required: required })}
                disabled={disabled}
                id={id}
                placeholder={placeholder}
                name={name}
                className="text-field__field"
                type="text"
            />
        </div>
    );
};

export default TextField;
