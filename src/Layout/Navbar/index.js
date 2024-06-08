import React from "react";
import Logo from "../../img/logo.png";
import Profile from "../../img/profile.png";
import Menu from "./menu";
import Dashboard from "../../View/Private/Dashboard";
import Employee from "../../View/Private/Employee";
import Attendance from "../../View/Private/Attendance";
import Report from "../../View/Private/Report";
import CalculateSalary from "../../View/Private/CalculateSalary";
import Documents from "../../View/Private/Documents";
import Setting from "../../View/Private/Setting";

const Navbar = () => {

    const currentUrl = window.location.pathname;

    const homePageHandle = () => {
        window.location.replace(window.location.origin + '/admin/login');
    }

    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            <div className="lg:col-span-2 md:col-span-4  sm:col-span-6 xs:col-span-12 p-1 bg-white border border-gray-200">
                <img src={Logo} className="object-cover h-10 w-17 mt-1 mb-1 ml-3" onClick={() => homePageHandle()} />
            </div>
            <div className="lg:col-span-10 md:col-span-8  sm:col-span-6 xs:col-span-12 bg-white border border-gray-200">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                    <div class="relative col-span-9 p-2">
                        <input type="text"
                            className="pl-10 pr-4 py-2 w-5/6 border rounded-lg font-poppins text-[#A29EB6]"
                            placeholder="Search for employee" />
                        <div class="absolute inset-y-0 left-0 pl-5  
                                     flex items-center  
                                    pointer-events-none">
                            <i class="fa fa-search text-gray-400"></i>
                        </div>
                    </div>
                    <div class="relative col-span-1 p-2 mt-2 text-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
                            <path d="M15 27.5C16.375 27.5 17.5 26.375 17.5 25H12.5C12.5 26.375 13.6125 27.5 15 27.5ZM22.5 20V13.75C22.5 9.9125 20.45 6.7 16.875 5.85V5C16.875 3.9625 16.0375 3.125 15 3.125C13.9625 3.125 13.125 3.9625 13.125 5V5.85C9.5375 6.7 7.5 9.9 7.5 13.75V20L5 22.5V23.75H25V22.5L22.5 20Z" fill="#1C1243" />
                        </svg>
                    </div>
                    <div class="relative lg:col-span-2 md:col-span-2  sm:col-span-2 p-2">
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                            <img src={Profile} className="object-cover col-span-3" />
                            <span className="col-span-8 mt-2 font-poppins text-[#643FDB]">Mohd Adnan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 md:col-span-4  sm:col-span-6 xs:col-span-12 p-1 h-full bg-white border border-gray-200">
                <span className="font-poppins text-[#1C1243] font-bold ml-10 p-4 mt-5">MENU</span>
                <Menu />
            </div>
            <div className="lg:col-span-10 md:col-span-8  sm:col-span-6 xs:col-span-12 border border-gray-50 p-1">
                {currentUrl === "/admin/dashboard" && <Dashboard />}
                {currentUrl === "/admin/employee" && <Employee />}
                {currentUrl === "/admin/attendance" && <Attendance />}
                {currentUrl === "/admin/report" && <Report />}
                {currentUrl === "/admin/calculateSalary" && <CalculateSalary />}
                {currentUrl === "/admin/documents" && <Documents />}
                {currentUrl === "/admin/setting" && <Setting />}
            </div>
        </div>
    )
}
export default Navbar;