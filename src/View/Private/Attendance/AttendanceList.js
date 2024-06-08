import React, { useState, useCallback, useMemo } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import AttendanceTable from "../../../Component/Shared/AttendanceTable";
import Neelam from "../../../img/neelam.png";
import Mahima from "../../../img/mahima.png";
import Sourav from "../../../img/sourav.png";
import Vaishali from "../../../img/vaishali.png";

const AttendanceList = () => {

    const [data, setData] = useState([])
    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);
    const [valueSearch, setValueSearch] = useState('');

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
            const data = [
                { id: 100, img: Sourav, name: "Aakash Sangal", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 101, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 102, img: Mahima, name: "Mahima", designation: "HR", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 103, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 104, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 105, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 106, img: Mahima, name: "Mahima", designation: "HR", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 107, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 108, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 109, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 110, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 111, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 112, img: Mahima, name: "Mahima", designation: "HR", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 113, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 114, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 115, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Present" },
                { id: 116, img: Mahima, name: "Mahima", designation: "HR", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 117, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 118, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 119, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
                { id: 120, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", checkin: "09:00:00 AM", checkout: "06:00:00 PM", status: "Absent" },
            ];
            if (data) {
                if (order && order.length > 0 && data.length > 0) {
                    const keys = order[0].id;
                    const type = order[0].desc;
                    const a = data[0];
                    if (type) {
                        if (typeof a[keys] == 'number') {
                            data.sort((a, b) => b[keys] - a[keys])
                        } else {
                            data.sort((a, b) => {
                                if (a[keys] < b[keys]) {
                                    return 1;
                                }
                                if (a[keys] > b[keys]) {
                                    return -1;
                                }
                                return 0
                            })
                        }
                    }
                    else {
                        if (typeof a[keys] == 'number') {
                            data.sort((a, b) => a[keys] - b[keys])
                        } else {
                            data.sort((a, b) => {
                                if (a[keys] < b[keys]) {
                                    return -1;
                                }
                                if (a[keys] > b[keys]) {
                                    return 1;
                                }
                                return 0
                            })
                        }
                    }
                }
                var results = [];
                search=valueSearch;
                if (search !== "") {
                    for (let i = 0; i < data.length; i++) {
                        if ((data[i].name).toLowerCase().includes(search.toLowerCase())) {
                            console.log(results)
                            results.push(data[i]);
                        }
                    }
                } else {
                    results = [...data]
                }
                setData(data)
                setShowData(results)
                setPageCount(1)
                setTotalRow(results.length)
                setLoading(false)
                setPage(1)
                setShowPage(1)
            }
        },
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: ({ row }) => (
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                        <span className=" col-span-2"></span>
                        <img src={row.original.img} className="object-cover rounded-full  col-span-2 text-right" />
                        <span className=" col-span-8 text-left">{row.original.name}</span>
                    </div>
                ),
            },
            {
                Header: "Designation",
                accessor: "designation",
            },
            {
                Header: "Check In",
                accessor: "checkin",
            },
            {
                Header: "Check Out",
                accessor: "checkout",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center">
                            <select
                                value={row.original.status}
                                className={row.original.status === "Present" ? "border bg-[#16C098] text-white focus:outline-0 rounded-full text-center font-poppins  text-[#A29EB6] m-1 p-1" :
                                    "border  bg-[#C71026] text-white focus:outline-0 rounded-full text-center font-poppins  text-[#A29EB6] m-1 p-1"}
                            >
                                {["Present", "Absent"].map((ele) => (
                                    <option key={ele} value={ele}>
                                        {ele}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )
                },
                disableSortBy: true,
            },
        ],
        []
    )
    const onChange = useDebouncedCallback((value,data) => {
        var results = [];
        if (value !== "") {
            for (let i = 0; i < data.length; i++) {
                if ((data[i].name).toLowerCase().includes(value.toLowerCase())) {
                    results.push(data[i]);
                }
            }
        } else {
            results = [...data]
        }
        setData(data)
        setShowData(results)
        setPageCount(1)
        setTotalRow(results.length)
        setLoading(false)
        setPage(1)
        setShowPage(1)
    }, 700)

    return (
        <div>
            <div className="text-right">
                <div class="relative mt-2">
                    <input type="text"
                        value={valueSearch || ""}
                        onChange={(e) => {
                            setValueSearch(e.target.value)
                            onChange(e.target.value,data)
                        }}
                        className="pl-10 pr-4 py-2 border rounded-lg font-poppins text-[#A29EB6]"
                        placeholder="Search for employee" />
                    {/* <div class="absolute inset-y-0 left-0 pl-5  
                                     flex items-center  
                                    pointer-events-none">
                            <i class="fa fa-search text-gray-400"></i>
                        </div> */}
                </div>
            </div>
            <div className="bg-white m-1 col-span-12">
                <ErrorBoundary>
                    <AttendanceTable
                        columns={columns}
                        data={showData}
                        fetchData={fetchData}
                        loading={loading}
                        pageCount={pageCount}
                        totalRow={totalRow}
                        showPage={showPage}
                        currentPage={page}
                    />
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default AttendanceList;