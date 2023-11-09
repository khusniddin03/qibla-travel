import moment from "moment";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";

const CustomDatepickerBtn = forwardRef(
    (
        {
            onClick,
            placeholder,
            className,
            control,
            name,
            isLoading,
            disabled,
        }: any,
        ref: any
    ) => {
        return (
            <>
                <Controller
                    control={control ?? {}}
                    name={name}
                    render={({ field: { value } }) => {
                        return (
                            <div
                                className="custom-datepicker__wrap"
                                data-disabled={disabled}
                                data-isloading={isLoading}
                            >
                                <button
                                    type="button"
                                    className={className}
                                    onClick={onClick}
                                    ref={ref}
                                    disabled={disabled}
                                >
                                    {value !== "dd/mm/yyyy"
                                        ? moment(value).format("DD/MM/YYYY")
                                        : placeholder}
                                </button>
                            </div>
                        );
                    }}
                />
            </>
        );
    }
);

export default CustomDatepickerBtn;
