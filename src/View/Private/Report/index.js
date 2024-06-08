import React, { useState } from "react";
import ReportList from "./reportList";
import SelectInput from "../../../Component/Shared/SelectInput";
import DatePickerMonthYear from "../../../Component/Shared/DatePickerMonthYear";

const Report = (props) => {

    const [tab, setTab] = useState(0);
    const type = ["Employee List Report", "daily_attendance_report", "salary_report"];
    const format = ["XLSX", "PDF", "DOC", "DOCX"];

    return (
        <>
            {props.title ?
                <div className="text-2xl m-1 lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 font-poppins font-normal">
                    <span className="text-[#A29EB6]">Settings /</span><span className="text-[#1C1243]"> Leaves Request</span>
                </div>
                :
                <div className="text-3xl m-1 lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 font-poppins text-[#1C1243] font-bold">
                    Report
                </div>}
            <div className="bg-white py-2">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="me-2" onClick={() => setTab(0)}>
                            <a href="#" className={tab === 0 ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" :
                                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>Attendance</a>
                        </li>
                        <li className="me-2" onClick={() => setTab(1)}>
                            <a href="#" className={tab === 1 ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" :
                                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} aria-current="page">Payment</a>
                        </li>
                        <li className="me-2" onClick={() => setTab(2)}>
                            <a href="#" className={tab === 2 ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" :
                                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>Notes</a>
                        </li>
                        <li className="me-2" onClick={() => setTab(3)}>
                            <a href="#" className={tab === 3 ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" :
                                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>Employee List</a>
                        </li>
                    </ul>
                </div>
                <form>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 p-3">
                        <div className="lg:col-span-4 md:col-span-6  sm:col-span-12 m-1">
                            <SelectInput
                                options={type}
                                label="Report Type"
                                showLabel={true}
                                error={false}
                                errorMessage="Report Type is required"
                                value=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                        {tab !== 3 &&
                            <div className="lg:col-span-4 md:col-span-6  sm:col-span-12 m-1">
                                <DatePickerMonthYear
                                    showLabel={true}
                                    label="Month"
                                    error={false}
                                    errorMessage="Month is required"
                                    value=""
                                    placeholder="employee"
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                        }
                        <div className="lg:col-span-4 md:col-span-6  sm:col-span-12 m-1">
                            <SelectInput
                                options={format}
                                showLabel={true}
                                label="Format"
                                error={false}
                                errorMessage="Format is required"
                                value=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="focus:outline-none text-white font-poppins bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 p-3 ml-3 dark:bg-purple-600 font-poppins dark:hover:bg-purple-700 dark:focus:ring-purple-900">Generate Report</button>
                </form>
                <div className="p-3 ml-1 font-poppins text-[#A29EB6]">Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.</div>
            </div>
            <div className="bg-white py-2 mt-2">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-2">
                    <div className="lg:col-span-6 md:col-span-6  sm:col-span-12">
                        <div className="text-xl font-poppins text-[#1C1243] font-bold">
                            Recent Reports
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:col-span-6  sm:col-span-12 text-right">
                        <button className="focus:outline-none text-white font-poppins bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 p-3 ml-3 dark:bg-purple-600 font-poppins dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            <i class="fa fa-refresh" aria-hidden="true"></i>&nbsp;Refresh</button>
                    </div>
                </div>
                <ReportList />
            </div>
        </>
    )
}
export default Report;
