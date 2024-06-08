import { Modal } from 'flowbite-react';
import DotGreen from "../../../img/dotGreen.png";
import DotYellow from "../../../img/dotYellow.png";
import DotPerpal from "../../../img/DotPerpal.png";
import DotGray from "../../../img/DotGray.png";
import DotRed from "../../../img/DotRed.png";
import Calendar from './calendar';

const UpdateAttandance = (props) => {

    return (
        <>
            <Modal show={props.isOpen} size={'6xl'} position="top-right">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-white p-3" >
                    <div className='lg:col-span-6 md:col-span-6  sm:col-span-12 p-3'>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 ml-2">
                            <img src={props.updateAttandance.img} className="object-cover rounded-full lg:col-span-1 md:col-span-2 sm:col-span-2 text-right" />
                            <span className="lg:col-span-11 md:col-span-10 sm:col-span-10 mt-3 font-poppins text-[#1C1243] font-semibold text-sm text-left">&nbsp;&nbsp;{props.updateAttandance.name}</span>
                        </div>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#F5F6FA] p-4 mt-3" >
                            <div className='lg:col-span-6 md:col-span-6  sm:col-span-12 font-poppins text-[#1C1243] font-semibold text-sm'>May Payable Days</div>
                            <div className='lg:col-span-6 md:col-span-6  sm:col-span-12 text-right'><span className='bg-[#643FDB] p-3 text-white'>24</span></div>
                        </div>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2">
                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white text-center mt-2">
                                <span className="text-xl font-poppins text-[#1C1243] font-semibold p-2">16</span>
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-1 ml-3 text-center">
                                    <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-1 ml-8" ><img src={DotGreen} /></span>
                                    <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-semibold font-poppins text-[#000000]">&nbsp;Present</div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white text-center mt-2">
                                <span className="text-xl font-poppins text-[#1C1243] font-semibold p-2">0</span>
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-1 ml-3 text-center">
                                    <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-1 ml-8" ><img src={DotYellow} /></span>
                                    <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-semibold font-poppins text-[#000000]">&nbsp;Half Day</div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white text-center mt-2">
                                <span className="text-xl font-poppins text-[#1C1243] font-semibold p-2">1</span>
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-1 ml-3 text-center">
                                    <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-1 ml-10" ><img src={DotRed} /></span>
                                    <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-semibold font-poppins text-[#000000]">&nbsp;Absent</div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white text-center mt-2">
                                <span className="text-xl font-poppins text-[#1C1243] font-semibold p-2">4</span>
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-1 ml-3 text-center">
                                    <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-1 ml-8" ><img src={DotGray} /></span>
                                    <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-semibold font-poppins text-[#000000]">&nbsp;Day Off</div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white text-center mt-2">
                                <span className="text-xl font-poppins text-[#1C1243] font-semibold p-2">0</span>
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-1 mr-1 text-center">
                                    <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-1 ml-8" ><img src={DotPerpal} /></span>
                                    <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-semibold font-poppins text-[#000000]">&nbsp;Paid Leave</div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white text-center mt-2">
                                <span className="text-xl font-poppins text-[#1C1243] font-semibold p-2">0</span>
                                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-1 mr-1 text-center">
                                    <span className="object-cover rounded-full lg:col-span-3 md:col-span-3 sm:col-span-3 mt-1 ml-8" ><img src={DotGreen} /></span>
                                    <div className="lg:col-span-9 md:col-span-9 sm:col-span-9 text-sm text-left font-semibold font-poppins text-[#000000]">&nbsp;Unpaid Leave</div>
                                </div>
                            </div>
                        </div>
                        <Calendar leaveDates={5} month={4} year={2023}/>
                    </div>
                    <div className='lg:col-span-6 md:col-span-6  sm:col-span-12'>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#F5F6FA] p-3" >
                            <div className='lg:col-span-6 md:col-span-6  sm:col-span-12 font-poppins text-[#1C1243] font-semibold text-lg lg:text-right md:text-center sm:text-left'>May 25</div>
                            <div className='lg:col-span-6 md:col-span-6  sm:col-span-12 text-right'><i className="fa fa-times cursor-pointer" aria-hidden="true" onClick={() => props.setOpenModal(false)}></i></div>
                        </div>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-3 mt-2" >
                            <span className='font-poppins text-[#1C1243] font-normal text-sm lg:col-span-12 md:col-span-12  sm:col-span-12'>Attendance Status</span>
                            <button className="rounded-full m-2 p-2 border bg-[#16C098] text-white focus:ring-4 font-poppins lg:col-span-3 md:col-span-6  sm:col-span-12">Present</button>
                            <button className="rounded-full m-2 p-2 border border-[#EAC460] text-[#EAC460] focus:ring-4 font-poppins lg:col-span-3 md:col-span-6  sm:col-span-12">Half Day</button>
                            <button className="rounded-full m-2 p-2 border border-[#C71026] text-[#C71026] focus:ring-4 font-poppins lg:col-span-3 md:col-span-6  sm:col-span-12">Absent</button>
                            <select
                                className="rounded-full m-2 p-2 border border-[#8B8B8B] text-[#8B8B8B] font-poppins lg:col-span-3 md:col-span-6  sm:col-span-12"
                            >
                                {["Day Off", "Absent"].map((ele) => (
                                    <option key={ele} value={ele}>
                                        {ele}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-3 mt-2" >
                            <span className='font-poppins text-[#1C1243] font-normal text-sm lg:col-span-12 md:col-span-12  sm:col-span-12'>Leave Status</span>
                            <select
                                className="rounded-full m-2 p-2 border border-[#D682DE] text-[#D682DE] font-poppins lg:col-span-4 md:col-span-6  sm:col-span-12"
                            >
                                {["Paid Leave", "Unpaid Leave", "Half Day"].map((ele) => (
                                    <option key={ele} value={ele}>
                                        {ele}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="rounded-full m-2 p-2 border border-[#70AFD2] text-[#70AFD2] font-poppins lg:col-span-4 md:col-span-6  sm:col-span-12"
                            >
                                {["Unpaid Leave", "Paid Leave", "Half Day"].map((ele) => (
                                    <option key={ele} value={ele}>
                                        {ele}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="rounded-full m-2 p-2 border border-[#00F0E2] text-[#00F0E2] font-poppins lg:col-span-4 md:col-span-6  sm:col-span-12"
                            >
                                {["Half Day", "Paid Leave", "Unpaid Leave"].map((ele) => (
                                    <option key={ele} value={ele}>
                                        {ele}
                                    </option>
                                ))}
                            </select></div>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-3 mt-2" >
                            <span className='font-poppins text-[#1C1243] font-normal text-sm lg:col-span-12 md:col-span-12  sm:col-span-12'>In & Out Time</span>
                            <span className="lg:col-span-1 md:col-span-2 sm:col-span-4 text-center mt-4"><i className="fa fa-user rounded-full text-white bg-[#A29EB6] p-2" aria-hidden="true"></i></span>
                            <span className="lg:col-span-2 md:col-span-4 sm:col-span-6 font-poppins text-[#1C1243] font-normal text-sm text-left mt-5">Check In</span>
                            <span className="rounded-full m-2 mt-2 p-1 border bg-[#ECEEF6] font-poppins lg:col-span-3 md:col-span-3  sm:col-span-6 text-left">09:00:00 AM</span>
                            <div className="lg:col-span-6 md:col-span-3 sm:col-span-2"></div>
                            <span className="lg:col-span-1 md:col-span-2 sm:col-span-6 text-center mt-4"><i className="fa fa-user rounded-full text-white bg-[#A29EB6] p-2" aria-hidden="true"></i></span>
                            <span className="lg:col-span-2 md:col-span-4 sm:col-span-6 font-poppins text-[#1C1243] font-normal text-sm text-left mt-5">Check Out</span>
                            <span className="rounded-full m-2 mt-2 p-1 border bg-[#ECEEF6] font-poppins lg:col-span-3 md:col-span-3  sm:col-span-6 text-left">06:10:00 PM</span>
                        </div>
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-3 mt-2" >
                            <span className='font-poppins text-[#1C1243] font-normal text-sm lg:col-span-12 md:col-span-12  sm:col-span-12'>Add Note</span>
                            <div className="lg:col-span-12 md:col-span-12 sm:col-span-12 m-2 font-poppins">
                                <textarea id="note"
                                    rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note" /></div>
                        </div>
                        <button className="rounded-full m-2 p-2 border bg-[#643FDB] text-white focus:ring-4 font-poppins">
                            Save Note
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default UpdateAttandance;