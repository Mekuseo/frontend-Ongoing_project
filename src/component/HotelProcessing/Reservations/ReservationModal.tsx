import React from 'react';
import "./searchBar.css"

interface ReservationData {
    name: string;
    reservationNumber: string;
    status: string;
    checkIn: string;
    checkOut: string;
    bookingRate: string;
    roomType: string;
    roomNumber: string;
    bookingDate: string;
}

interface ReservationModalProps {
  data: ReservationData;
  closeModal: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ data, closeModal }) => {
  return (
    <div className="reservationsextranetmodal">
      <div className="reservationsextranetmodal-content">
        <button className="closereservationsmodal" onClick={closeModal}>
          x
        </button>
        <div className="reservationsextranetmodal-body">
          <p>Guest's Name: {data.name}</p>
          <p>Reservation Number: {data.reservationNumber}</p>
          <p>Status: {data.status}</p>
          <p>Check-in date: {data.checkIn}</p>
          <p>Check-out date: {data.checkOut}</p>
          <p>Booking rate: {data.bookingRate}</p>
          <p>Room type(s): {data.roomType}</p>
          <p>Number of rooms: {data.roomNumber}</p>
          <p>Booking date: {data.bookingDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
