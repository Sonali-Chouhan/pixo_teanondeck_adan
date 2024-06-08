import React, { useState } from "react";
import Sourav from "../../../img/sourav.png";
import Admin1 from "../../../img/admin1.png";

const SettingLeaveRequest = () => {
    const [status, setStatus] = useState("Upcoming");

    return (<>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            <div className="text-2xl m-1 lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 font-poppins font-normal">
                <span className="text-[#A29EB6]">Settings /</span><span className="text-[#1C1243]"> Leaves Request</span>
            </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 lg:text-right md:text-right sm:text-left">
                <select
                    className="border focus:outline-0 rounded-full text-center font-poppins select-sm w-30 max-w-sm text-[#A29EB6] m-3 p-3"
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {["Upcoming", "History"].map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200 p-3">
            <div className=" lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white shadow text-center p-4 rounded-lg m-2 mb-2">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mb-2">
                    <img src={Sourav} className="object-cover rounded-full  lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                    <span className="lg:col-span-5 md:col-span-5 sm:col-span-5 text-left mt-2 font-poppins font-semibold text-md">Sourav</span>
                    <span className="lg:col-span-5 md:col-span-5 sm:col-span-5 text-right mt-2 text-[#A29EB6] font-poppins text-sm">10 Mints Ago</span>
                </div>
                <hr />
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mb-5">
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-left mt-2 font-poppins font-semibold text-sm">From</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-center mt-2 font-poppins font-semibold text-sm">To</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-right mt-2 font-poppins font-semibold text-sm">Day</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-left mt-1 font-poppins text-xs">2023-09-26</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-center mt-1 font-poppins text-xs">2023-01-26</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-right mt-1 font-poppins text-xs">2</span>
                    <span className="lg:col-span-12 md:col-span-12 sm:col-span-12 mt-2"><hr /></span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-2 font-poppins text-sm font-semibold">Type of leave</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-2 font-poppins text-sm font-semibold">Attached Files</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-1 font-poppins text-xs">Sick Leave</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-1 text-[#643FDB] font-poppins text-xs">View</span>
                    <span className="lg:col-span-12 md:col-span-12 sm:col-span-12 mt-2"><hr /></span>
                    {status === "History" ?
                        <>
                            <span className="lg:col-span-3 md:col-span-2 sm:col-span-2 mt-2 font-poppins text-sm"></span>
                            <img src={Admin1} className="object-cover rounded-full  lg:col-span-1 md:col-span-2 sm:col-span-2 text-right mt-3" />
                            <span className="lg:col-span-8 md:col-span-8 sm:col-span-8 text-left mt-3 font-poppins font-normal text-md"><span className="text-[#16C098]">Approve</span>  by Admin 1 </span>
                        </>
                        :
                        <>
                            <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 text-left mt-2 font-poppins text-sm"></span>
                            <button className="rounded-full text-[#16C098] bg-[#16C0984D] focus:ring-4 font-poppins p-2 text-center m-2 lg:col-span-4 md:col-span-4 sm:col-span-4 text-left"
                            >Approve</button>
                            <button className="lg:col-span-4 md:col-span-4 sm:col-span-4 rounded-full text-[#C71026]  bg-[#ffc0cb] text-center focus:ring-4 font-poppins p-2 m-2"
                            >Decline</button>
                            <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 text-left mt-2 font-poppins text-sm"></span>
                        </>
                    }
                </div>
            </div>
            <div className=" lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white shadow text-center p-4 rounded-lg m-2">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mb-2">
                    <img src={Sourav} className="object-cover rounded-full  lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                    <span className="lg:col-span-5 md:col-span-5 sm:col-span-5 text-left mt-2 font-poppins font-semibold text-md">Sourav</span>
                    <span className="lg:col-span-5 md:col-span-5 sm:col-span-5 text-right mt-2 text-[#A29EB6] font-poppins text-sm">10 Mints Ago</span>
                </div>
                <hr />
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mb-2">
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-left mt-2 font-poppins font-semibold text-sm">From</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-center mt-2 font-poppins font-semibold text-sm">To</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-right mt-2 font-poppins font-semibold text-sm">Day</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-left mt-1 font-poppins text-xs">2023-09-26</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-center mt-1 font-poppins text-xs">2023-01-26</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-right mt-1 font-poppins text-xs">2</span>
                    <span className="lg:col-span-12 md:col-span-12 sm:col-span-12 mt-2"><hr /></span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-2 font-poppins text-sm font-semibold">Type of leave</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-2 font-poppins text-sm font-semibold">Attached Files</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-1 font-poppins text-xs">Sick Leave</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-1 text-[#643FDB] font-poppins text-xs">View</span>
                    <span className="lg:col-span-12 md:col-span-12 sm:col-span-12 mt-2"><hr /></span>
                    {status === "History" ?
                        <>
                            <span className="lg:col-span-3 md:col-span-2 sm:col-span-2 mt-2 font-poppins text-sm"></span>
                            <img src={Admin1} className="object-cover rounded-full  lg:col-span-1 md:col-span-2 sm:col-span-2 text-right mt-3" />
                            <span className="lg:col-span-8 md:col-span-8 sm:col-span-8 text-left mt-3 font-poppins font-normal text-md"><span className="text-[#16C098]">Approve</span>  by Admin 1 </span>
                        </>
                        :
                        <>
                            <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 text-left mt-2 font-poppins text-sm"></span>
                            <button className="rounded-full text-[#16C098] bg-[#16C0984D] focus:ring-4 font-poppins p-2 text-center m-2 lg:col-span-4 md:col-span-4 sm:col-span-4 text-left"
                            >Approve</button>
                            <button className="lg:col-span-4 md:col-span-4 sm:col-span-4 rounded-full text-[#C71026]  bg-[#ffc0cb] text-center focus:ring-4 font-poppins p-2 m-2"
                            >Decline</button>
                            <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 text-left mt-2 font-poppins text-sm"></span>
                        </>
                    }
                </div>
            </div>
            <div className=" lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white shadow text-center p-4 rounded-lg m-2">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mb-2">
                    <img src={Sourav} className="object-cover rounded-full  lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                    <span className="lg:col-span-5 md:col-span-5 sm:col-span-5 text-left mt-2 font-poppins font-semibold text-md">Sourav</span>
                    <span className="lg:col-span-5 md:col-span-5 sm:col-span-5 text-right mt-2 text-[#A29EB6] font-poppins text-sm">10 Mints Ago</span>
                </div>
                <hr />
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mb-2">
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-left mt-2 font-poppins font-semibold text-sm">From</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-center mt-2 font-poppins font-semibold text-sm">To</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-right mt-2 font-poppins font-semibold text-sm">Day</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-left mt-1 font-poppins text-xs">2023-09-26</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-center mt-1 font-poppins text-xs">2023-01-26</span>
                    <span className="lg:col-span-4 md:col-span-4 sm:col-span-4 text-right mt-1 font-poppins text-xs">2</span>
                    <span className="lg:col-span-12 md:col-span-12 sm:col-span-12 mt-2"><hr /></span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-2 font-poppins text-sm font-semibold">Type of leave</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-2 font-poppins text-sm font-semibold">Attached Files</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-1 font-poppins text-xs">Sick Leave</span>
                    <span className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-center mt-1 text-[#643FDB] font-poppins text-xs">View</span>
                    <span className="lg:col-span-12 md:col-span-12 sm:col-span-12 mt-2"><hr /></span>
                    {status === "History" ?
                        <>
                            <span className="lg:col-span-3 md:col-span-2 sm:col-span-2 mt-2 font-poppins text-sm"></span>
                            <img src={Admin1} className="object-cover rounded-full  lg:col-span-1 md:col-span-2 sm:col-span-2 text-right mt-3" />
                            <span className="lg:col-span-8 md:col-span-8 sm:col-span-8 text-left mt-3 font-poppins font-normal text-md"><span className="text-[#C71026]">Decline</span>  by Admin 1 </span>
                        </>
                        :
                        <>
                            <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 text-left mt-2 font-poppins text-sm"></span>
                            <button className="rounded-full text-[#16C098] bg-[#16C0984D] focus:ring-4 font-poppins p-2 text-center m-2 lg:col-span-4 md:col-span-4 sm:col-span-4 text-left"
                            >Approve</button>
                            <button className="lg:col-span-4 md:col-span-4 sm:col-span-4 rounded-full text-[#C71026]  bg-[#ffc0cb] text-center focus:ring-4 font-poppins p-2 m-2"
                            >Decline</button>
                            <span className="lg:col-span-2 md:col-span-2 sm:col-span-2 text-left mt-2 font-poppins text-sm"></span>
                        </>
                    }
                </div>
            </div>
        </div>
    </>
    )
}
export default SettingLeaveRequest;