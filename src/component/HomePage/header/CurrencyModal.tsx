import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GreenTick from "../../../svgs/GreenTick";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Currency {
  name: string;
  code: string;
  flag: string;
}

interface CurrencyModalProps {
  openCurrencyModal: boolean;
  handleOpenCurrencyModal: () => void;
  handleCloseCurrencyModal: () => void;
  handleSelectCurrency: (index: number) => void;
  selectedCurrencyIndex: number;
  currencies: Currency[];
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({
  openCurrencyModal,
  // handleOpenCurrencyModal,
  handleCloseCurrencyModal,
  handleSelectCurrency,
  selectedCurrencyIndex,
  currencies,
}) => {

  return (
    <div>
      <Modal
        open={openCurrencyModal}
        onClose={handleCloseCurrencyModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
            }}
          >
            {currencies.map((currency, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width:"200px",
                    gap: "5px",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundColor: selectedCurrencyIndex === index ? "#e0e0e0" : "white",
                  }}
                  className="currencyModalHover"
                  onClick={() => handleSelectCurrency(index)}
                >
                  <div>
                    {currency.name}{" "}
                    <img
                      src={currency.flag}
                      alt={currency.name}
                      style={{ width: "20px" }}
                    />
                  </div>
                  <div>{currency.code}</div>
                </div>
                <div
                  style={{
                    display: selectedCurrencyIndex === index ? "block" : "none",
                    position: "absolute",
                    top: "15px",
                    right: "20px",
                  }}
                >
                  <GreenTick />
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CurrencyModal;