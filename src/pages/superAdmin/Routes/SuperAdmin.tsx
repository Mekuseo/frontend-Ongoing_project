import { Route, Routes } from "react-router-dom";
// import Navbar from "../../../component/HomePage/header/header";
import AdminLogin from "../../../component/superAdmin/adminLogin/AdminLogin";
import "./SuperAdmin.css";
import DashboardOverview from "../dashboardOverview/DashboardOverview";
import BookKeepingManagement from "../bookKeepingManagement/BookKeepingManagement";
import SalesRevenue from "../salesRevenue/SalesRevenue";
import ReportingAnalytics from "../ReportingAnalytics/ReportingAnalytics";
import HotelPartner from "../hotelPartner/HotelPartner";

const SuperAdmin = () => {
  return (
    <div className="admin-wrapper">
      <Routes>
        <Route path="/" >
          <Route index element={<AdminLogin />} />
          <Route path="dashboard-overview" element={<DashboardOverview />} />
          <Route path="book-keeping" element={<BookKeepingManagement />} />
          <Route path="sales-revenue" element={<SalesRevenue />} />
          <Route path="reporting-analytics" element={<ReportingAnalytics />} />
          <Route path="hotel-partner" element={<HotelPartner />} />
          
          {/* <Route path="users">
            <Route index element={<Tables />}/>
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="tables">
            <Route index element={<Tables />} />
            <Route path=":tablesId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
};

export default SuperAdmin;
