import React, { useState, useCallback, useMemo } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import DocumentTable from "../../../Component/Shared/DocumentTable";
import Neelam from "../../../img/neelam.png";
import Mahima from "../../../img/mahima.png";
import Sourav from "../../../img/sourav.png";
import Vaishali from "../../../img/vaishali.png";

const SettingEmployeeManager = () => {

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
                { id: 100, img: Sourav, name: "Aakash Sangal", designation: "Admin" },
                { id: 101, img: Neelam, name: "Neelam Dhami", designation: "Employee" },
                { id: 102, img: Mahima, name: "Mahima", designation: "Manager" },
                { id: 103, img: Vaishali, name: "Vaishali Kevat", designation: "Admin" },
                { id: 104, img: Sourav, name: "Sourav Chauhan", designation: "Employee" },
                { id: 105, img: Neelam, name: "Neelam Dhami", designation: "Employee" },
                { id: 106, img: Mahima, name: "Mahima", designation: "Admin" },
                { id: 107, img: Vaishali, name: "Vaishali Kevat", designation: "Employee" },
                { id: 108, img: Sourav, name: "Sourav Chauhan", designation: "Admin" },
                { id: 109, img: Neelam, name: "Neelam Dhami", designation: "Manager" },
                { id: 110, img: Sourav, name: "Sourav Chauhan", designation: "Admin" },
                { id: 111, img: Neelam, name: "Neelam Dhami", designation: "Employee" },
                { id: 112, img: Mahima, name: "Mahima", designation: "Admin" },
                { id: 113, img: Vaishali, name: "Vaishali Kevat", designation: "Employee" },
                { id: 114, img: Sourav, name: "Sourav Chauhan", designation: "Admin" },
                { id: 115, img: Neelam, name: "Neelam Dhami", designation: "Employee" },
                { id: 116, img: Mahima, name: "Mahima", designation: "Admin" },
                { id: 117, img: Vaishali, name: "Vaishali Kevat", designation: "Employee" },
                { id: 118, img: Sourav, name: "Sourav Chauhan", designation: "Admin" },
                { id: 119, img: Neelam, name: "Neelam Dhami", designation: "Employee" },
                { id: 120, img: Sourav, name: "Sourav Chauhan", designation: "Admin" },
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
                pageSize = pageSize ? pageSize : showPage;
                const pages = pageIndex + 1;
                let indexOfLastPost = pages * pageSize;
                let indexOfFirstPost = indexOfLastPost - pageSize;
                const rowData = results.slice(indexOfFirstPost, indexOfLastPost);
                setData(results)
                setShowData(rowData)
                setPageCount(Math.ceil(results.length / pageSize))
                setTotalRow(results.length)
                setLoading(false)
                setPage(pages)
                setShowPage(pageSize)
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
                Header: "Action",
                accessor: "id",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center">
                            <select
                                disabled={row.original.designation === "Admin"}
                                className={row.original.designation === "Admin" ? "border bg-[#A29EB6] text-white focus:outline-0 rounded-full text-center font-poppins  text-white m-1 p-2" :
                                    "border  bg-[#ECEEF6] focus:outline-0 rounded-full text-center font-poppins m-1 p-2"}
                            >
                                {row.original.designation === "Admin" ?
                                    <option key={"Admin"} value={"Admin"} selected={true}>
                                        Admin
                                    </option>
                                    :
                                    (
                                        ["Employee", "Manager"].map((ele) => (
                                            <option key={ele} value={ele} selected={row.original.designation === ele}>
                                                {ele}
                                            </option>
                                        ))
                                    )
                                }
                            </select>
                        </div>
                    )
                },
                disableSortBy: true,
            },
        ],
        []
    )
    const onChange = useDebouncedCallback((value, data) => {
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

    return (<>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            <div className="text-2xl m-1 lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 font-poppins font-normal">
                <span className="text-[#A29EB6]">Settings /</span><span className="text-[#1C1243]">Employees & Managers</span>
            </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 lg:text-right md:text-right sm:text-left">
                <div class="relative mt-2">
                    <input type="text"
                        value={valueSearch || ""}
                        onChange={(e) => {
                            setValueSearch(e.target.value)
                            onChange(e.target.value, data)
                        }}
                        className="pl-10 pr-4 py-2 border rounded-lg font-poppins text-[#A29EB6]"
                        placeholder="Search for employee" />
                </div>
            </div>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200 p-3">
            <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 bg-white shadow text-center">
                <ErrorBoundary>
                    <DocumentTable
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
    </>
    )
}
export default SettingEmployeeManager;