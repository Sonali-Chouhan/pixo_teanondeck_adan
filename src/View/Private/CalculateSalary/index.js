import React, { useState } from "react";
import SalaryTable from "./salaryTable";
import VerifyAttancdance from "./verifyAttancdance";
import Neelam from "../../../img/neelam.png";
import Mahima from "../../../img/mahima.png";
import Sourav from "../../../img/sourav.png";
import Vaishali from "../../../img/vaishali.png";

const CalculateSalary = () => {

    const [isVerify, setIsVerify] = useState(false);
    const [verify, setVerify] = useState(false);

    const [data, setData] = useState([
        { id: 101, checked: false, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", joiningDate: "21-Mar-2023", phone: "9054338321" },
        { id: 102, checked: false, img: Mahima, name: "Mahima", designation: "HR", joiningDate: "21-Mar-2023", phone: "7054338321" },
        { id: 103, checked: false, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", joiningDate: "21-Mar-2023", phone: "6054338321" },
        { id: 104, checked: false, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", joiningDate: "21-Mar-2023", phone: "8854338321" },
        { id: 105, checked: false, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", joiningDate: "21-Mar-2023", phone: "9054338321" },
        { id: 106, checked: false, img: Mahima, name: "Mahima", designation: "HR", joiningDate: "21-Mar-2023", phone: "7054338321" },
        { id: 100, checked: false, img: Sourav, name: "Aakash Sangal", designation: "ROR Developer", joiningDate: "21-Mar-2023", phone: "9563452521" },
        { id: 107, checked: false, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", joiningDate: "12-Mar-2023", phone: "6054338321" },
        { id: 108, checked: false, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", joiningDate: "28-Mar-2023", phone: "8854338321" },
        { id: 109, checked: false, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", joiningDate: "21-Mar-2023", phone: "9054338321" },
        { id: 110, checked: false, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", joiningDate: "21-Mar-2023", phone: "8854338321" },
        { id: 111, checked: false, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", joiningDate: "27-Mar-2023", phone: "9054338321" },
        { id: 112, checked: false, img: Mahima, name: "Mahima", designation: "HR", joiningDate: "21-Mar-2023", phone: "7054338321" },
        { id: 113, checked: false, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", joiningDate: "21-Mar-2023", phone: "6054338321" },
        { id: 114, checked: false, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", joiningDate: "25-Mar-2023", phone: "8854338321" },
        { id: 115, checked: false, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", joiningDate: "21-Mar-2023", phone: "9054338321" },
        { id: 116, checked: false, img: Mahima, name: "Mahima", designation: "HR", joiningDate: "21-Mar-2023", phone: "7054338321" },
        { id: 117, checked: false, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", joiningDate: "21-Mar-2023", phone: "6054338321" },
        { id: 118, checked: false, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", joiningDate: "29-Mar-2023", phone: "8854338321" },
        { id: 119, checked: false, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", joiningDate: "22-Apr-2023", phone: "9054338321" },
        { id: 120, checked: false, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", joiningDate: "21-Mar-2020", phone: "8854338321" },
    ]);
    const filterData = (data) => {
        const filterArr = data.filter(ele => ele.checked);
        const orgData = filterArr.map((ele) => {
            return {
                ...ele, workedOn: 20, absent: 0, payable: 24, coll: false,
                week_off: 4, public_holiday: 0, days_off: 4, privileged_leave: 0, sick_leave: 0, casual_leave: 1, paid_leaves: 0, present: 24,
                half_day: 0, worked_on: 0, unpaid_leave: 0, absent: 1, total_working: 1,ctc_month:20000,payableAmount:15483.87,
                paid:0.00,remaining:15483.87,earnings:15483.87,employee_pf:"N/A"
            }
        })
        return orgData;
    }
    return (
        <>
            {!isVerify ? <>
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
                    <div className="text-3xl m-1 lg:col-span-10 md:col-span-8  sm:col-span-12 p-1 font-poppins text-[#1C1243]">
                        Calculate Salary
                    </div>
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
                </div>
                <div className="bg-white m-1 col-span-12">
                    <SalaryTable
                        data={data}
                        verifySalaryhandler={() => setIsVerify(true)}
                        verify={verify}
                        getTable={(data) => setData(data)}
                    />
                </div>
            </>
                :
                <>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
                        <div className="text-2xl m-1 lg:col-span-12 md:col-span-12  sm:col-span-12 p-1 font-poppins font-normal">
                            <span className="text-[#A29EB6]">Calculate Salary / </span><span className="text-[#1C1243]">Verify Attendance</span>
                        </div>
                    </div>
                    <VerifyAttancdance
                        data={filterData(data)}
                        setIsVerify={() => setIsVerify(!isVerify)}
                        verify={verify}
                        setVerify={(data) => { setVerify(data); setIsVerify(!isVerify) }}
                    />
                </>
            }
        </>
    )
}
export default CalculateSalary;
