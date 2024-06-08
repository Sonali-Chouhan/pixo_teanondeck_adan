import React, { useState, useCallback, useMemo } from "react";
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import AttendanceTable from "../../../Component/Shared/AttendanceTable";

const ReportList = () => {

    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
            const data = [
                { id: 100,type: "Employee List Report", month: "Apr 2023", format: "XLSX", genratedOn: "16-04-2023", status: "In Progress" },
                { id: 101,type: "daily_attendance_report", month: "Apr 2023", format: "XLSX", genratedOn: "15-04-2023", status: "Download" },
                { id: 102,type: "salary_report", month: "Apr 2023", format: "XLSX", genratedOn: "11-04-2023", status: "Faild" },
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
                Header: "Report Type",
                accessor: "type",
            },
            {
                Header: "Month",
                accessor: "month",
            },
            {
                Header: "Format",
                accessor: "format",
            },
            {
                Header: "Generated On",
                accessor: "genratedOn",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center p-2">
                            {row.original.status === "In Progress" &&  <span className="font-poppins  text-[#FF8A00]">{row.original.status}</span>}
                            {row.original.status === "Download" &&  <span className="font-poppins  text-[#643FDB]">{row.original.status}</span>}
                            {row.original.status === "Faild" &&  <span className="font-poppins  text-[#FF0000]">{row.original.status}</span>}
                        </div>
                    )
                },
            },
        ],
        []
    )

    return (
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
    )
}

export default ReportList;