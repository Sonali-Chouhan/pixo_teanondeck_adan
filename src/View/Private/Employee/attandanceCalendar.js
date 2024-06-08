import React from "react";
import DotGreen from "../../../img/dotGreen.png";
import DotYellow from "../../../img/dotYellow.png";
import DotPerpal from "../../../img/DotPerpal.png";
import DotGray from "../../../img/DotGray.png";
import DotRed from "../../../img/DotRed.png";

const AttandanceCalendar = (props) => {
    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-white p-2">
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-2">
                    <img src={props.row.img} className="object-cover rounded-full  lg:col-span-1 md:col-span-2 sm:col-span-3 text-center" />
                    <span className="lg:col-span-8 md:col-span-8 sm:col-span-8 text-left font-poppins"><span className="text-sm font-semibold">{props.row.name}</span>
                        <div className="text-xs font-normal">{props.row.designation + " / " + props.row.phone}</div>
                    </span>
                    <span className="lg:col-span-3 md:col-span-2 sm:col-span-1"></span>
                </div>
            </div>
            <div className="lg:col-span-6  md:col-span-6 sm:col-span-12 text-right">
                <select
                    className="border focus:outline-0 rounded-full text-center font-poppins select-sm w-30 max-w-sm text-[#A29EB6] m-1 lg:col-span-1 md:col-span-2  sm:col-span-12 p-1"
                >
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                <select
                    className="border focus:outline-0 rounded-full text-center font-poppins select-sm w-30 max-w-sm text-[#A29EB6] m-1 lg:col-span-1 md:col-span-2  sm:col-span-12 p-1"
                >
                    {[2021, 2022, 2023, 2024, 2025].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                <button className="rounded-full m-1 p-2 border bg-[#643FDB] text-white focus:ring-4 font-poppins text-sm font-normal">
                    <i class="fa fa-download" aria-hidden="true"></i>&nbsp;  Download Report
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
            </div>
        </div>
    )
}
export default AttandanceCalendar;