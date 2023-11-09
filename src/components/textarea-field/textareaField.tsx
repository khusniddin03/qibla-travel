import { useId } from "react";
import "./textareaField.css";

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

const TextareaField = ({
    name = "",
    placeholder = "",
    label = "Label",
    errors,
    error = false,
    disabled = false,
    register = () => { },
    required = false
}: IProps) => {
    const id = useId();

    return (
        <div className="textarea-field" data-error={error ? error : !!errors?.[name]}>
            <label className="textarea-field__label" htmlFor={id}>{label}</label>
            <textarea
                disabled={disabled}
                {...register(name, { required: required })}
                placeholder={placeholder}
                className="textarea-field__field"
                name={name}
                id={id}
                cols={30}
                rows={3}
            ></textarea>
        </div>
    );
};

export default TextareaField;
