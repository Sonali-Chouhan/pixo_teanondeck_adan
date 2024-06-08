import React, { useState } from "react";
import TextInput from "../../../Component/Shared/TextInput";
import SelectInput from "../../../Component/Shared/SelectInput";
import DatePicker from "../../../Component/Shared/DatePicker";
import FileInput from "../../../Component/Shared/FileInput";

const AddUpdateEmployee = (props) => {

    const [officialColl, setOfficialColl] = useState(false);
    const [bankColl, setBankColl] = useState(false);
    const [personalColl, setPersonalColl] = useState(false);

    return (
        <>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-white rounded-lg">
                <div className="lg:col-span-10 md:col-span-10 sm:col-span-10 p-2 text-xl font-poppins text-[#1C1243] font-bold">
                    Official Detail
                </div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 p-2 text-right" onClick={() => setOfficialColl(!officialColl)}>
                    {officialColl ?
                        <i className="fa fa-chevron-up text-[#A29EB6] mr-1" aria-hidden="true"></i>
                        :
                        <i className="fa fa-chevron-down text-[#A29EB6] mr-1" aria-hidden="true"></i>
                    }
                </div>
                {!officialColl && <>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Employee ID"
                            name="employee_id"
                            id="employee_id"
                            placeholder="Employee ID"
                            error={false}
                            errorMessage="Employee ID is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <SelectInput
                            options={["Select"]}
                            showLabel={true}
                            label="Role"
                            name="role"
                            id="role"
                            error={false}
                            errorMessage="Role is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <SelectInput
                            options={["Select"]}
                            showLabel={true}
                            label="Employee Type"
                            name="employee_type"
                            id="employee_type"
                            error={false}
                            errorMessage="Employee Type is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <SelectInput
                            options={["Select"]}
                            showLabel={true}
                            label="Job Title"
                            name="job_title"
                            id="job_title"
                            placeholder="Job Title"
                            error={false}
                            errorMessage="Job Title is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            label="Name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            type="text"
                            error={false}
                            errorMessage="Name is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="number"
                            label="Monthly Salary"
                            name="monthly_salary"
                            id="monthly_salary"
                            placeholder="Monthly Salary"
                            error={false}
                            errorMessage=""
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <SelectInput
                            options={["Select"]}
                            showLabel={true}
                            label="Manager"
                            name="manager"
                            id="manager"
                            error={false}
                            errorMessage="Manager is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="email"
                            label="Official Email Address"
                            name="official_email_address"
                            id="official_email_address"
                            placeholder="Official Email Address"
                            error={false}
                            errorMessage="Official Email Address is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            label="Password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            type="password"
                            error={false}
                            errorMessage="Password is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <DatePicker
                            showLabel={true}
                            label="Date of joining"
                            name="doj"
                            id="doj"
                            placeholder="Date of joining"
                            error={false}
                            errorMessage="Date of joining is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            label="PF Status"
                            name="pf_status"
                            id="pf_status"
                            placeholder="PF Status"
                            type="text"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            label="ESIC Status"
                            name="esic_status"
                            id="esic_status"
                            placeholder="ESIC Status"
                            type="text"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                </>
                }
            </div>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 bg-white rounded-lg">
                <div className="lg:col-span-10 md:col-span-10 sm:col-span-10 p-2 text-xl font-poppins text-[#1C1243] font-bold">
                    Bank Detail
                </div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 p-2 text-right" onClick={() => setBankColl(!bankColl)}>
                    {bankColl ?
                        <i className="fa fa-chevron-up text-[#A29EB6] mr-1" aria-hidden="true"></i>
                        :
                        <i className="fa fa-chevron-down text-[#A29EB6] mr-1" aria-hidden="true"></i>
                    }
                </div>
                {!bankColl && <>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Bank Name"
                            name="bank_name"
                            id="bank_name"
                            placeholder="Bank Name"
                            error={false}
                            errorMessage="Bank Name is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Account Number"
                            name="account_number"
                            id="account_number"
                            placeholder="Account Number"
                            error={false}
                            errorMessage="Account Number is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="IFSC Code"
                            name="ifsc_code"
                            id="ifsc_code"
                            placeholder="IFSC Code"
                            error={false}
                            errorMessage="IFSC Code is required"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                </>
                }
            </div>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 mt-2 bg-white rounded-lg">
                <div className="lg:col-span-10 md:col-span-10 sm:col-span-10 p-2 text-xl font-poppins text-[#1C1243] font-bold">
                    Personal Detail
                </div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 p-2 text-right" onClick={() => setPersonalColl(!personalColl)}>
                    {personalColl ?
                        <i className="fa fa-chevron-up text-[#A29EB6] mr-1" aria-hidden="true"></i>
                        :
                        <i className="fa fa-chevron-down text-[#A29EB6] mr-1" aria-hidden="true"></i>
                    }
                </div>
                {!personalColl && <>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <SelectInput
                            options={["Select","Male","Female","Other"]}
                            showLabel={true}
                            label="Gender"
                            name="gender"
                            id="gender"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="number"
                            label="Phone Number"
                            name="phone_number"
                            id="phone_number"
                            placeholder="Phone Number"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="email"
                            label="Personal Email"
                            name="personal_email"
                            id="personal_email"
                            placeholder="Personal Email"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <SelectInput
                            options={["Select","A+","B+","B-","AB+"]}
                            showLabel={true}
                            label="Blood Group"
                            name="blood_group"
                            id="blood_group"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Guardian Name"
                            name="ghuardian_name"
                            id="ghuardian_name"
                            placeholder="Guardian Name"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="number"
                            label="Emergency Contact Phone Number"
                            name="emergency_contact_phone_number"
                            id="emergency_contact_phone_number"
                            placeholder="Emergency Contact Phone Number"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Address 1"
                            name="address1"
                            id="address1"
                            placeholder="Address 1"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Address 2"
                            name="address2"
                            id="address2"
                            placeholder="Address 2"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Address 3"
                            name="address3"
                            id="address3"
                            placeholder="Address 3"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <DatePicker
                            showLabel={true}
                            type="text"
                            label="Date of Birth"
                            name="dob"
                            id="dob"
                            errorMessage="Date of Birth is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="Aadhar No."
                            name="aadhar_no"
                            id="aadhar_no"
                            placeholder="Aadhar No."
                            errorMessage="Aadhar No. is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <TextInput
                            showLabel={true}
                            type="text"
                            label="PAN Number"
                            name="pan_number"
                            id="pan_number"
                            placeholder="PAN Number"
                            errorMessage="PAN is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="Aadhar Card (Front & Back)"
                            name="aadhar_card"
                            id="aadhar_card"
                            isMulti={false}
                            errorMessage="Aadhar Card (Front & Back) is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="PAN"
                            name="pan"
                            id="pan"
                            isMulti={false}
                            errorMessage="PAN is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="Higher Qualification"
                            name="higher_qualification"
                            id="higher_qualification"
                            isMulti={false}
                            errorMessage="Higher Qualification is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="Last Company Offer letter"
                            name="last_company_offer_letter"
                            id="last_company_offer_letter"
                            isMulti={false}
                            errorMessage="Last Company Offer letter is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="Last Company Experience letter"
                            name="last_company_experience_letter"
                            id="last_company_experience_letter"
                            isMulti={false}
                            errorMessage="Last Company Ecperience letter is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="Own Offer Letter"
                            name="own_offer_letter"
                            id="own_offer_letter"
                            isMulti={false}
                            errorMessage="Own Offer Letter is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 m-2 font-poppins">
                        <FileInput
                            showLabel={true}
                            type="file"
                            label="Passport Size Photo"
                            name="passport_size_photo"
                            id="passport_size_photo"
                            isMulti={false}
                            errorMessage="Passport size Photo is required"
                            error={false}
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                </>
                }
            </div>
            <div className="text-center mt-3"><button type="submit" className="focus:outline-none text-white font-poppins bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 p-3 ml-3 dark:bg-purple-600 font-poppins dark:hover:bg-purple-700 dark:focus:ring-purple-900">{props.data ? "Update" : "Save"}</button>
            </div>
        </>
    )
}
export default AddUpdateEmployee;