import { Select, Divider } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
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

interface GenderSectionProps {
  gender: string;
  handleGenderChange: any;
  showEditButton: boolean;
  handleEditClick: any;
  hideDiv: boolean;
}

const GenderSection = ({
  gender,
  handleGenderChange,
  showEditButton,
  handleEditClick,
  hideDiv,
}: GenderSectionProps) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div>
          <div>
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                margin: "33px 0 0",
              }}
            >
              Gender
            </p>
            <Select
              style={{ width: 120 }}
              value={gender}
              onChange={(value) => handleGenderChange(value)}
              className={!hideDiv ? "" : classes.hidden}
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </div>
          <div style={{ display: hideDiv ? "" : "none" }}>{gender}</div>
        </div>
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

export default GenderSection;
