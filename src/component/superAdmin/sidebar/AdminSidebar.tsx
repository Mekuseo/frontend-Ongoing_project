import { useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminIcons, {
  BookingIcons,
  CustomerIcons,
  HotelListingIcons,
  InventoryIcons,
  LogoutIcons,
  NotificationIcons,
  ReportingIcons,
  SalesIcons,
  SecurityIcons,
  HotelPartnerIcons,
} from "../../ThingsToDo/SuperAdminIcons";

import "./AdminSidebar.css";
import adminAvatar from "../../../assets/pics/admin-avatar.svg";

const menuItems = [
  { path: "/super-admin/dashboard-overview", icon: <SuperAdminIcons />, label: "Dashboard Overview" },
  { path: "/super-admin/book-keeping", icon: <BookingIcons />, label: "Booking Management" },
  { path: "/super-admin/sales-revenue", icon: <CustomerIcons />, label: "Customer Relationship" },
  { path: "/super-admin/reporting-analytics", icon: <SalesIcons />, label: "Sales Revenue Tracking" },
  { path: "/super-admin/dashboard-overview", icon: <ReportingIcons />, label: "Reporting and Analytics" },
  { path: "/super-admin/dashboard-overview", icon: <SecurityIcons />, label: "Security" },
  { path: "/super-admin/dashboard-overview", icon: <NotificationIcons />, label: "Notifications and Alert" },
  { path: "/super-admin/dashboard-overview", icon: <HotelListingIcons />, label: "Hotel Listing - for verification" },
  { path: "/super-admin/dashboard-overview", icon: <InventoryIcons />, label: "Inventory" },
  { path: "/super-admin/hotel-partner", icon: <HotelPartnerIcons />, label: "Hotel Partner" },
];

const AdminSidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleSideBarMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };

  return (
    <div className="admin-sidebar-container">
      <div className="admin-avatar">
        <img src={adminAvatar} alt="user-image" />
        <span>gbenga@gmail.com</span>
        <span>Username: gbenga234</span>
      </div>

      <div className="admin-menuList">
        <ul>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`adminMenuList ${activeMenu === item.label ? "menuBgActive" : ""}`}
              onClick={() => handleSideBarMenuClick(item.label)}
            >
              <div>
                {item.icon}
                <li>{item.label}</li>
              </div>
            </Link>
          ))}
        </ul>
      </div>

      <span className="admin-logout">
        <LogoutIcons /> Logout
      </span>
    </div>
  );
};

export default AdminSidebar;