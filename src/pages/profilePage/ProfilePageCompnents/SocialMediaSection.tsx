import { Box, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles2 = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: "raleway, sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    margin: "33px 0 0",
  },
  socialMediaBox: {
    border: "1px solid #cfcfcf",
    padding: "10px 60px",
    borderRadius: "5px",
    textAlign: "center",
    marginTop: "5px",
  },
  socialMediaLabel: {
    fontFamily: "raleway, sans-serif",
    fontSize: "16px",
    fontWeight: 500,
  },
  socialMediaNote: {
    fontFamily: "raleway, sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    marginTop: "-20px",
  },
  icon: {
    padding: "5px",
    borderRadius: "50%",
  },
});

interface SocialMediaSectionProps {
  socialMediaIcons: { icon: any; color: string; primary: string }[];
  selectedIcon: any;
  handleIconClick: (icon: any) => void;
  handleSocialChange: (e: any) => void;
  account: string;
}

const SocialMediaSection = ({
  socialMediaIcons,
  selectedIcon,
  handleIconClick,
  handleSocialChange,
  account,
}: SocialMediaSectionProps) => {
  const classes2 = useStyles2();
  return (
    <div>
      <div className={classes2.container}>
        <div>
          <p className={classes2.heading}>Social media handle</p>
          <div className={classes2.socialMediaBox}>
            {/* <p className={classes2.socialMediaLabel}>Social Media</p> */}
            <p className={classes2.socialMediaNote}>
              Please select a social media handle
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "end",
                marginBottom: "8px",
              }}
            >
              {socialMediaIcons.map((item, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={item.icon}
                  size="2x"
                  className={classes2.icon}
                  style={{
                    color: selectedIcon === item.icon ? item.color : item.primary,
                  }}
                  onClick={() => handleIconClick(item.icon)}
                />
              ))}
              <Box component="form">
                <label style={{ textAlign: "left" }}>
                  {selectedIcon ? (
                    <FontAwesomeIcon
                      icon={selectedIcon}
                      size="1x"
                      color="green"
                      style={{ marginRight: "5px" }}
                    />
                  ) : null}
                  Username
                </label>
                <TextField
                  id="account"
                  variant="outlined"
                  placeholder="@grifindorr"
                  sx={{ backgroundColor: "#F5F5F5" }}
                  onChange={handleSocialChange}
                  value={account}
                />
              </Box>
            </div>
          </div>
        </div>
        {/* <Box
            className={classes.addBox}
            style={{ display: showEditButton ? "block" : "none" }}
            onClick={handleEditClick}
          >
            Edit
          </Box>{" "} */}
      </div>
      <Divider style={{ margin: "10px 0 0" }} />
    </div>
  );
};

export default SocialMediaSection;