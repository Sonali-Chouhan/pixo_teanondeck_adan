import React from "react";
import Neelam from "../../../img/neelam.png";
import Mahima from "../../../img/mahima.png";
import Sourav from "../../../img/sourav.png";
import Vaishali from "../../../img/vaishali.png";
import OctGreen from "../../../img/octGreen.png";
import OctPink from "../../../img/octPink.png";
import AugRed from "../../../img/augRed.png";
import MonthlyChart from "./monthlyChart";
import CompositionChart from "./compositionChart";

const Dashboards = () => {

    const empList = [
        { img: Neelam, name: "Neelam Dhami", date: "Apr 15 2023" },
        { img: Mahima, name: "Mahima", date: "Apr 18 2023" },
        { img: Vaishali, name: "Vaishali Kevat", date: "Apr 22 2023" },
        { img: Sourav, name: "Sourav Chauhan", date: "Apr 22 2023" },
    ];
    const leaveList = [
        { img: AugRed, name: "Independence Day", date: "Tuesday, Aug 15, 2023", leftDays: "120 days left" },
        { img: AugRed, name: "Rakhi", date: "Wednesday, Aug 30, 2023", leftDays: "135 days left" },
        { img: OctGreen, name: "Gandhi Jayanti", date: "Tuesday, Oct 2, 2023", leftDays: "120 days left" },
        { img: OctPink, name: "Dussehra", date: "Wednesday, Oct 30, 2023", leftDays: "135 days left" },
    ];

    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            <div className="m-1 col-span-3 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Total Employees</h5>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-3">
                        <div className="text-left col-span-6">
                            <div className="text-2xl font-bold font-poppins text-[#1C1243]">56</div>
                            <div className="text-[#A29EB6] font-poppins font-bold text-lg">Employee</div>
                        </div>
                        <div className="col-span-6 text-right">
                            <div className="text-center">
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-green-200 rounded-lg ml-10 m-1">
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] text-right col-span-3 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 14 15" fill="none">
                                            <path d="M5.83315 6.57467L8.16649 8.908L11.4956 5.57892L12.8332 6.9165V3.4165H9.33315L10.6707 4.75409L8.16649 7.25834L5.83315 4.925L1.3374 9.42075L2.16224 10.2456L5.83315 6.57467Z" fill="#16C098" />
                                        </svg>
                                    </div>
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] col-span-9 m-1">10.0%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-1 col-span-3 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Total Remotely Working</h5>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-3">
                        <div className="text-left col-span-6">
                            <div className="text-2xl font-bold font-poppins text-[#1C1243]">7</div>
                            <div className="text-[#A29EB6] font-poppins font-bold text-lg">Employee</div>
                        </div>
                        <div className="col-span-6 text-right">
                            <div className="text-center">
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-green-200 rounded-lg ml-10 m-1">
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] text-right col-span-3 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 14 15" fill="none">
                                            <path d="M5.83315 6.57467L8.16649 8.908L11.4956 5.57892L12.8332 6.9165V3.4165H9.33315L10.6707 4.75409L8.16649 7.25834L5.83315 4.925L1.3374 9.42075L2.16224 10.2456L5.83315 6.57467Z" fill="#16C098" />
                                        </svg>
                                    </div>
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] col-span-9 m-1">10.0%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-1 col-span-3 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Total Leaves of Employee</h5>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-3">
                        <div className="text-left col-span-6">
                            <div className="text-2xl font-bold font-poppins text-[#1C1243]">20</div>
                            <div className="text-[#A29EB6] font-poppins font-bold text-lg">Employee</div>
                        </div>
                        <div className="col-span-6 text-right">
                            <div className="text-center">
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-green-200 rounded-lg ml-10 m-1">
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] text-right col-span-3 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 14 15" fill="none">
                                            <path d="M5.83315 6.57467L8.16649 8.908L11.4956 5.57892L12.8332 6.9165V3.4165H9.33315L10.6707 4.75409L8.16649 7.25834L5.83315 4.925L1.3374 9.42075L2.16224 10.2456L5.83315 6.57467Z" fill="#16C098" />
                                        </svg>
                                    </div>
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] col-span-9 m-1">10.0%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-1 col-span-3 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Resigned Employees</h5>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-3">
                        <div className="text-left col-span-6">
                            <div className="text-2xl font-bold font-poppins text-[#1C1243]">01</div>
                            <div className="text-[#A29EB6] font-poppins font-bold text-lg">Employee</div>
                        </div>
                        <div className="col-span-6 text-right">
                            <div className="text-center">
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-red-200 rounded-lg ml-10 m-1">
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] text-right col-span-3 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 14 15" fill="none">
                                            <path d="M5.83315 8.42533L8.16649 6.092L11.4956 9.42108L12.8332 8.0835V11.5835H9.33315L10.6707 10.2459L8.16649 7.74166L5.83315 10.075L1.3374 5.57925L2.16224 4.75441L5.83315 8.42533Z" fill="#C71026" />
                                        </svg>
                                    </div>
                                    <div className="text-xl font-bold font-poppins text-[#1C1243] col-span-9 m-1">7.0%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-1 col-span-8 p-2 bg-white border border-green-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-45">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Monthly Employees Leave</h5>
                <MonthlyChart />
            </div>
            <div className="m-1 col-span-4 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2  bg-white">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Employee on Leave</h5>
                    {empList.map(ele =>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-2">
                            <img src={ele.img} className="object-cover col-span-2" />
                            <div className="col-span-5 font-poppins text-[#1C1243] text-base">{ele.name}</div>
                            <div className="col-span-5 text-right font-poppins text-[#A29EB6] text-sm">{ele.date}</div>
                        </div>
                    )}
                </a>
            </div>
            <div className="m-1 col-span-4 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Upcoming holiday</h5>
                    {leaveList.map(ele =>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-2">
                            <img src={ele.img} className="object-cover col-span-2" />
                            <div className="col-span-5 font-poppins">
                                <div className="text-[#1C1243] text-base">{ele.name}</div>
                                <div className="text-[#A29EB6] text-xs">{ele.date}</div>
                            </div>
                            <div className="col-span-5 text-right font-poppins text-[#A29EB6] text-sm">{ele.leftDays}</div>
                        </div>
                    )}
                </a>
            </div>
            <div className="m-1 col-span-4 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Upcoming Birthdays</h5>
                    {empList.map(ele =>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 font-poppins mt-2">
                            <img src={ele.img} className="object-cover col-span-2" />
                            <div className="col-span-5 font-poppins text-[#1C1243] text-base">{ele.name}</div>
                            <div className="col-span-5 text-right font-poppins text-[#A29EB6] text-sm">{ele.date}</div>
                        </div>
                    )}
                </a>
            </div>
            <div className="m-1 col-span-4 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href="#" className="block max-w-sm p-2 bg-white">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins text-[#1C1243]">Employee Composition</h5>
                    <CompositionChart />
                    <div className="text-center font-poppins font-bold text-[#A29EB6] text-sm">856 employee total</div>
                </a>
            </div>
        </div>
    )
}
export default Dashboards;