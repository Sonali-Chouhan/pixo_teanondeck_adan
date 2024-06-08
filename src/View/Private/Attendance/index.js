import React from "react";
import DotGreen from "../../../img/dotGreen.png";
import DotYellow from "../../../img/dotYellow.png";
import DotPerpal from "../../../img/DotPerpal.png";
import DotGray from "../../../img/DotGray.png";
import DotRed from "../../../img/DotRed.png";
import AttendanceList from "./AttendanceList";

const Attendance = () => {

    return (
        <>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
                <div className="text-3xl m-1 lg:col-span-8 md:col-span-6  sm:col-span-12 p-1 font-poppins text-[#1C1243] font-bold">
                    Attendance
                </div>
                <select
                    className="border focus:outline-0 rounded-full text-center font-poppins select-sm w-30 max-w-sm text-[#A29EB6] m-1 lg:col-span-2 md:col-span-3  sm:col-span-12 p-1"
                >
                    {["15/4/2023", "16/4/2023", "17/4/2023", "18/4/2023"].map((ele) => (
                        <option key={ele} value={ele}>
                            {ele}
                        </option>
                    ))}
                </select>
                <button className="border bg-violet-500 text-white focus:outline-0 rounded-full text-center font-poppins select-sm w-30 max-w-sm text-[#A29EB6] m-1 lg:col-span-2 md:col-span-3  sm:col-span-12 p-1" >
                    <i class="fa fa-download" aria-hidden="true"></i>&nbsp; Daily Report
                </button>
            </div>
            <div className="lg:col-span-12 md:col-span-12  sm:col-span-12">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                    <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 p-8 bg-white border border-gray-200  shadow text-center">
                        <span className="text-xl font-poppins text-[#1C1243] font-bold ">16</span>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 mr-6">
                            <span className="lobject-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-2 ml-5" ><img src={DotGreen} /></span>
                            <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-bold font-poppins text-[#000000]">&nbsp;Present</div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 p-8 bg-white border border-gray-200  shadow text-center">
                        <span className="text-xl font-poppins text-[#1C1243] font-bold ">0</span>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 mr-6">
                            <span className="lobject-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-2 ml-5" ><img src={DotYellow} /></span>
                            <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-bold font-poppins text-[#000000]">&nbsp;Half Day</div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 p-8 bg-white border border-gray-200  shadow text-center">
                        <span className="text-xl font-poppins text-[#1C1243] font-bold ">1</span>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 mr-6">
                            <span className="lobject-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-2 ml-5" ><img src={DotRed} /></span>
                            <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-bold font-poppins text-[#000000]">&nbsp;Absent</div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 p-8 bg-white border border-gray-200  shadow text-center">
                        <span className="text-xl font-poppins text-[#1C1243] font-bold ">0</span>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 mr-6">
                            <span className="lobject-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-2 ml-5" ><img src={DotGray} /></span>
                            <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-bold font-poppins text-[#000000]">&nbsp;Day Off</div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 p-8 bg-white border border-gray-200  shadow text-center">
                        <span className="text-xl font-poppins text-[#1C1243] font-bold ">0</span>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                            <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-2 ml-5" ><img src={DotPerpal} /></span>
                            <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-bold font-poppins text-[#000000]">Paid Leave</div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 p-8 bg-white border border-gray-200  shadow text-center">
                        <span className="text-xl font-poppins text-[#1C1243] font-bold ">0</span>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                        <img src={DotGreen} className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-2 ml-5" />
                        <span className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-bold font-poppins text-[#000000]">Unpaid Leave</span>
                    </div>               
                    </div>
                </div>
                <AttendanceList />
            </div>
        </>
    )
}

export default Attendance;
