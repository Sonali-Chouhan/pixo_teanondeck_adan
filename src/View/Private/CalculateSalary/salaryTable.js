import React, { useState, useCallback, useMemo } from "react";
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import TableSalary from "../../../Component/Shared/TableSalary";

const SalaryTable = (props) => {

    const [data, setData] = useState(props.data)
    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
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

    const checkboxHandler = (row) => {
        const index = data.findIndex(ele => ele.id === row.id);
        let obj = data[index];
        obj['checked'] = !obj['checked'];
        let newData = [...data];
        newData.splice(index, 0, obj);
        newData.splice(index + 1, 1);
        props.getTable(newData)
    }

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: ({ row }) => (
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                        <span className="lg:col-span-2 md:col-span-2 sm:col-span-2"><div class="flex items-center mb-2 ml-2 mt-2">
                            <input id="default-checkbox" type="checkbox" checked={row.original.checked} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={()=>checkboxHandler(row.original)} />
                        </div></span>
                        <img src={row.original.img} className="object-cover rounded-full  lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                        <span className="lg:col-span-8 md:col-span-8 sm:col-span-8 text-left">{row.original.name}</span>
                    </div>
                ),
            },
            {
                Header: "Employee ID",
                accessor: "id",
            },
            {
                Header: "Designation",
                accessor: "designation",
            },
            {
                Header: "Joining Date",
                accessor: "joiningDate",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
        ],
        []
    )
    return (
        <ErrorBoundary>
            <TableSalary
                columns={columns}
                data={showData}
                fetchData={fetchData}
                loading={loading}
                pageCount={pageCount}
                totalRow={totalRow}
                showPage={showPage}
                currentPage={page}
                verifySalaryhandler={props.verifySalaryhandler}
                isVerify={props.verify}
            />
        </ErrorBoundary>
    )
}

export default SalaryTable;