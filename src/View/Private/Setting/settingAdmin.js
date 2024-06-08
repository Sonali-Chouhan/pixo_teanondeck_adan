import React, { useState, useCallback, useMemo } from "react";
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import AttendanceTable from "../../../Component/Shared/AttendanceTable";
import AddUpdateAdmin from "./addAdmin";

const SettingAdmin = () => {

    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [updateAdmin, setUpdateAdmin] = useState(null);

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
            const data = [
                { id: 142206, name: "Human Resources", phone: "9041709902", email: "hr@email.com", status: "" },
                { id: 142207, name: "Admin 1", phone: "9041709901", email: "admin@email.com", status: "" },
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
                setShowData(data)
                setPageCount(1)
                setTotalRow(data.length)
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
                Header: "Employee ID",
                accessor: "id",
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "",
                accessor: "status",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center p-1"><button className="p-2 m-1 text-xs text-indigo-700 transition-colors border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100" onClick={() => { setIsOpen(true); setUpdateAdmin(row.original) }}>
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>&nbsp;Edit
                        </button>
                        </div>
                    )
                },
            },
        ],
        []
    )
    return (<>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            <div className="text-2xl m-1 lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 font-poppins font-normal">
                <span className="text-[#A29EB6]">Settings /</span><span className="text-[#1C1243]">Admin</span>
            </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 lg:text-right md:text-right sm:text-left">
                <button className="rounded-full p-2 border bg-[#643FDB] text-white focus:ring-4 font-poppins"
                    onClick={() => setIsOpen(!isOpen)}>Add Admin</button>
            </div>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200 p-3">
            <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 bg-white shadow text-center">
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
        {isOpen && <AddUpdateAdmin isOpen={isOpen} update={updateAdmin}
            setOpenModal={() => { setIsOpen(false); setUpdateAdmin(null) }} />}
    </>
    )
}
export default SettingAdmin;