import React, { useState } from "react";
import Dashboard from "../../img/dashboard.png";
import Employee from "../../img/employee.png";
import Attendance from "../../img/attendence.png";
import Report from "../../img/report.png";
import Salary from "../../img/salary.png";
import Documents from "../../img/documents.png";
import Setting from "../../img/settings.png";

const Menu = () => {

    const currentUrl = window.location.pathname;


    const setCurrentMenu = (url) => {
        window.location.replace(window.location.origin + url);

    }
    return (
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 font-poppins ml-6  mt-3">
            <div className={currentUrl === "/admin/dashboard" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/dashboard")}>
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Dashboard} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold ">Dashboard</span>
                </div>
            </div>
            <div className={currentUrl === "/admin/employee" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/employee")}>
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Employee} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold ">Employee</span>
                </div>
            </div>
            <div className={currentUrl === "/admin/attendance" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/attendance")}>

                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Attendance} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold">Attendance</span>
                </div>
            </div>
            <div className={currentUrl === "/admin/report" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/report")}>

                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Report} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold ">Report</span>
                </div>
            </div>
            <div className={currentUrl === "/admin/calculateSalary" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/calculateSalary")}>

                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Salary} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold ">Calculate Salary</span>
                </div>
            </div>
            <div className={currentUrl === "/admin/documents" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/documents")}>

                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Documents} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold ">Documents</span>
                </div>
            </div>
            <div className={currentUrl === "/admin/setting" ? "p-2 bg-violet-500 text-white rounded-md " : "p-2 text-[#A29EB6]"} onClick={() => setCurrentMenu("/admin/setting")}>
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 cursor-pointer">
                    <img src={Setting} className="object-cover col-span-3" />
                    <span className="col-span-9 font-poppins font-bold ">Setting</span>
                </div>
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
            <div className="p-2">
            </div>
        </div>

    )
}
export default Menu;