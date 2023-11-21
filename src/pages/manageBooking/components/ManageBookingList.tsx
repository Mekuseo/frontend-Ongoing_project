import manageBookingData from "../manageListData.json";
import hotelImage from "../../../assets/pics/managelisting.jpeg";
import CancelReservation from "./CancelReservation";
import { Link } from "react-router-dom";

interface ManageBookingListProps {
  open: boolean;
  handleOpen: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ManageBookingList = ({
  open,
  handleOpen,
  setOpen,
}: ManageBookingListProps) => {
  return (
    <div className="managebooking-header">
      <h1>Manage Booking</h1>
      <div className="managebooking-card-container">
        <div>
          {manageBookingData.map((list, index) => {
            return (
              <div>
                <div className="manageBooking-card" id={index.toString()}>
                  <img src={hotelImage} alt="hotel Image" />
                  <div className="manageBooking-details">
                    <h1>{list.name}</h1>
                    <p>{list.address}</p>
                    <div className="manageBooking-datePrice">
                      <p>{list.date}</p>
                      <p>{list.price} </p>
                    </div>
                    <div className="manageBooking-btn">
                      <Link
                        to="/manage-booking-reviews"
                        style={{ textDecoration: "none" }}
                      >
                        <button>Review Property</button>
                      </Link>
                      <button onClick={handleOpen}>Cancel Reservation</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {open ? (
        <CancelReservation
          open={open}
          handleOpen={handleOpen}
          setOpen={setOpen}
        />
      ) : null}
    </div>
  );
};

export default ManageBookingList;
