import React from "react";
import Button from "@mui/material/Button";
import ArchiveIcon from "./ArchiveIcon";
import { baseURL, userData } from "../../../severs/auth";
import axios from "axios";

interface SaveAndProceedButton {
  onClick: () => void;
  archiveIcon?: React.ReactNode;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  images1: string | null;
  image: string | null;
  selectedPhoneNumber: string | null;
  selectedCountryCode: string | null;
  selectedCountry: string | null;
  province: string | null;
  city: string;
}
const SaveAndProceedButton: React.FC<SaveAndProceedButton> = ({
  firstName,
  lastName,
  images1,
  image,
  selectedPhoneNumber,
  selectedCountryCode,
  selectedCountry,
  // province,
  city,
}) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSave = async () => {
    console.log(firstName);
    try {
      // setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const body = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        means_of_id: image,

        profile_picture: images1,
        phone_number: selectedPhoneNumber,
        country_code: selectedCountryCode,

        country: selectedCountry,
        // state: province,
        // address: address,
        city: city,
        // nationality: selectedNationality,
        // currency: selectedCurrency,
        // date_of_birth: selectedDOB,
        // country_code: phoneNumberCountry,
      });
      console.log(body);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      };

      const response = await axios.patch(
        `${baseURL}auth/userdetail/`,
        body,
        config
      );
      userData();

      console.log(response);
    } catch (error) {
      // Handle error
      console.log("Error fetching user data:", error);
    }
    // setIsLoading(false);
  };
  return (
    <Button
      variant="outlined"
      onClick={handleSave}
      sx={{
        padding: "10px 20px",
        color: "black",
        border: "1px solid black",
        fontFamily: "volkhov, sans-serif",
        fontSize: "20px",
        fontWeight: "700",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "50px auto 0",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#263238",
          color: "white",
        },
      }}
    >
      SAVE
      <ArchiveIcon />
    </Button>
  );
};

export default SaveAndProceedButton;
