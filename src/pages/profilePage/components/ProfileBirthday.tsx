import { Divider } from "antd";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";

const ProfileBirthday = () => {
  const [selectedDate, setSelectedDate ] = useState(null);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "raleway, sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              margin: "33px 0 0",
            }}
          >
            Date of birth
          </p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={selectedDate} onChange={setSelectedDate}/>
          </LocalizationProvider>
        </div>

        <div
          style={{
            color: "red",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Edit
        </div>
      </div>
      <Divider style={{ margin: "2px 0" }} />
    </div>
  );
};

export default ProfileBirthday;
