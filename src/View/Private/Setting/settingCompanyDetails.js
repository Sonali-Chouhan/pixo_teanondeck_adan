import React from "react";
import Pixoatic from "../../../img/pixoatic.png";
import TextInput from "../../../Component/Shared/TextInput";
import SelectInput from "../../../Component/Shared/SelectInput";

const SettingCompanyDetails = () => {

    return (<>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200">
            <div className="text-2xl m-1 lg:col-span-12 md:col-span-12  sm:col-span-12 p-1 font-poppins font-normal">
                <span className="text-[#A29EB6]">Settings /</span><span className="text-[#1C1243]">Company Detail</span>
            </div>
        </div>
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-gray-200 p-3">
            <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 bg-white shadow text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12">
                    <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-left mt-5 ml-5 text-[#1C1243] font-poppins font-semibold text-lg">Company Detail</div>
                    <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 text-right">
                        <button className="rounded-full m-4 p-2 border bg-[#643FDB] text-white focus:ring-4 font-poppins">
                            Update</button>
                    </div>
                    <div className="lg:col-span-12 md:col-span-12 sm:col-span-12 shadow p-50 bg-[#ECEEF6] text-center">
                        <hr /></div>
                    <div className="lg:col-span-5 md:col-span-5 sm:col-span-5 mt-5 text-center"></div>
                    <div className="lg:col-span-7 md:col-span-7 sm:col-span-7 mt-5"><img src={Pixoatic} className="object-cover rounded-full h-12 border" /></div>
                    <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
                        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-5">
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 text-[#1C1243] font-poppins font-normal text-xs lg:text-right md:text-right m-5 mt-2">Company Name</div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12">
                                <TextInput
                                    showLabel={false}
                                    type="text"
                                    label=""
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    error={false}
                                    errorMessage=""
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12"></div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 text-[#1C1243] font-poppins font-normal text-xs lg:text-right md:text-right m-5 mt-2">Business Type</div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 text-[#A29EB6] mt-1 ml-1">
                            <SelectInput
                            options={["Business Type",]}
                            showLabel={false}
                            label="Business Type"
                            name="business_type"
                            id="business_type"
                            error={false}
                            errorMessage="Business Type is required"
                            onChange={(e) => console.log(e)}
                        />
                            </div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12"></div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 text-[#1C1243] font-poppins font-normal text-xs lg:text-right md:text-right m-5 mt-2">Company Address</div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12">
                                <TextInput
                                    showLabel={false}
                                    type="text"
                                    label=""
                                    name="company_address"
                                    id="company_address"
                                    placeholder="Company Address"
                                    error={false}
                                    errorMessage=""
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12"></div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 text-[#1C1243] font-poppins font-normal text-xs lg:text-right md:text-right m-5 mt-2">GST Number</div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12">
                                <TextInput
                                    showLabel={false}
                                    type="text"
                                    label=""
                                    name="gst_number"
                                    id="gst_number"
                                    placeholder="GST Number"
                                    error={false}
                                    errorMessage=""
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12"></div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 text-[#1C1243] font-poppins font-normal text-xs lg:text-right md:text-right m-5 mt-2">Udyam Registration Number</div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12">
                                <TextInput
                                    showLabel={false}
                                    type="text"
                                    label=""
                                    name="udyam_registration_number"
                                    id="udyam_registration_number"
                                    placeholder="Udyam Registration Number"
                                    error={false}
                                    errorMessage=""
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                            <div className="lg:col-span-4 md:col-span-4 sm:col-span-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default SettingCompanyDetails;