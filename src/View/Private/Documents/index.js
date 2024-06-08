import React, { useState, useCallback, useMemo } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { ErrorBoundary } from "../../../Component/Shared/error_boundaries";
import DocumentTable from "../../../Component/Shared/DocumentTable";
import Neelam from "../../../img/neelam.png";
import Mahima from "../../../img/mahima.png";
import Sourav from "../../../img/sourav.png";
import Vaishali from "../../../img/vaishali.png";

const Documents = () => {

    const [data, setData] = useState([])
    const [showData, setShowData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [showPage, setShowPage] = useState(10)
    const [totalRow, setTotalRow] = useState(0)
    const [page, setPage] = useState(1);
    const [valueSearch, setValueSearch] = useState('');
    const [doc, setDoc] = useState("");

    const fetchData = useCallback(
        async (pageSize, pageIndex, search, order) => {
            setLoading(true)
            const data = [
                { id: 100, img: Sourav, name: "Aakash Sangal", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter" },
                { id: 101, img: Neelam, name: "Neelam Dhami", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 102, img: Mahima, name: "Mahima", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 103, img: Vaishali, name: "Vaishali Kevat", documents: "Aadhar Card, PAN, Qualification" },
                { id: 104, img: Sourav, name: "Sourav Chauhan", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 105, img: Neelam, name: "Neelam Dhami", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 106, img: Mahima, name: "Mahima", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 107, img: Vaishali, name: "Vaishali Kevat", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 108, img: Sourav, name: "Sourav Chauhan", documents: "Aadhar Card, PAN, Qualification" },
                { id: 109, img: Neelam, name: "Neelam Dhami", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 110, img: Sourav, name: "Sourav Chauhan", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 111, img: Neelam, name: "Neelam Dhami", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 112, img: Mahima, name: "Mahima", documents: "Aadhar Card, PAN, Qualification" },
                { id: 113, img: Vaishali, name: "Vaishali Kevat", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 114, img: Sourav, name: "Sourav Chauhan", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 115, img: Neelam, name: "Neelam Dhami", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 116, img: Mahima, name: "Mahima", documents: "Aadhar Card, PAN, Qualification" },
                { id: 117, img: Vaishali, name: "Vaishali Kevat", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 118, img: Sourav, name: "Sourav Chauhan", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 119, img: Neelam, name: "Neelam Dhami", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
                { id: 120, img: Sourav, name: "Sourav Chauhan", documents: "Aadhar Card, PAN, Qualification, Last Company Offer letter, Old Experience letter, Own Offer letter" },
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
                Header: "Documents",
                accessor: "documents",
            },
            {
                Header: "",
                accessor: "id",
                Cell: ({ row }) => {
                    return (
                        <div className="text-center text-sm font-poppins text-[#643FDB] cursor-pointer">
                            View Documents
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
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                <div className="text-3xl m-1 lg:col-span-6 md:col-span-6  sm:col-span-12 p-1 font-poppins text-[#1C1243] font-bold">
                    Documents
                </div>
                <div className="text-right lg:col-span-6 md:col-span-6 sm:col-span-12">
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
            <div className="bg-white m-1 col-span-12">
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
    )
}

export default Documents;
