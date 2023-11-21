import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faSquareXTwitter,
  faFacebook,
  faSquareInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, TextField } from "@mui/material";
import { Divider } from "antd";
import * as React from "react";
import { useState } from "react";

const ProfileSocialMedia = () => {
  const [account, setAccount] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconDefinition | null>(null);

  const handleIconClick = (icon: IconDefinition) => {
    setSelectedIcon((prevIcon) => (prevIcon === icon ? null : icon));
  };

  const handleSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

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
            Social media handle
          </p>
          <div
            style={{
              border: "1px solid #cfcfcf",
              padding: "10px 60px",
              borderRadius: "5px",
              textAlign: "center",
              marginTop: "5px",
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Social Media
            </p>
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "-20px",
              }}
            >
              Please select a social media handle
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                size="2x"
                style={{
                  color: selectedIcon === faSquareXTwitter ? "green" : "black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                onClick={() => handleIconClick(faSquareXTwitter)}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                style={{
                  color: selectedIcon === faFacebook ? "green" : "black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                onClick={() => handleIconClick(faFacebook)}
              />
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="2x"
                style={{
                  color: selectedIcon === faSquareInstagram ? "green" : "black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                onClick={() => handleIconClick(faSquareInstagram)}
              />
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{
                  color: selectedIcon === faGithub ? "green" : "black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                onClick={() => handleIconClick(faGithub)}
              />
            </div>
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
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default ProfileSocialMedia;
