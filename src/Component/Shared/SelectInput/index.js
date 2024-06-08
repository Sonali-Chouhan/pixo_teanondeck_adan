
import React from "react";
import { Tooltip } from "react-tooltip";

const SelectInput = (props) => {

  const { showLabel,id,name,placeholder, label, value, options, error, errorMessage } = props;

  const onChange = (data) => {
    props.onChange && props.onChange(data);
  };

  return (
    <div class="relative">
      <Tooltip anchorSelect=".error" place="top" >{errorMessage}</Tooltip>
      {showLabel && <label className="block font-bold tracking-wide text-sm mb-1 font-poppins" for={"grid-" + label}>
        {label}
      </label>
      }
      <select
        value={value}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        className={error ? "error border rounded-lg  border-red-500 focus:border-black-500 p-2 w-full font-poppins" :
          "border rounded-lg focus:border-black-500 p-2 w-full font-poppins"}
      >
        {options.map((ele) => (
          <option key={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput;
