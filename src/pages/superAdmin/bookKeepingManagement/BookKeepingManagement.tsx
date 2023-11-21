import { useState } from "react";
import AdminNavbar from "../../../component/superAdmin/adminNavbar/AdminNavbar";
import AdminSidebar from "../../../component/superAdmin/sidebar/AdminSidebar";
import BookKeepingManagementTable from "../../../component/superAdmin/tableMenu/BookKeepingManagementTable";
import BookingHistory from "../../../component/superAdmin/tableMenu/BookingHistory";
import TableMenu from "../../../component/superAdmin/tableMenu/TableMenu";
import "./BookKeepingManagement.css";

const BookKeepingManagement = () => {
  const [activeComponent, setActiveComponent] = useState(false);

  const handleComponentDisplay = () => {
    setActiveComponent(true);
  };

  const handleScroll = (direction: "left" | "right") => {
    const table = document.getElementById("bookKeepingTable");
    if (table) {
      const scrollAmount = direction === "left" ? -30 : 30;
      table.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="admin-body">
      <AdminSidebar />
      <div>
        <AdminNavbar />

        <span className="book-keeping-title">Booking Management</span>

        <TableMenu
          handleScroll={handleScroll}
          activeComponent={activeComponent}
          handleComponentDisplay={handleComponentDisplay}
        />

        <div className="bookingManagement-component">
          <BookKeepingManagementTable />

          <div className="bookKeeping-listLegends">
            <div className="listLegends-container">
              <span className="listLegends-box listLegends-white"></span>
              <span className="listLegends-text">Standard hotels</span>
            </div>
            <div className="listLegends-container">
              <span className="listLegends-box listLegends-gray"></span>
              <span className="listLegends-text">Late Night hotels</span>
            </div>
          </div>

          <BookingHistory />
        </div>
      </div>
    </div>
  );
};

export default BookKeepingManagement;
