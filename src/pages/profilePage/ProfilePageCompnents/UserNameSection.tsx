import { Box, Divider } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "15px",
    fontfamily: "raleway, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
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
    width: "230px",
    backgroundColor: "#F5F5F5", // Default background color
    border: "1px solid #F5F5F5", // Default border
    borderRadius: "5px",
    "& .MuiInput-underline:before": {
      borderBottom: "none", // Remove the underline
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none", // Remove the underline after interaction
    },
    "& .MuiInput-input": {
      padding: "5px",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "raleway, sans-serif",
    },
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

interface UserNameSectionProps {
  editMode: boolean;
  handleUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  usernameError: string;
  showEditButton: boolean;
  handleEditClick: () => void;
  hideDiv: boolean;
}

const UserNameSection = ({
  editMode,
  handleUsernameChange,
  username,
  usernameError,
  showEditButton,
  handleEditClick,
  hideDiv,
}: UserNameSectionProps) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Box component="form" sx={{ position: "relative" }}>
          <label style={{ fontWeight: "500" }}>Username</label>
          <div className={!hideDiv ? "" : classes.hidden}>
            <TextField
              id="username"
              variant="outlined"
              className={`${classes.input} ${
                editMode ? "" : classes.nonEditable
              }`}
              onChange={handleUsernameChange}
              value={username}
              error={!!usernameError}
              InputProps={{ readOnly: !editMode }}
            />
          </div>
          <div
            style={{
              display: hideDiv ? "" : "none",
              fontFamily: "raleway, sans-serif",
              fontSize: "14px",
            }}
          >
            {username}
          </div>
          <div
            style={{
              color: "red",
              fontSize: "10px",
              position: "absolute",
              top: "90px",
            }}
          >
            {usernameError}
          </div>
        </Box>

        <Box
          className={classes.addBox}
          style={{ display: showEditButton ? "block" : "none" }}
          onClick={handleEditClick}
        >
          Edit
        </Box>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default UserNameSection;
