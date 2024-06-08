import React, { useState } from "react";
import SelectInput from "../../../Component/Shared/SelectInput";
import Pixoatic from "../../../img/pixoatic.png";
import CompanyReports from "../../../img/companyReports.png";
import Profile from "../../../img/profileIcon.png";
import Employee from "../../../img/employee.png";
import HolidayList from "../../../img/holidayList.png";
import LeaveRequest from "../../../img/leaveRequest.png";
import ManageCompanyLeave from "../../../img/manageCompanyLeave.png";
import SettingCompanyDetails from "./settingCompanyDetails";
import SettingAdmin from "./settingAdmin";
import SettingEmployeeManager from "./settingEmployeeManager";
import SettingHolidayList from "./settingHolidayList";
import SettingManageLeave from "./settingManageLeave";
import SettingLeaveRequest from "./settingLeave";
import Report from "../Report";

const Setting = () => {

    const [isCompanyDetails, setIsCompanyDetails] = useState(false);
    const [isCompanyAdmin, setIsCompanyAdmin] = useState(false);
    const [isEmployeeManager, setIsEmployeeManager] = useState(false);
    const [isHolidayOpen, setIsHolidayOpen] = useState(false);
    const [isManageLeave, setIsManageLeave] = useState(false);
    const [isLeaveRequest, setIsLeaveRequest] = useState(false);
    const [isCompanyReport, setIsCompanyReport] = useState(false);


    const data1 = [1, 2, 3, 4];
    const data2 = [5, 6, 7, 8, 9];

    const homePageHandle = () => {
        window.location.replace(window.location.origin + '/admin/login');
    }

    return (
        <>
            {isCompanyDetails ? <SettingCompanyDetails /> :
             isCompanyAdmin ? <SettingAdmin /> :
             isEmployeeManager ? <SettingEmployeeManager /> :
             isHolidayOpen ? <SettingHolidayList /> :
             isManageLeave ? <SettingManageLeave /> :
             isLeaveRequest ? <SettingLeaveRequest /> :
             isCompanyReport ? <Report title={true} /> :
                <>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-2">
                        <div className="lg:col-span-6 md:col-span-6  sm:col-span-12">
                            <div className="text-2xl font-poppins text-[#1C1243] font-bold">
                                Recent Reports
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6  sm:col-span-12 text-right">
                            <button className="focus:outline-none text-white font-poppins bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 p-3 ml-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={homePageHandle}>
                                <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 ">
                        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-3 bg-white border border-gray-200 rounded-lg m-2 shadow">
                            <div className="text-lg font-poppins text-[#1C1243] font-bold ml-4">Company Details</div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={Pixoatic} className="object-cover h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Pixoatic Solutions</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsCompanyDetails(!isCompanyDetails)}></i>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={CompanyReports} className="object-cover h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Company Reports</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsCompanyReport(!isCompanyReport)}></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-3 bg-white border border-gray-200 rounded-lg m-2 shadow">
                            <div className="text-lg font-poppins text-[#1C1243] font-bold ml-4">My Teams</div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={Profile} className="object-cover  h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Admin</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsCompanyAdmin(!isCompanyAdmin)}></i>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={Employee} className="object-cover  h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Employees & Managers</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsEmployeeManager(!isEmployeeManager)}></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-3 bg-white border border-gray-200 rounded-lg m-2 shadow">
                            <div className="text-lg font-poppins text-[#1C1243] font-bold ml-4">Attendance & Leaves</div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={HolidayList} className="object-cover  h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Holiday List</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsHolidayOpen(!isHolidayOpen)}></i>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={LeaveRequest} className="object-cover  h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Leaves Request</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsLeaveRequest(!isLeaveRequest)}></i>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2">
                                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                        <img src={ManageCompanyLeave} className="object-cover h-4 mt-1 ml-2 lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                                        <span className="lg:col-span-10 md:col-span-10 sm:col-span-10 text-left">Manage Company Leaves</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-2 text-right">
                                    <i class="fa fa-long-arrow-right text-[#A29EB6]" aria-hidden="true" onClick={() => setIsManageLeave(!isManageLeave)}></i>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 p-3 bg-white border border-gray-200 rounded-lg m-2 shadow">
                            <div className="text-lg font-poppins text-[#1C1243] font-bold ml-4">Salary Settings</div>
                            <div className="mt-2 p-3"><div className="flex items-center mb-4">
                                <input checked id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calendar Month
                                    <div className="text-[#A29EB6]">eg. Jan - 31 days Feb - 28 days</div></label>
                            </div>
                                <div className="flex items-center">
                                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Attendance Cycle
                                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 ">
                                            <div className="lg:col-span-5 md:col-span-4 sm:col-span-10 m-2">
                                                <SelectInput
                                                    options={data1}
                                                    showLabel={false}
                                                    label="Format"
                                                    error={false}
                                                    errorMessage="Format is required"
                                                    value=""
                                                    onChange={(e) => console.log(e)}
                                                />
                                            </div>
                                            <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 m-2">to
                                            </div>
                                            <div className="lg:col-span-5 md:col-span-4 sm:col-span-10 m-2">
                                                <SelectInput
                                                    options={data2}
                                                    showLabel={false}
                                                    label="Format"
                                                    error={false}
                                                    errorMessage="Format is required"
                                                    value=""
                                                    onChange={(e) => console.log(e)}
                                                />
                                            </div>
                                        </div>

                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default Setting;
