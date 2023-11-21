import AdminNavbar from "../../../component/superAdmin/adminNavbar/AdminNavbar";
import AdminWidgets from "../../../component/superAdmin/adminWidgets/AdminWidgets";
import ReservationsAnalysis from "../../../component/superAdmin/reservationsAnalysis/ReservationsAnalysis";
import AdminSidebar from "../../../component/superAdmin/sidebar/AdminSidebar";
import "./DashboardOverview.css";

const AdminHome = () => {
  return (
    <div className="admin-body">
      <AdminSidebar />
      <div>
        <AdminNavbar />
        <AdminWidgets />
        <ReservationsAnalysis />
      </div>
    </div>
  )
}

export default AdminHome