import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface ChanelManagerProps {
  propertyChannelManager: string;
  handlePropertyChannelManager: (propertyChannelManager: string) => void;
  propertyChain: string;
  handlePropertyChain: (propertyChain: string) => void;
  propertyChannelManager1: string;
  propertyChain1: string;
  setPropertyChannelManager1: (propertyChannelManager1: string) => void;
  setPropertyChain1: (propertyChain1: string) => void;
}

const ChanelManager: React.FC<ChanelManagerProps> = ({
  propertyChannelManager,
  handlePropertyChannelManager,
  handlePropertyChain,
  propertyChain,
  propertyChannelManager1,
  propertyChain1,
  setPropertyChannelManager1,
  setPropertyChain1,
}) => {
  const changeHandling = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setPropertyChannelManager1(value);
  };

  return (
    <div>
      <p className="subheadTworeuse channelmanagerheader mobilechannelmanager">
        Channel manager
      </p>

      <p className="subheadreuse">
        Please select your channel manager to map your pricing and availability.
      </p>

      <div className="containerThree">
        <p className="channelManagerP">
          Does this property work with a channel manager?
        </p>

        <div className="container-content">
          <div className="row">
            <div className="column2">
              <label className="container">
                <div>Yes, it does</div>
                <input
                  type="radio"
                  name="radio"
                  value="Yes"
                  checked={propertyChannelManager === "Yes"}
                  onChange={(e) => handlePropertyChannelManager(e.target.value)}
                />
                <span className="checkmark"></span>
              </label>

              <label className="container">
                <div>No, it does not</div>
                <input
                  type="radio"
                  name="radio"
                  value="No"
                  checked={propertyChannelManager === "No"}
                  onChange={(e) => handlePropertyChannelManager(e.target.value)}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="column2">
              {propertyChannelManager === "Yes" && (
                <Box className="inputLabelText">
                  <FormControl fullWidth className="formLabel">
                    <InputLabel className="inputLabel">
                      e.g of third party property managers
                    </InputLabel>
                    <Select
                      className="select"
                      label="Channel managers"
                      value={propertyChannelManager1}
                      onChange={changeHandling}
                    >
                      <MenuItem value={"CloudBet"}>CloudBet</MenuItem>
                      <MenuItem value={"Front desk manager"}>
                        Front desk manager
                      </MenuItem>
                      <MenuItem value={"Booking.com"}>Booking.com</MenuItem>
                      <MenuItem value={"Siteminder"}>Siteminder</MenuItem>
                      <MenuItem value={"Sabi app"}>Sabi app</MenuItem>
                      <MenuItem value={"Omnibiz"}>Omnibiz</MenuItem>
                      <MenuItem value={"Expedia"}>Expedia</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </div>
          </div>
        </div>

        <p className="channelManagerPTwo">
          Is this property part of a Hotel chain?
        </p>

        <div className="container-content">
          <div className="row">
            <div className="column2">
              <form action="">
                <label className="container">
                  <div>Yes, it is</div>
                  <input
                    type="radio"
                    name="radio"
                    value="Yes"
                    checked={propertyChain === "Yes"}
                    onChange={(e) => handlePropertyChain(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  <div>No, it is not</div>
                  <input
                    type="radio"
                    name="radio"
                    value="No"
                    checked={propertyChain === "No"}
                    onChange={(e) => handlePropertyChain(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
              </form>
            </div>

            <div className="column2">
              {propertyChain === "Yes" && (
                <input
                  onChange={(e) => setPropertyChain1(e.target.value)}
                  value={propertyChain1}
                  type="text"
                  placeholder="Please input the name of the chain"
                  name="uname"
                  required
                  className="hotelchain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanelManager;
