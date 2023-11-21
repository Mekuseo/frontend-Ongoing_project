import { useState } from "react";
import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontFamily: "raleway, sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    margin: "33px 0 0",
  },
  input: {
    fontFamily: "raleway, sans-serif",
    fontSize: "14px",
  },
  addBox: {
    color: "red",
    fontWeight: 600,
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const ProfileEmail = () => {
  const [email, setEmail] = useState("");

  const classes = useStyles();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <div>
      <div className={classes.container}>
        <Box component="form">
          <label>Email</label>
          <TextField
            id="firstname"
            variant="outlined"
            sx={{ backgroundColor: "#F5F5F5" }}
            onChange={handleEmailChange}
            value={email}
          />
        </Box>

        <Box className={classes.addBox}>Edit</Box>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default ProfileEmail;
