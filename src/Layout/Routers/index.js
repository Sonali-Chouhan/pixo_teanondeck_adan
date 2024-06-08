import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../../View/Public/login";
import ForgetPassword from "../../View/Public/forgotPassword";
import Navbar from "../Navbar";
const Routers = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgetPassword" element={<ForgetPassword />} />
        <Route path="/admin/dashboard" element={<Navbar />} />
        <Route path="/admin/employee" element={<Navbar />} />
        <Route path="/admin/attendance" element={<Navbar />} />
        <Route path="/admin/report" element={<Navbar />} />
        <Route path="/admin/calculateSalary" element={<Navbar />} />
        <Route path="/admin/documents" element={<Navbar />} />
        <Route path="/admin/setting" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default Routers;