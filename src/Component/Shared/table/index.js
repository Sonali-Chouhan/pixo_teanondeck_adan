import React, { useState } from "react"
import { useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

const TablePagination = ({
    columns,
    data,
    fetchData,
    loading,
    pageCount,
    totalRow,
    showPage,
    currentPage,
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter, sortBy },
        preGlobalFilteredRows,
        setGlobalFilter,
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

    const GlobalFilter = ({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    }) => {
        const count = preGlobalFilteredRows
        const [value, setValue] = React.useState(globalFilter)
        const onChange = useAsyncDebounce((value) => {
            setGlobalFilter(value || undefined)
        }, 700)

        return (
            <div class="relative">
                <input
                    value={value || ""}
                    onChange={(e) => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    type="search"
                    className="pl-10 pr-4 py-2 border border-gray-400 rounded-lg font-poppins text-[#A29EB6]"
                    placeholder="Search" />
                <div class="absolute inset-y-0 left-0 pl-5  
                                     flex items-center  
                                    pointer-events-none">
                    <i class="fa fa-search text-gray-400"></i>
                </div>
            </div>
        )
    }

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
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                <div className="col-span-6 m-4">
                    <GlobalFilter
                        preGlobalFilteredRows={totalRow}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
                <div className="col-span-6 m-4 text-right font-poppins">
                    <span>Show</span>&nbsp;
                    <select
                        value={pageSize}
                        className="border select-sm w-30 max-w-xs focus:outline-0 rounded-lg font-poppins text-[#A29EB6]"
                        onChange={(e) => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>&nbsp;
                    <span>entries</span>
                </div>
            </div>
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
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                <div className="col-span-3 m-4 mt-4 font-poppins">
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
                <div className="col-span-9 text-right mt-1 mr-1">
                    <button
                        className="focus:outline-none p-1 text-sm border border-gray-400 font-poppins bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </button>
                    {pageArr.map(ele =>
                        <button
                            className={ele === currentPage ? "font-poppins p-1 text-sm text-white bg-purple-700 border border-gray-400 hover:bg-gray-400 focus:ring-4 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins" :
                                "font-poppins p-1 text-sm bg-gray-200 border border-gray-400 hover:bg-gray-400 focus:ring-4 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 font-poppins"}
                            onClick={() => gotoPage(ele-1)}
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

export default TablePagination;