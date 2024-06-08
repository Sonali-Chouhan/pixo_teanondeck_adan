import React, { useState, useCallback, useMemo } from "react";
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import TableEmployee from "../../../Component/Shared/TableEmployee";
import Neelam from "../../../img/neelam.png";
import Mahima from "../../../img/mahima.png";
import Sourav from "../../../img/sourav.png";
import Vaishali from "../../../img/vaishali.png";

const EmployeeTable = (props) => {

    const [data, setData] = useState([
        { id: 100, img: Sourav, name: "Aakash Sangal", designation: "ROR Developer", phone: "9563452521" },
        { id: 101, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", phone: "9054338321" },
        { id: 102, img: Mahima, name: "Mahima", designation: "HR", phone: "7054338321" },
        { id: 103, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", phone: "6054338321" },
        { id: 104, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", phone: "8854338321" },
        { id: 105, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", phone: "9054338321" },
        { id: 106, img: Mahima, name: "Mahima", designation: "HR", phone: "7054338321" },
        { id: 107, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", phone: "6054338321" },
        { id: 108, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", phone: "8854338321" },
        { id: 109, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", phone: "9054338321" },
        { id: 110, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", phone: "8854338321" },
        { id: 111, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", phone: "9054338321" },
        { id: 112, img: Mahima, name: "Mahima", designation: "HR", phone: "7054338321" },
        { id: 113, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", phone: "6054338321" },
        { id: 114, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", phone: "8854338321" },
        { id: 115, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", phone: "9054338321" },
        { id: 116, img: Mahima, name: "Mahima", designation: "HR", phone: "7054338321" },
        { id: 117, img: Vaishali, name: "Vaishali Kevat", designation: "Node Developer", phone: "6054338321" },
        { id: 118, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", phone: "8854338321" },
        { id: 119, img: Neelam, name: "Neelam Dhami", designation: "ROR Developer", phone: "9054338321" },
        { id: 120, img: Sourav, name: "Sourav Chauhan", designation: "React Developer", phone: "8854338321" },
    ])
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

const editHandler=(val)=>{
    props.setUpdateId(val)
}
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
                Header: "Phone",
                accessor: "phone",
            },
            {
                Header: "Action",
                accessor: "id",
                Cell: ({ row }) => {
                    return (
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <div className="text-right"><button className="p-2 m-1 text-xs text-indigo-700 transition-colors border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100" onClick={()=>props.setAttandanceRowData(row.original)}>
                                <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;Attandance
                            </button></div>
                            <div className="text-left"><button className="p-2 m-1 text-xs text-indigo-700 transition-colors border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100" onClick={()=>editHandler(row.original)}>
                                <i className="fa fa-pencil-square" aria-hidden="true"></i>&nbsp;Edit
                            </button></div>
                        </div>
                    )
                },
                disableSortBy: true,
            },
        ],
        []
    )
    return (
        <ErrorBoundary>
            <TableEmployee
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
    )
}

export default EmployeeTable;