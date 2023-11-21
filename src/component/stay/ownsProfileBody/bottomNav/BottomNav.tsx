import axios from "axios";
import React, { useState } from "react";
import { baseURL, userData } from "../../../../severs/auth";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

interface BottomNavProps {
  selectedPhoneNumber: string;
  selectedFiestName: string;
  selectedLastNAme: string;
  selectedDOB: string;
  selectedDP: string;
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  fullAddress: string;
  address: string;
  selectedCurrency: string;
  selectedNationality: string;
  phoneNumberCountry: string;
}

const BottomNav: React.FC<BottomNavProps> = ({
  selectedPhoneNumber,
  selectedFiestName,
  selectedLastNAme,
  selectedDOB,
  selectedDP,
  selectedCountry,
  selectedState,
  selectedCity,
  address,
  selectedCurrency,
  selectedNationality,
  phoneNumberCountry,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSaveAndExit = async () => {
    try {
      setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const body = JSON.stringify({
        phone_number: selectedPhoneNumber,
        first_name: selectedFiestName,
        last_name: selectedLastNAme,
        profile_picture: selectedDP,
        country: selectedCountry,
        state: selectedState,
        address: address,
        city: selectedCity,
        nationality: selectedNationality,
        currency: selectedCurrency,
        date_of_birth: selectedDOB,
        country_code: phoneNumberCountry,
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
      navigate("/");

      console.log(response);
    } catch (error) {
      // Handle error
      console.log("Error fetching user data:", error);
    }
    setIsLoading(false);
  };

  const handlePrevious = () => {
    // history.push("/previous");
  };

  const handleNext = async () => {
    try {
      setIsLoading(true);
      const userToken = localStorage.getItem("token") || "";
      const body = JSON.stringify({
        phone_number: selectedPhoneNumber,
        first_name: selectedFiestName,
        last_name: selectedLastNAme,
        profile_picture: selectedDP,
        country: selectedCountry,
        state: selectedState,
        address: address,
        city: selectedCity,
        nationality: selectedNationality,
        currency: selectedCurrency,
        date_of_birth: selectedDOB,
        country_code: phoneNumberCountry,
      });
      // console.log(body);
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
      navigate("/aboutProperty");

      console.log(response);
    } catch (error) {
      // Handle error
      console.log("Error fetching user data:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bottombar">
      <a className="main" onClick={handleSaveAndExit}>
        {isLoading ? (
          <>
            <FaSpinner className="loading-icon" /> Saving...
          </>
        ) : (
          "save and exit"
        )}
      </a>
      <div className="bottombar-right">
        <a href="#" className="main" onClick={handlePrevious}>
          previous
        </a>
        <a className="a" onClick={handleNext}>
          {isLoading ? (
            <>
              <FaSpinner className="loading-icon" /> Saving...
            </>
          ) : (
            "Next"
          )}
        </a>
      </div>
    </div>
  );
};

export default BottomNav;
