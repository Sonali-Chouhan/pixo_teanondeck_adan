import React, { useState } from "react";
import Banner from "../../img/banner.png";
import Logo from "../../img/logo.png";
import { notificationService } from "../../Services/Notification/index";

const Login = () => {

  const [isShow, setIsShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    notificationService.sendMessage({ type: "success", title: "Login ", text: "Login Successfully" });
    window.location.replace(window.location.origin + '/admin/dashboard');
  }

  const homePageHandle = () => {
    window.location.replace(window.location.origin + '/admin/login');
  }

  const forgotHandle = () => {
    window.location.replace(window.location.origin + '/admin/forgetPassword');
  }

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div>
        <img src={Logo} className="object-cover h-10 w-17 mt-4 ml-8" onClick={() => homePageHandle()} />
        <form onSubmit={(e) => handleSubmit(e)} className="mt-20 ml-20">
          <h1 className="text-3xl font-poppins text-[#1C1243]">Sign in</h1>

          <div className="relative mt-5">
            <label class="block tracking-wide text-gray-400 text-sm mb-1 font-poppins text-[#A29EB6]" for="grid-email">
              Email
            </label>
            <input type="email"
              className="pl-10 pr-4 py-2 w-5/6  border-gray-400 border-b focus:border-blue-500"
              name="email"
              id="email"
              placeholder="Enter your email address" />
            <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-baseline pt-9 
                    pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M1.49414 2.67627H15.5059C16.3297 2.67627 17 3.34654 17 4.17041V12.8292C17 13.6531 16.3297 14.3233 15.5059 14.3233H1.49414C0.670271 14.3233 0 13.6531 0 12.8292V4.17041C0 3.34654 0.670271 2.67627 1.49414 2.67627ZM1.68914 3.67236L1.88856 3.83841L7.90719 8.85013C8.25071 9.13614 8.74936 9.13614 9.09281 8.85013L15.1114 3.83841L15.3109 3.67236H1.68914ZM16.0039 4.39148L11.1001 8.4749L16.0039 11.7385V4.39148ZM1.49414 13.3272H15.5059C15.7465 13.3272 15.9478 13.1556 15.9939 12.9284L10.3014 9.13992L9.73018 9.61559C9.37377 9.91236 8.93685 10.0607 8.49997 10.0607C8.06308 10.0607 7.62619 9.91236 7.26976 9.61559L6.69853 9.13992L1.00605 12.9284C1.05221 13.1557 1.25348 13.3272 1.49414 13.3272ZM0.996094 11.7385L5.89993 8.47493L0.996094 4.39148V11.7385Z" fill="#1C1243" />
              </svg>
            </div>
          </div>

          <div className="relative mt-3">
            <label class="block tracking-wide text-gray-400 text-sm mb-1 font-poppins text-[#A29EB6]" for="grid-password">
              Password
            </label>
            <input type={isShow ? "text" : "password"}
              className="pl-10 pr-4 py-2 border-gray-400 border-b w-5/6 focus:border-blue-500"
              name="password"
              id="password"
              placeholder="Enter your Password" />
            <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-baseline pt-9 
                    pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M13.0033 7.2296V4.53742C13.0105 3.31927 12.524 2.14798 11.6554 1.29383C10.8157 0.457706 9.7165 0 8.55242 0C8.5344 0 8.51277 0 8.49475 0C6.01161 0.00360399 3.99338 2.03625 3.99338 4.53742V7.2296C3.05634 7.34132 2.37158 8.12699 2.37158 9.07844V15.1259C2.37158 16.1531 3.19329 17 4.22043 17H12.7799C13.807 17 14.6287 16.1531 14.6287 15.1259V9.07844C14.6251 8.13059 13.9404 7.34132 13.0033 7.2296ZM4.71057 4.53742H4.71417C4.71417 2.43269 6.41165 0.709985 8.49836 0.709985H8.50196C9.49306 0.706381 10.4445 1.09922 11.1473 1.79839C11.8789 2.52279 12.2861 3.51028 12.2789 4.53742V7.2332H11.4861V4.53742C11.4933 3.71931 11.1689 2.93364 10.5887 2.35701C10.0409 1.8092 9.29844 1.49926 8.52359 1.49926H8.50196C6.84413 1.49926 5.50345 2.86156 5.50345 4.53381V7.2332H4.71057V4.53742ZM10.7689 4.53742V7.2332H6.22785V4.53742C6.22785 3.26161 7.24417 2.22366 8.50557 2.22366H8.52719C9.11104 2.22366 9.67326 2.45792 10.0877 2.87238C10.5274 3.31206 10.7761 3.91393 10.7689 4.53742ZM13.9404 15.1367C13.9404 15.7674 13.4286 16.2792 12.7979 16.2792H4.23484C3.60414 16.2792 3.09238 15.7674 3.09238 15.1367V9.09646C3.09238 8.46576 3.60414 7.954 4.23484 7.954H12.7979C13.4286 7.954 13.9404 8.46576 13.9404 9.09646V15.1367Z" fill="#1C1243" />
                <path d="M9.74528 11.8933C9.58671 11.3347 9.07855 10.9526 8.49831 10.9526C7.78111 10.9526 7.19727 11.5329 7.19727 12.2537C7.19727 12.8339 7.57929 13.3421 8.13791 13.5007V14.5098C8.13791 14.708 8.30009 14.8702 8.49831 14.8702C8.69652 14.8702 8.8587 14.708 8.8587 14.5098V13.5007C9.54707 13.3024 9.94711 12.5816 9.74528 11.8933ZM8.49831 12.8303C8.17755 12.8303 7.91806 12.5708 7.91806 12.2501C7.91806 11.9293 8.17755 11.6698 8.49831 11.6698C8.81906 11.6698 9.07855 11.9293 9.07855 12.2501C9.07855 12.5708 8.81906 12.8303 8.49831 12.8303Z" fill="#1C1243" />
              </svg>
            </div>
            {isShow ?
              <div className="absolute inset-y-0 right-20 pr-7  
                    flex items-center mt-5 
                    cursor-pointer">
                <i className="fa fa-eye text-gray-400" onClick={() => setIsShow(false)}></i>
              </div>
              :
              <div className="absolute inset-y-0 right-20 pr-7  
                    flex items-center mt-5 
                    cursor-pointer">
                <i className="fa fa-eye-slash text-gray-400" onClick={() => setIsShow(true)}></i>
              </div>
            }
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mt-5">
            <div className="flex items-center mb-4 ">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox" value=""
                className="w-4 h-4 text-blue-600 border-gray-400 border-b rounded" />
              <label htmlFor="checkbox" className="ms-2 ml-3 text-sm  font-poppins text-[#1C1243]">Reminder me</label>
            </div>
            <div className=" ms-2 text-sm font-poppins  text-center mr-5 cursor-pointer text-[#1C1243]">
              <span onClick={() => forgotHandle()}>Forgot Password?</span>
            </div>
          </div>
          
          <button type="submit" className="focus:outline-none text-white font-poppins bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 font-poppins dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-5 w-5/6">Login</button>

        </form>
      </div>

      {/* <div className="bg-[#1C1243] rounded-lg mr-5 mt-3">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div></div>
          <div className="text-white p-4 mt-5 mr-3 text-right">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>+91 9041709902</span>
          </div>
        </div>
        <img src={Solve} className="ml-12 h-80 w-100 " />
        <div className="font-poppins text-white text-4xl mt-5 ml-12">Sign in to Team on Deck</div>
        <div className="font-poppins text-white text-2xl ml-12">Always happy to assist you.</div>
      </div> */}
      <img src={Banner} className="h-screen w-screen p-5 rounded-lg mr-5" />
    </div>
  )
}
export default Login;