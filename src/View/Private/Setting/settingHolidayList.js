import React, { useState, useCallback, useMemo } from "react";
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import AttendanceTable from "../../../Component/Shared/AttendanceTable";
import AddUpdateHoliday from "./addHoliday";

const SettingHolidayList = () => {

    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [updateHoliday, setUpdateHoliday] = useState(null);

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
            const data = [
                { id: 142206, holiday: "Republic Day", date: "2023-01-26", status: "Add" },
                { id: 142207, holiday: "Holi", date: "2023-03-25", status: "Remove" },
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
                Header: "Holiday",
                accessor: "holiday",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Action",
                accessor: "status",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center p-1">
                            <button className={row.original.status === "Add" ? "p-2 m-1 text-xs text-[#16C098] transition-colors border border-[#16C098] rounded-lg focus:shadow-outline hover:bg-[#16C098] hover:text-white" :
                                "p-2 m-1 text-xs text-[#C71026] transition-colors border border-[#C71026] rounded-lg focus:shadow-outline hover:bg-[#C71026] hover:text-white"}>
                                {row.original.status}
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
            <div className="text-2xl m-1 lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 font-poppins font-normal mt-2">
                <span className="text-[#A29EB6]">Settings /</span><span className="text-[#1C1243]">Holiday List</span>
            </div>
            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 p-1 lg:text-right md:text-right sm:text-left">
                <select
                    className="border focus:outline-0 rounded-full text-center font-poppins select-sm w-30 max-w-sm text-[#A29EB6] m-3 p-3"
                >
                    {[2023, 2024, 2025].map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <button className="rounded-full p-2 border bg-[#643FDB] text-white focus:ring-4 font-poppins"
                    onClick={() => setIsOpen(!isOpen)}>Add Holiday</button>
            </div>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200 p-2">
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
        {isOpen && <AddUpdateHoliday isOpen={isOpen} update={updateHoliday}
            setOpenModal={() => { setIsOpen(false); setUpdateHoliday(null) }} />}
    </>
    )
}
export default SettingHolidayList;