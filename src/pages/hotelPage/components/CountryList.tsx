import { Box } from "@mui/material";
import { Typography } from "antd";
import Countries from "../CountryList.json";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CountryList = () => {
  const columns = 3; // Number of columns

  const chunkArray = (array: string[], chunkSize: number) => {
    const chunked: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunked.push(array.slice(i, i + chunkSize));
    }
    return chunked;
  };

  const chunkedCountries = chunkArray(Countries[0].name, columns);

  return (
    <Box>
      <Box>
        <Typography style={{ margin: "59px 0 0 104px" }}>
          {chunkedCountries.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex" }}>
              {row.map((countryName, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems:"center",
                    width: "216px",
                    marginRight:
                      colIndex === columns - 1 ? 0 : "112px",
                      marginBottom: "25px"
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "700",
                      color: "#263238",
                      fontSize: "20px",
                    }}
                  >
                    {countryName}
                  </Typography>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#263238" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default CountryList;
