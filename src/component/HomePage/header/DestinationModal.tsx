import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const countryList: { country: string; states: string[] }[] = [
  {
    country: "Nigeria",
    states: [
      "Lagos",
      "Abuja",
      "Adamawa",
      "Calabar",
      "Kaduna",
      "Kano",
      "Bauchi",
      "Kogi",
      "Kwara",
      "Nasarawa",
      "Niger",
      "Benue",
      "Delta",
      "Ebonyi",
      "Edo",
      "Kebi",
      "Enugu",
      "Imo",
      "Ogun",
      "Plateau",
    ],
  },
  {
    country: "Ghana",
    states: [
      "Accra",
      "Kumasi",
      "Tamale",
      "Takoradi",
      "Sunyani",
      "Cape Coast",
      "Obuasi",
      "Teshie",
      "Tema",
      "Koforidua",
    ],
  },
  {
    country: "Togo",
    states: [
      "Lome",
      "Sokode",
      "Kara",
      "Kpalime",
      "Atakpame",
      "Bassar",
      "Tsevie",
      "Aneho",
      "Sansanne-Mango",
      "Dapaong",
      "Tchamba",
      "Niamtougou",
    ],
  },
  {
    country: "Benin Republic",
    states: [
      "Kandi",
      "Abomey",
      "Natitingou",
      "Lokossa",
      "Allada",
      "Parakou",
      "Dassa-Zoume",
      "Aplahoue",
      "Djougou",
      "Cotonou",
      "Lokossa",
      "Port-Novo",
      "Pobe",
      "Abomey",
    ],
  },
];

interface DestinationModalProps {
  handleOpenModal: () => void;
  openModal: boolean;
  handleCloseModal: () => void;
}

const DestinationModal = ({
  // handleOpenModal,
  openModal,
  handleCloseModal,
}: DestinationModalProps) => {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");

  const handleSelectedCountry = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {countryList.map((country, index) => {
              return (
                <p
                  id={index.toString()}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "155px",
                    border: "none",
                    marginBottom: "10px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    backgroundColor:
                      selectedCountry === country.country
                        ? "rgba(191, 191, 191, 0.20)"
                        : "",
                  }}
                  onClick={() => handleSelectedCountry(country.country)}
                  className="countryHover"
                >
                  {country.country}
                  <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </p>
              );
            })}
          </div>
          <div style={{ marginLeft: "40px" }}>
            <p
              style={{
                paddingLeft: "10px",
                fontFamily: "raleway, sans-serif",
                fontWeight: "600",
                fontSize: "25px",
              }}
            >
              {selectedCountry}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              {countryList
                .find((country) => country.country === selectedCountry)
                ?.states.map((state, index) => (
                  <Link
                    to={`/destination-${state}`}
                    key={index}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "120px",
                        border: "none",
                        marginBottom: "5px",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                      className="stateHover"
                    >
                      {state}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DestinationModal;
