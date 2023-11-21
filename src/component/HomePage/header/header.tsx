import { useContext, useEffect, useState } from "react";
import "./header.css";
import logo from "../../../assets/pics/logo-thehunters.png.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../utils/UserData";
import { baseURL, logOut } from "../../../severs/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cart from "../../../svgs/CartIcon";
import SettingIcon from "../../../svgs/SettingIcon";
import { Button } from "@mui/material";
import UserIcons from "../../../svgs/UserIcons";
import StarIcon from "../../../svgs/StarIcon";
import SignOutIcon from "../../../svgs/SignOutIcon";
import AddListingDrop from "./AddListingDrop";
import DestinationModal from "./DestinationModal";
import CurrencyModal from "./CurrencyModal";
import * as React from "react";
import nigeria from "../../../assets/pics/nigeria.png";
import europe from "../../../assets/pics/european.png";
import america from "../../../assets/pics/circle.png";
import uk from "../../../assets/pics/united-kingdom.png";
import china from "../../../assets/pics/china.png";
import ghana from "../../../assets/pics/ghana.png";
import southAfrica from "../../../assets/pics/south-africa.png";
import india from "../../../assets/pics/india.png";
import uae from "../../../assets/pics/united-arab-emirates.png";
import france from "../../../assets/pics/france.png";
import axios from "axios";
// import ManageBooking from '../../../pages/manageBooking/ManageBooking';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElAddList, setAnchorElAddList] = useState<null | HTMLElement>(
    null
  );
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [openCurrencyModal, setOpenCurrencyModal] = React.useState(false);
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [username, setUsername] = useState("");

  const handleSelectCurrency = (index: number) => {
    // Ensure that the index is within the valid range of currencies
    if (index >= 0 && index < currencies.length) {
      setSelectedCurrencyIndex(index);
      setSelectedCurrency(currencies[index]);
    }
  };

  const handleCloseCurrencyModal = () => setOpenCurrencyModal(false);
  const handleOpenCurrencyModal = () => setOpenCurrencyModal(true);

  const open = Boolean(anchorEl);
  const openAddList = Boolean(anchorElAddList);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAddList = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElAddList(event.currentTarget);
  };

  const handleCloseAddList = () => {
    setAnchorElAddList(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseSignOut = () => {
    setAnchorEl(null);
    handleLogOut();
  };

  const handleLogOut = async () => {
    // Perform logout actions, e.g., making an API call to log out the user
    try {
      await logOut();

      // Clear user data from context or storage
      setUser(null);

      // Redirect the user or perform any other necessary actions
      navigate("/");
    } catch (error) {
      // Handle any errors that occur during logout
      console.error("Logout Error:", error);
    }
  };

  useEffect(() => {
    handleOnLoad();
  });

  const handleOnLoad = async () => {
    try {
      // setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      };

      const response = await axios.get(`${baseURL}auth/userdetail/`, config);
      const responseData = response.data;
      setUsername(responseData.username);
    } catch (error) {}
  };

  return (
    <div className="navbar-fixed">
      <div className="navbar-container">
        <div className="left-navbar">
          <Link to="/">
            <img src={logo} alt="the travel hunters logo" />
          </Link>
        </div>

        <ul className="navMenu-left">
          <li>
            <Link to="/hotelPage" className="Link">
              Hotels
            </Link>
          </li>
          <li>
            <Link to="/dealshome" className="Link">
              Late-night hotels
            </Link>
          </li>
          <li>
            <Link to="/todohome" className="Link">
              Things to do
            </Link>
          </li>
          <li onClick={handleOpenModal}>Destinations</li>
        </ul>

        <div>
          <ul className="navMenu-right">
            <li>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickAddList}
                sx={{
                  fontSize: "12px",
                  color: "black",
                  padding: "0",
                  margin: "0",
                  textTransform: "capitalize",
                }}
              >
                Add listing
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="xs"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
            </li>
            <li style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              <Cart />
              Cart
            </li>
            <li style={{ display: "flex", gap: "3px", alignItems: "center" }}>
              <SettingIcon />
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  fontSize: "12px",
                  color: "black",
                  padding: "0",
                  margin: "0",
                  textTransform: "capitalize",
                }}
              >
                Settings{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="xs"
                  style={{ marginLeft: "3px" }}
                />
              </Button>
            </li>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                marginTop: "20px",
                textTransform: "capitalize",
              }}
            >
              <div></div>
              {user ? (
                <MenuItem
                  onClick={handleClose}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <Link to="/profilePage" className="Link">
                    <UserIcons />
                    Manage Profile
                  </Link>
                </MenuItem>
              ) : (
                <div></div>
              )}
              {user ? (
                <MenuItem
                  onClick={handleClose}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <StarIcon />
                  <Link
                    to="/ManageBooking"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Manage Bookings{" "}
                  </Link>
                </MenuItem>
              ) : (
                <div></div>
              )}
              {user ? (
                <MenuItem
                  onClick={handleCloseSignOut}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <SignOutIcon /> Sign out
                </MenuItem>
              ) : (
                <div></div>
              )}
            </Menu>
            {user ? (
              <li className="navbarSignUp">
                <Link to="">@ {username}</Link>
              </li>
            ) : (
              <li className="navbarSignUp">
                <Link to="/login">Log In</Link>
              </li>
            )}

            {selectedCurrency && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  cursor: "pointer",
                }}
                onClick={handleOpenCurrencyModal}
              >
                <img
                  src={selectedCurrency.flag}
                  alt="flag"
                  style={{ width: "12px" }}
                />
                <p style={{ fontSize: "10px", marginBottom: "0" }}>
                  {selectedCurrency.code}
                </p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="xs"
                  style={{ marginLeft: "3px" }}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorElAddList}
        open={openAddList}
        onClose={handleCloseAddList}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          marginTop: "20px",
        }}
      >
        <AddListingDrop />
      </Menu>
      <DestinationModal
        handleOpenModal={handleOpenModal}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
      <CurrencyModal
        handleOpenCurrencyModal={handleOpenCurrencyModal}
        handleCloseCurrencyModal={handleCloseCurrencyModal}
        openCurrencyModal={openCurrencyModal}
        handleSelectCurrency={handleSelectCurrency}
        selectedCurrencyIndex={selectedCurrencyIndex}
        currencies={currencies}
      />
    </div>
  );
};

export default Navbar;

const currencies = [
  {
    name: "Naira",
    code: "NGN",
    flag: nigeria,
  },
  {
    name: "Euro",
    code: "Euro",
    flag: europe,
  },
  {
    name: "Dollar",
    code: "USD",
    flag: america,
  },
  {
    name: "Pounds",
    code: "GBP",
    flag: uk,
  },
  {
    name: "Yuan",
    code: "CNY",
    flag: china,
  },
  {
    name: "Cedi",
    code: "GHS",
    flag: ghana,
  },
  {
    name: "Rand",
    code: "ZAR",
    flag: southAfrica,
  },
  {
    name: "Rupee",
    code: "INR",
    flag: india,
  },
  {
    name: "Dirham",
    code: "AED",
    flag: uae,
  },
  {
    name: "Franc",
    code: "XOF",
    flag: france,
  },
];
