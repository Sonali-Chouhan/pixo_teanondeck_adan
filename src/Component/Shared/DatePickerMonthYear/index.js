
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./style.css"
import { Tooltip } from "react-tooltip";

const DatePickerMonthYear = (props) => {

    const { showLabel, label, defaultValue, error, placeholder, errorMessage } = props;
    const [startDate, setStartDate] = useState(defaultValue);
    const onChange = (data) => {
        props.onChange && props.onChange(data);
        setStartDate(data)
    };

    return (
        <div class="relative">
            <Tooltip anchorSelect=".error" place="top" >{errorMessage}</Tooltip>
            {showLabel && <label className="block font-bold tracking-wide text-sm font-poppins" for={"grid-" + label}>
                {label}
            </label>
            }
            <DatePicker
                selected={startDate}
                dateFormat="MM/yyyy"
                toggleCalendarOnIconClick
                showMonthYearPicker
                onChange={onChange}
                placeholder={placeholder}
                className={error ? "error border border-red-500 rounded-lg w-full focus:border-blue-500 p-1 font-poppins" :
                    "border rounded-lg focus:border-blue-500 w-full p-1.5 m-1 font-poppins"}
            />
        </div>
    )
}

export default DatePickerMonthYear;
