import React, { useState } from "react";
import Banner from "../../img/banner.png";
import Logo from "../../img/logo.png";
import PasswordEmail from "./passwordEmail";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [passEmail, setPassEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassEmail(!passEmail);
    }

    const loginHandler = () => {
        window.location.replace(window.location.origin + '/admin/login');
    }
    const homePageHandle = () => {
        window.location.replace(window.location.origin + '/admin/login');
    }

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div>
                <img src={Logo} className="object-cover h-10 w-17 mt-4 ml-8" onClick={() => homePageHandle()} />
                {passEmail && email !== "" ? <PasswordEmail email={email} /> :
                    <form onSubmit={(e) => handleSubmit(e)} className="mt-20 ml-20">
                        <h1 className="text-3xl font-poppins text-[#1C1243]">Forgot Password ?</h1>

                        <h1 className=" mt-5 text-base font-poppins text-[#A29EB6]">No worries,we'll send you reset instruction</h1>
                        <h1 className=" mt-3 text-base font-poppins text-[#A29EB6]" >You can <span className="ms-2 text-sm text-blue-600 cursor-pointer" onClick={() => loginHandler()}>Login here !</span></h1>

                        <div className="relative mt-5">
                            <label class="block tracking-wide text-gray-400 text-sm mb-1 font-poppins text-[#A29EB6]" for="grid-email">
                                Email
                            </label>
                            <input type="email"
                                className="pl-10 pr-4 py-2 w-5/6  border-gray-400 border-b focus:border-blue-500"
                                name="email"
                                id="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Enter your email address"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3  flex items-baseline pt-9 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M1.49414 2.67627H15.5059C16.3297 2.67627 17 3.34654 17 4.17041V12.8292C17 13.6531 16.3297 14.3233 15.5059 14.3233H1.49414C0.670271 14.3233 0 13.6531 0 12.8292V4.17041C0 3.34654 0.670271 2.67627 1.49414 2.67627ZM1.68914 3.67236L1.88856 3.83841L7.90719 8.85013C8.25071 9.13614 8.74936 9.13614 9.09281 8.85013L15.1114 3.83841L15.3109 3.67236H1.68914ZM16.0039 4.39148L11.1001 8.4749L16.0039 11.7385V4.39148ZM1.49414 13.3272H15.5059C15.7465 13.3272 15.9478 13.1556 15.9939 12.9284L10.3014 9.13992L9.73018 9.61559C9.37377 9.91236 8.93685 10.0607 8.49997 10.0607C8.06308 10.0607 7.62619 9.91236 7.26976 9.61559L6.69853 9.13992L1.00605 12.9284C1.05221 13.1557 1.25348 13.3272 1.49414 13.3272ZM0.996094 11.7385L5.89993 8.47493L0.996094 4.39148V11.7385Z" fill="#1C1243" />
                                </svg>
                            </div>
                        </div>

                        <button type="submit" className="focus:outline-none text-white bg-purple-700 font-poppins hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-3 w-5/6" >Reset Password</button>

                    </form>
                }
            </div>
            <img src={Banner} className="h-screen w-screen p-5 rounded-lg mr-5" />
        </div>
    )
}
export default ForgotPassword;