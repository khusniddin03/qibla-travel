import { ReactNode, useId } from "react";
import { Controller } from "react-hook-form";
import "./select.css";

interface IProps {
    errors?: any;
    name?: string;
    label?: string;
    selectData?: any[];
    defaultValue?: string;
    control?: any;
    onChange?: (value: string | number) => void;
    disableLabel?: boolean;
    render?: (item: any) => string | ReactNode;
    valueKey?: string;
    labelKey?: string;
    disabled?: boolean;
    currentValue?: string;
    isLoading?: boolean;
    error?: boolean;
    register?: any;
}

const Select = ({
    name = "name",
    errors,
    label = "Label",
    selectData,
    defaultValue = "",
    control,
    onChange,
    disableLabel = false,
    render,
    valueKey = "value",
    labelKey = "label",
    disabled = false,
    currentValue,
    isLoading = false,
    error = false,
    register = () => { }
}: IProps) => {
    const id = useId();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        register && register(name, { required: true })?.onChange(event);
        onChange && onChange(event.target.value);
    };

    const valueData = currentValue
        ? { value: currentValue }
        : { defaultValue: defaultValue };

    function renderSelect(control: any) {
        if (!control) {
            return (
                <select
                    {...register(name, { required: true })}
                    {...valueData}
                    disabled={disabled}
                    name={name}
                    onChange={handleChange}
                    id={id}
                    className="select__field"
                >
                    {selectData?.length ? (
                        selectData.map((child) => (
                            <option key={child[valueKey]} value={child[valueKey]}>
                                {render ? render(child) : child[labelKey]}
                            </option>
                        ))
                    ) : (
                        <option value="">{label}</option>
                    )}
                </select>
            );
        }

        return (
            <Controller
                control={control ?? {}}
                name={name}
                defaultValue={defaultValue}
                render={({ field: { onChange, ref, value } }) => (
                    <select
                        disabled={disabled}
                        value={value}
                        name={name}
                        onChange={(event) => {
                            handleChange(event);
                            onChange(event);
                        }}
                        ref={ref}
                        id={id}
                        className="select__field"
                    >
                        {selectData?.length ? (
                            selectData.map((child) => (
                                <option key={child[valueKey]} value={child[valueKey]}>
                                    {render ? render(child) : child[labelKey]}
                                </option>
                            ))
                        ) : (
                            <option value="">{label}</option>
                        )}
                        {disabled && <option value="">{label}</option>}
                    </select>
                )}
            />
        );
    }
    return (
        <div className="select" data-error={error ? error : !!errors?.[name]}>
            {!disableLabel && (
                <label className="select__label" htmlFor={id}>
                    {label}
                </label>
            )}
            <div
                data-disabled={disabled}
                data-isloading={isLoading}
                className="select__wrap"
            >
                {renderSelect(control)}
            </div>
        </div>
    );
};

export default Select;
