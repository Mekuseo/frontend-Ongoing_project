import { useEffect, useState } from "react";
import { CalendarIcon } from "./AdminNavbarIcons";

const AdminNavbarDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Function to format the date as 25th October, 2023
    const formatDate = (date: Date) => {
      const day = date.getDate();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();

      // Function to add ordinal suffix to the day
      const getOrdinalSuffix = (number: number) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = number % 100;
        return v + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
      };

      const formattedDate = `${getOrdinalSuffix(day)} ${month}, ${year}`;
      return formattedDate;
    };

    // Get the current date and format it
    const today = new Date();
    const formattedDate = formatDate(today);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="admin-currentDate-container">
      {currentDate && <p className="admin-currentDate"><CalendarIcon /> {currentDate}</p>}
    </div>
  );
};

export default AdminNavbarDate;
