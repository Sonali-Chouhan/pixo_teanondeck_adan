import React from "react";
import { Tooltip } from "react-tooltip";

const FileInput = (props) => {

    const {name,id,isMulti, showLabel, label, value, error, placeholder, errorMessage,type} = props;

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
                value={value}
                name={name}
                id={id}
                onChange={onChange}
                type={type}
                multiple={isMulti}
                accept=".pdf, .PDF ,.csv ,.xlsx ,.CSV ,.XLSX"
                placeholder={placeholder}
                className={error ? "error border rounded-lg  border-red-500 focus:border-blue-500 p-1.5 w-full font-poppins" :
                    "border rounded-lg focus:border-blue-500 p-1 w-full m-1 font-poppins "}
            />
        </div>
    )
}

export default FileInput;
