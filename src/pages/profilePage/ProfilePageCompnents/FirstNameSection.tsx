import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "15px",
    fontfamily:"raleway, sans-serif",
    fontSize: "18px",
    fontWeight: 500
  },
  addBox: {
    color: "red",
    fontWeight: 500,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    width:"230px",
    backgroundColor: "#F5F5F5", // Default background color
    border: "1px solid #F5F5F5", // Default border
    borderRadius:"5px",
    "& .MuiInput-underline:before": {
      borderBottom: "none" // Remove the underline
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none" // Remove the underline after interaction
    },
    "& .MuiInput-input": {
      padding: "5px",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily:"raleway, sans-serif"
    }
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

interface FirstNameSectionProps {
  firstName: string;
  handleFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  firstNameError: string;
  editMode: boolean;
  showEditButton: boolean;
  onEditClick: () => void;
  handleEditClick: () => void;
  lastName: string;
  handleLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lastNameError: string;
  hideDiv: boolean;
}

const FirstNameSection = ({
  firstName,
  firstNameError,
  editMode,
  showEditButton,
  handleEditClick,
  handleFirstNameChange,
  handleLastNameChange,
  lastName,
  lastNameError,
  hideDiv,
}: FirstNameSectionProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* First Name input */}
      <Box component="form" sx={{position:"relative"}}>
        <label style={{fontWeight:"500"}}>First Name</label>
        <div className={!hideDiv ? "" : classes.hidden}>
          <TextField
            id="firstname"
            variant="outlined"
            className={`${classes.input} ${
              editMode ? "" : classes.nonEditable
            }`}
            onChange={handleFirstNameChange}
            value={firstName}
            error={!!firstNameError}
            InputProps={{ readOnly: !editMode }}
          />
        </div>
        <div style={{ display: hideDiv ? "" : "none", fontFamily:"raleway, sans-serif", fontSize:"14px"  }}>{firstName}</div>
        <div style={{ color: "red", fontSize: "10px", position:"absolute", top:"90px" }}>{firstNameError}</div>
      </Box>

      {/* Last Name input */}
      <Box component="form" sx={{position:"relative"}}>
        <label style={{fontWeight:"500"}}>Last Name</label>
        <div className={!hideDiv ? "" : classes.hidden}>
          <TextField
            id="lastname"
            variant="outlined"
            className={`${classes.input} ${
              editMode ? "" : classes.nonEditable
            }`}
            onChange={handleLastNameChange}
            value={lastName}
            error={!!lastNameError}
            InputProps={{ readOnly: !editMode,  }}
          />
        </div>
        <div style={{ display: hideDiv ? "" : "none", fontFamily:"raleway, sans-serif", fontSize:"14px" }}>{lastName}</div>
        <div style={{ color: "red", fontSize: "10px", position:"absolute", top:"90px"  }}>{lastNameError}</div>
      </Box>

      {/* Edit button */}
      <Box
        className={classes.addBox}
        style={{ display: showEditButton ? "block" : "none" }}
        onClick={handleEditClick}
      >
        Edit
      </Box>
    </div>
  );
};

export default FirstNameSection;
