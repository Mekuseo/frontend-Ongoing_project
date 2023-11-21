import GraphAnalysis from "./GraphAnalysis";
import "./ReservationsAnalysis.css";

const ReservationsAnalysis = () => {
  return (
    <div className="reservationAnalysis-container">
      <span>Reservations Analysis</span>
      <div className="analysisGraphs-container">
        <GraphAnalysis title="Graph of bookings by month"/>
        <GraphAnalysis title="Graph of check-in this month"/>
        <GraphAnalysis title="Graph of check-out this month"/>
      </div>
    </div>
  );
};

export default ReservationsAnalysis;
