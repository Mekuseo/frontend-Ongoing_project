import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addBox: {
    color: "red",
    fontWeight: 600,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    backgroundColor: "#F5F5F5", // Default background color
    border: "1px solid #F5F5F5", // Default border
  },
  nonEditable: {
    backgroundColor: "transparent",
    border: "none",
    pointerEvents: "none",
  },
  hidden: {
    display: "none",
  },
});

interface BirthDaySectionProps {
  selectedDate: any;
  setSelectedDate: any;
  setDateOfBirthError: any;
  dateOfBirthError: any;
  showEditButton: boolean;
  handleEditClick: () => void;
  hideDiv: boolean;
  formattedDate: string;
  setFormattedDate: React.Dispatch<React.SetStateAction<string>>;
}

const BirthDaySection = ({
  selectedDate,
  setSelectedDate,
  setDateOfBirthError,
  dateOfBirthError,
  showEditButton,
  handleEditClick,
  hideDiv,
  formattedDate,
  setFormattedDate,
}: BirthDaySectionProps) => {
  const classes = useStyles();

  useEffect(() => {
    setFormattedDate(selectedDate ? selectedDate.format("YYYY-MM-DD") : "");
  }, [selectedDate, setFormattedDate]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "raleway, sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "0",
              marginTop: "20px",
            }}
          >
            Date of birth
          </p>
          <div className={!hideDiv ? "" : classes.hidden}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={setSelectedDate}
                onError={(error) => {
                  setDateOfBirthError(error ? "Date of Birth is required" : "");
                }}
              />
            </LocalizationProvider>
          </div>
          <div style={{ display: hideDiv ? "" : "none", fontFamily:"raleway, sans-serif", fontSize:"14px"  }}>{formattedDate}</div>
          <div style={{ color: "red", fontSize: "10px" }}>
            {dateOfBirthError}
          </div>
        </div>
        <Box
          className={classes.addBox}
          style={{ display: showEditButton ? "block" : "none" }}
          onClick={handleEditClick}
        >
          Edit
        </Box>{" "}
      </div>
      <Divider style={{ margin: "10px 0" }} />
    </div>
  );
};

export default BirthDaySection;
