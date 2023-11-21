import "./AdminNavbar.css";
import AdminNavbarDate from "./AdminNavbarDate";
import TimeZone from "./TimeZone";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar-container">
      <TimeZone />
      <AdminNavbarDate />
    </div>
  );
};

export default AdminNavbar;
