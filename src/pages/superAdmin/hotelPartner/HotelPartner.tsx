import AdminNavbar from "../../../component/superAdmin/adminNavbar/AdminNavbar";
import HotelPartnerDesc from "../../../component/superAdmin/hotelPartner/HotelPartnerDesc";
import HotelPartnerTableMenu from "../../../component/superAdmin/hotelPartner/HotelPartnerTableMenu";
import AdminSidebar from "../../../component/superAdmin/sidebar/AdminSidebar";
import "./HotelPartner.css";

const handleScroll = (direction: "left" | "right") => {
  const table = document.getElementById("hotelPartnerTable");
  if (table) {
    const scrollAmount = direction === "left" ? -30 : 30;
    table.scrollLeft += scrollAmount;
  }
};

const HotelPartner = () => {
  return (
    <div className="admin-body">
      <AdminSidebar />
      <div style={{margin:"0 20px"}}>
        <AdminNavbar />
        <span className="hotelPartner-title">Hotel Partner</span>
        <HotelPartnerTableMenu handleScroll={handleScroll}/>
        <HotelPartnerDesc />
      </div>
    </div>
  );
};

export default HotelPartner;
