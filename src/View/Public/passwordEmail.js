import React from "react";

const PasswordEmail = (props) => {

    const handleSubmit = () => {
        window.location.replace(window.location.origin+'/admin/login');
    }

    return (
                <div className="mt-20 ml-20">
                    <h1 className="text-3xl font-poppins text-[#1C1243]">Request to reset your password</h1>

                    <h1 className=" mt-5 text-xl text-base font-poppins text-[#A29EB6]">We have sent your request to admin for reset password </h1>
                    <h1 className=" mt-3 text-xl text-base font-poppins text-[#1C1243]" >{props.email}</h1>

                    <button className="focus:outline-none text-white font-poppins bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-10 w-5/6"
                    onClick={() => handleSubmit()}>Back to Login</button>
                </div>
    )
}

export default PasswordEmail;