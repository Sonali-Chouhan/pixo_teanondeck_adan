import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import DocumentTable from "../../../Component/Shared/DocumentTable";
import UpdateAttandance from "./editAttandance";

const VerifyAttancdance = (props) => {

    const [data, setData] = useState(props.data)
    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);
    const [valueSearch, setValueSearch] = useState('');
    const [updateAttandance, setUpdateAttandance] = useState(null);

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

    const setCollHandler = (row) => {
        const index = data.findIndex(ele => ele.id === row.id);
        let obj = data[index];
        obj['coll'] = !obj['coll'];
        let newData = [...data];
        newData.splice(index, 0, obj);
        newData.splice(index + 1, 1);
        setData(newData)
    }

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: ({ row }) => (
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                        <span className="lg:col-span-2 md:col-span-2 sm:col-span-2" onClick={() => setCollHandler(row.original)}>
                            {row.original.coll ?
                                <i className="fa fa-chevron-up text-[#A29EB6] ml-2" aria-hidden="true"></i>
                                :
                                <i className="fa fa-chevron-down text-[#A29EB6] ml-2" aria-hidden="true"></i>
                            }
                        </span>
                        <img src={row.original.img} className="object-cover rounded-full  lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                        <span className=" lg:col-span-8 md:col-span-8 sm:col-span-8 text-left">{row.original.name}</span>
                    </div>
                ),
            },
            {
                Header: "Worked On",
                accessor: "workedOn",
            },
            {
                Header: "Absent",
                accessor: "absent",
            },
            {
                Header: "Payable",
                accessor: "payable",
            },
            {
                Header: "",
                accessor: "id",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center"><button className="p-2 m-1 text-xs text-indigo-700 transition-colors border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                            onClick={() => setUpdateAttandance(row.original)}>
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>&nbsp;Edit
                        </button>
                        </div>
                    )
                },
                disableSortBy: true,
            },
        ],
        []
    )
    const columnsVerify = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: ({ row }) => (
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                        <span className="lg:col-span-2 md:col-span-2 sm:col-span-2" onClick={() => setCollHandler(row.original)}>
                            {row.original.coll ?
                                <i className="fa fa-chevron-up text-[#A29EB6] ml-2" aria-hidden="true"></i>
                                :
                                <i className="fa fa-chevron-down text-[#A29EB6] ml-2" aria-hidden="true"></i>
                            }
                        </span>
                        <img src={row.original.img} className="object-cover rounded-full  lg:col-span-2 md:col-span-2 sm:col-span-2 text-right" />
                        <span className=" lg:col-span-8 md:col-span-8 sm:col-span-8 text-left">{row.original.name}</span>
                    </div>
                ),
            },
            {
                Header: "Emp ID",
                accessor: "id",
            },
            {
                Header: "CTC/Month",
                accessor: "ctc_month",
            },
            {
                Header: "Payable Amount",
                accessor: "payableAmount",
            },
            {
                Header: "Paid",
                accessor: "paid",
            },
            {
                Header: "Remaining",
                accessor: "remaining",
            },
            {
                Header: "",
                accessor: "ids",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center"><button className="p-2 m-1 text-xs text-indigo-700 transition-colors border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                            onClick={() => setUpdateAttandance(row.original)}>
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>&nbsp;Edit
                        </button>
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

    return (
        <div>
            {updateAttandance &&
                <UpdateAttandance updateAttandance={updateAttandance} isOpen={true} setOpenModal={() => setUpdateAttandance(null)} />
            }
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-white">
                <div className="text-lg ml-2 mt-2 lg:col-span-6 md:col-span-6  sm:col-span-12 p-1 font-poppins text-[#1C1243] font-semibold">
                    Total days in May <span className="ml-3 border bg-[#ECEEF6] select-sm p-2 mt-2 max-w-xs focus:outline-0 rounded-lg font-poppins">31</span>
                </div>
                <div className="text-right lg:col-span-6 md:col-span-6 sm:col-span-12">
                    <div class="relative mt-2 mr-2 mb-2">
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
                <div className="bg-white lg:col-span-12 md:col-span-12  sm:col-span-12">
                    <ErrorBoundary>
                        <DocumentTable
                            columns={props.verify ? columnsVerify : columns}
                            data={showData}
                            fetchData={fetchData}
                            loading={loading}
                            pageCount={pageCount}
                            totalRow={totalRow}
                            showPage={showPage}
                            currentPage={page}
                            collapse={true}
                            verify={props.verify}
                        />
                    </ErrorBoundary>
                </div>
                <div className="lg:col-span-6 md:col-span-6 p-1 m-2 sm:col-span-12 bg-white">
                    <button className="font-poppins m-4 p-2 bg-gray-400 rounded-full border border-gray-400 focus:ring-4"
                        onClick={props.setIsVerify}>
                        Cancel
                    </button>
                </div>
                <div className="lg:col-span-6 md:col-span-6 p-1 m-2 sm:col-span-12 text-right bg-white">
                    <button className="rounded-full m-4 p-2 border bg-[#643FDB] text-white focus:ring-4 font-poppins" onClick={() => { props.setVerify(true) }}>
                        Verify Salary
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyAttancdance;
