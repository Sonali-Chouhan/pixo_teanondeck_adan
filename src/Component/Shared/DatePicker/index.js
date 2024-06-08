
import React from "react";
import { Tooltip } from "react-tooltip";

const DatePicker = (props) => {

    const { showLabel, label, defaultValue, error, placeholder, errorMessage } = props;

    const onChange = (data) => {
        props.onChange && props.onChange(data);
    };

    return (
        <div class="relative">
            <Tooltip anchorSelect=".error" place="top" >{errorMessage}</Tooltip>
            {showLabel && <label className="block font-bold tracking-wide text-sm  font-poppins" for={"grid-" + label}>
                {label}
            </label>
            }
            <input
                defaultValue={defaultValue}
                onChange={onChange}
                type="date"
                placeholder={placeholder}
                className={error ? "error border border-red-500 rounded-lg focus:border-blue-500 p-1 w-full font-poppins" :
                    "border rounded-lg focus:border-blue-500 p-1.5 w-full m-1 font-poppins"}
            />
        </div>
    )
}

export default DatePicker;
