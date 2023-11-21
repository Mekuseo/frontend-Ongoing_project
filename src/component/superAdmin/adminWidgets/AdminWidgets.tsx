import "./AdminWidgets.css";
import Widgets from "./Widgets";

const AdminWidgets = () => {
  return (
    <div>
      <span className="widgetsContainer-title">Dashboard overview</span>
      <div className="widgetsContainer">
        <Widgets type="pending bookings today"/>
        <Widgets type="check-in today"/>
        <Widgets type="check-out today"/>
        <Widgets type="total confirmed"/>
        <Widgets type="pending bookings"/>
        <Widgets type="check-in for nightly"/>
        <Widgets type="checkout-for nightly"/>
        <Widgets type="confirmed bookings for nightly"/>
      </div>
    </div>
  )
}

export default AdminWidgets