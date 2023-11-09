import { useState } from "react";
import "./passportField.css";

interface IProps {
    label?: string;
    placeholder?: string;
    errors?: any;
    register?: any;
    seriaName?: string;
    seriaNumberName?: string;
    error?: boolean;
    disabled?: boolean;
}

const PassportField = ({
    seriaName = "",
    seriaNumberName = "",
    placeholder = "",
    label = "Label",
    errors,
    register,
    error = false,
    disabled = false
}: IProps) => {
    const [passportSerie, setPassportSerie] = useState("");
    const [passportNumber, setPassportNumber] = useState("");

    const handleInputChange = (
        regExp: RegExp,
        e: React.ChangeEvent<HTMLInputElement>,
        setValue: (param: string) => void
    ) => {
        // const regExp = /[^A-Za-z]/g;
        const inputValue = e.target.value;
        const sanitizedInput = inputValue.replace(regExp, "");
        // setPassportSerie(sanitizedInput.toUpperCase());
        setValue(sanitizedInput.toUpperCase());
    };

    const handleKeyDown = (
        regExp: RegExp,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        // const regExp = /[a-zA-Z]/i;
        if (!event.ctrlKey && event.code === "Backsapce") {
            if (!regExp.test(event.key)) {
                event.preventDefault();
            }
        }
    };
    return (
        <div className="passport-field" data-error={error ? error : !!errors?.[seriaName]}>
            <label className="passport-field__label">{label}</label>
            <div className="passport-field__wrap">
                <input
                    disabled={disabled}
                    {...register(seriaName, { required: true })}
                    value={passportSerie}
                    onChange={(event) => {
                        register(seriaName, { required: true })?.onChange(event);
                        handleInputChange(/[^A-Za-z]/g, event, setPassportSerie)
                    }}
                    onKeyDown={(event) => handleKeyDown(/[a-zA-Z]/i, event)}
                    className="passport-field__field"
                    maxLength={2}
                    type="text"
                    placeholder="AA"
                />
                <input
                    disabled={disabled}
                    {...register(seriaNumberName, { required: true })}
                    className="passport-field__field"
                    type="text"
                    pattern="\d*"
                    maxLength={7}
                    minLength={7}
                    placeholder={placeholder}
                    value={passportNumber}
                    onChange={(event) => {
                        register(seriaName, { required: true })?.onChange(event);
                        handleInputChange(/[^0-9]/g, event, setPassportNumber);
                    }}
                    onKeyDown={(event) => handleKeyDown(/[0-9]/i, event)}
                />
            </div>
        </div>
    );
};

export default PassportField;
