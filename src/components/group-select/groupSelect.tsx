import { useId } from "react";
import { IGroupSelectItem } from "../../interface";
import { Controller } from "react-hook-form";
import "./groupSelect.css";

interface IProps {
    errors?: any;
    name?: string;
    label?: string;
    selectData?: IGroupSelectItem[];
    defaultValue?: string;
    control?: any;
}

const GroupSelect = ({
    name = "name",
    errors,
    label = "Label",
    selectData,
    defaultValue = '',
    control
}: IProps) => {
    const id = useId();
    return (
        <div className="select" data-error={!!errors?.[name]}>
            <label className="select__label" htmlFor={id}>
                {label}
            </label>
            <div className="select__wrap">
                <Controller
                    control={control}
                    name={name}
                    defaultValue={defaultValue}
                    render={({ field: { onChange, ref } }) => (
                        <select onChange={onChange} ref={ref} name={id} id={id} className="select__field" defaultValue={defaultValue}>
                            {selectData ?
                                selectData.map((item: IGroupSelectItem) => (
                                    <optgroup key={item?.label} label={item?.label}>
                                        {item.children.map((child) => (
                                            <option key={child?.id} value={child?.value}>
                                                {child?.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))
                                :
                                <option value='' disabled>
                                    {label}
                                </option>
                            }
                        </select>
                    )}
                />
            </div>
        </div>
    );
};

export default GroupSelect;
