import React from "react";
import { Tooltip } from "react-tooltip";

const TextInput = (props) => {

    const { showLabel, label, error, placeholder, errorMessage,type,defaultValue} = props;

    const onChange = (data) => {
        props.onChange && props.onChange(data);
    };

    return (
        <div class="relative">
            <Tooltip anchorSelect=".error" place="top" >{errorMessage}</Tooltip>
            {showLabel && <label className="block font-bold tracking-wide text-sm ml-1 font-poppins" for={"grid-" + label}>
                {label}
            </label>
            }
            <input
                defaultValue={defaultValue}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={error ? "error border rounded-lg  border-red-500 focus:border-blue-500 p-1.5 w-full font-poppins" :
                    "border rounded-lg focus:border-blue-500 p-1.5 w-full m-1 font-poppins"}
            />
        </div>
    )
}

export default TextInput;
