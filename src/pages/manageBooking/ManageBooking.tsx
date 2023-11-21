import Navbar from "../../component/HomePage/header/header";
import "./ManageBooking.css";
import ManageBookingList from "./components/ManageBookingList";
import * as React from 'react';

const ManageBooking = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="manageBooking-body">
      <Navbar />
      <ManageBookingList 
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
      />
    </div>
  )
}

export default ManageBooking