import React, { useState } from "react"
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

const AttendanceTable = ({
    columns,
    data,
    fetchData,
    loading,
    pageCount,
    totalRow,
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
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
                                        className="border font-poppins text-[#1C1243] p-3"
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
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                    >
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}
                                                    className="border text-center text-sm font-poppins text-[#1C1243]"
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        })}
                                    </tr>
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
            
    )
}

export default AttendanceTable;