import React, { useState } from "react"
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

const DocumentTable = ({
    columns,
    data,
    fetchData,
    loading,
    pageCount,
    totalRow,
    showPage,
    currentPage,
    verify
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        gotoPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter, sortBy },
    } = useTable(
        {
            columns,
            data,
            manualPagination: true,
            manualGlobalFilter: true,
            manualSortBy: true,
            initialState: {
                pageIndex: 0,
                pageSize: totalRow,
            }, // Pass our hoisted table state
            pageCount: pageCount,
            autoResetSortBy: false,
            autoResetExpanded: false,
            autoResetPage: false,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )
    const [pageArr, setPageArr] = useState([]);

    React.useEffect(() => {
        let search = globalFilter === undefined ? "" : globalFilter
        fetchData(pageSize, pageIndex, search, sortBy)
    }, [fetchData, pageIndex, pageSize, globalFilter, sortBy])

    React.useEffect(() => {
        const arr = [];
        for (let i = 1; i <= pageCount; i++) {
            arr.push(i)
        }
        setPageArr(arr);
    }, [pageCount])

    return (
        <>
            <div className="overflow-x-auto relative">
                <table
                    {...getTableProps()}
                    className="table table-compact table-zebra w-full"
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        className="border font-poppins text-[#1C1243] p-3 font-semibold"
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} >
                        {page.length > 0 ? (
                            page.map((row, i) => {
                                prepareRow(row)
                                return (<>
                                    <tr
                                        {...row.getRowProps()}
                                    >
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}
                                                    className="border p-1 text-sm  text-center font-poppins text-[#1C1243] font-normal"
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                    {row.original.coll &&
                                        <tr {...row.getRowProps()}>
                                            <td
                                                className="font-poppins text-[#1C1243]"
                                            >
                                                <>
                                                    {verify ?
                                                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6] font-normal">
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Earnings</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.earnings}</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Basic</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.earnings}</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-5"></div>
                                                        </div>
                                                        : <>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6] font-normal">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Week Off</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.week_off}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Public Holiday</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.public_holiday}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-5"></div>
                                                            </div>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins font-normal">Days Off</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right font-normal">{row.original.days_off}</div>
                                                            </div>
                                                        </>
                                                    }
                                                </>
                                            </td>
                                            <td
                                                className="text-center font-poppins text-[#1C1243]"
                                            >
                                                <>
                                                    {verify ?
                                                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6] font-normal">
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Earnings</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.earnings}</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Basic</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.earnings}</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-5"></div>
                                                        </div>
                                                        : <>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6]">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Privileged Leave</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.privileged_leave}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Sick Leave</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.sick_leave}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins ">Casual Leave</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.casual_leave}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-0.4"></div>
                                                            </div>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins font-normal">Paid Leaves</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right font-normal">{row.original.paid_leaves}</div>
                                                            </div>
                                                        </>
                                                    }
                                                </>
                                            </td>
                                            <td
                                                className="text-center font-poppins text-[#1C1243]"
                                            >
                                                <>
                                                    {verify ?
                                                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6] font-normal">
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Employee PF</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.employee_pf}</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Employee ESI</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.employee_pf}</div>
                                                            <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-5"></div>
                                                        </div>
                                                        : <>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6]">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Present</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.present}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Half Day(0 * 0.5)</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.half_day}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-5"></div>
                                                            </div>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins font-normal">Worked On</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right font-normal">{row.original.worked_on}</div>
                                                            </div>
                                                        </>
                                                    }
                                                </>
                                            </td>
                                            <td
                                                className="text-center font-poppins text-[#1C1243]"
                                            >
                                                <>
                                                    {!verify &&
                                                        <>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-[#FFD6D6]">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Unpaid Leave</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.unpaid_leave}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins">Absent</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right">{row.original.absent}</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins p-5"></div>
                                                            </div>
                                                            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins font-normal">Total Working</div>
                                                                <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 m-2 font-poppins text-right font-normal">{row.original.total_working}</div>
                                                            </div>
                                                        </>
                                                    }
                                                </>
                                            </td>
                                        </tr>
                                    }
                                </>
                                )
                            })
                        ) : (
                            <tr className="hover">
                                <td colSpan={10000} className="text-center font-poppins">
                                    Data not found!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {loading ? (
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-5 rounded-md z-20 flex items-center justify-center">
                        <div className="absolute p-3 bg-white w-36 shadow-md rounded-md text-center">
                            <div className="flex animate-pulse">
                                <span>Loading...</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                <div className="col-span-1 m-1 mt-4 text-right font-poppins">
                    <select
                        value={pageSize}
                        className="border select-sm w-30 max-w-xs focus:outline-0 rounded-lg font-poppins text-[#A29EB6]"
                        onChange={(e) => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}/page
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-3 m-1 mt-4 font-poppins">
                    <span>
                        Showing &nbsp;
                        <strong>{pageIndex + 1} </strong>
                        <span>to</span>
                        <strong> {showPage}</strong>&nbsp;
                        <span>of</span>&nbsp;
                        <strong>{totalRow}</strong>&nbsp;
                        <span>entries</span>
                    </span>
                </div>
                <div className="col-span-8 text-right mt-1 mr-1">
                    <button
                        className="focus:outline-none p-1 text-sm border border-gray-400 font-poppins bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </button>
                    {pageArr.map(ele =>
                        <button
                            className={ele === currentPage ? "font-poppins p-1 text-sm bg-purple-700 text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins" :
                                "font-poppins p-1 text-sm bg-gray-200 border border-gray-400 hover:bg-gray-400 focus:ring-4 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins"}
                            onClick={() => gotoPage(ele - 1)}
                        >
                            {ele}
                        </button>
                    )}
                    <button
                        className="focus:outline-none p-1 text-sm border border-gray-400 font-poppins bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        Next
                    </button>
                </div>
            </div >
        </>
    )
}

export default DocumentTable;