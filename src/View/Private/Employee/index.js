import React, { useState } from "react";
import EmployeeTable from "./employeeTable";
import AddUpdateEmployee from "./addUpdateEmployee";
import AttandanceCalendar from "./attandanceCalendar";

const Employee = () => {

    const [isAdd, setIsAdd] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const [attandanceRowData, setAttandanceRowData] = useState(null);

    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            {attandanceRowData ? <>
                <div className="text-2xl m-1 lg:col-span-12  md:col-span-12 sm:col-span-12 p-1 font-poppins font-normal">
                    <span className="text-[#A29EB6]">Employees /</span><span className="text-[#1C1243]">Attandance</span>
                </div>
                <div className="lg:col-span-12  md:col-span-12 sm:col-span-12 p-1 font-poppins">
                    <AttandanceCalendar row={attandanceRowData} />
                </div>
            </>
                :
                <>
                    {!isAdd ? <>
                        <div className="text-2xl m-1 p-1 lg:col-span-6  md:col-span-6 sm:col-span-12 font-poppins font-normal">
                            <span className="text-[#A29EB6]">Employees </span>
                        </div>
                        <div className="m-1 lg:col-span-6  md:col-span-6 sm:col-span-12 p-1 text-right">
                            <button className="focus:outline-none text-white font-poppins bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 font-poppins dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                onClick={() => setIsAdd(true)}>Add Employee</button>
                        </div>
                    </>
                        :
                        <div className="text-2xl m-1 p-1 lg:col-span-12  md:col-span-12 sm:col-span-12 font-poppins font-normal">
                            {updateId ? <>
                                <span className="text-[#A29EB6]">Employees /</span><span className="text-[#1C1243]">Update Employee</span>
                            </> : <>
                                <span className="text-[#A29EB6]">Employees /</span><span className="text-[#1C1243]">Add Employee</span>
                            </>
                            }
                        </div>
                    }
                    <div className="m-1 lg:col-span-12  md:col-span-12 sm:col-span-12">
                        {isAdd ? <AddUpdateEmployee data={updateId} /> :
                            <EmployeeTable
                                setAttandanceRowData={(val) => setAttandanceRowData(val)}
                                setUpdateId={(val) => { setUpdateId(val); setIsAdd(true) }} />
                        }
                    </div>
                </>
            }
        </div>
    )
}
export default Employee;
