import { Box, Divider } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

interface HomeAddressSectionProps {
  handleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  address: string;
  showEditButton: boolean;
  handleEditClick: () => void;
  hideDiv: boolean;
}

const HomeAddressSection = ({
  handleAddressChange,
  address,
  showEditButton,
  handleEditClick,
  hideDiv,
}: HomeAddressSectionProps) => {
  const classes = useStyles();
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
              fontWeight: "700",
              margin: "33px 0 0",
            }}
          >
            Home Address
          </p>
          <Box component="form" className={!hideDiv ? "" : classes.hidden}>
            <TextField
              id="firstname"
              variant="outlined"
              sx={{ backgroundColor: "#F5F5F5", width: "150%" }}
              onChange={handleAddressChange}
              value={address}
            />
          </Box>
          <div style={{ display: hideDiv ? "" : "none" }}>{address}</div>
        </div>
        <Box
          className={classes.addBox}
          style={{ display: showEditButton ? "block" : "none" }}
          onClick={handleEditClick}
        >
          Edit
        </Box>{" "}
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default HomeAddressSection;
