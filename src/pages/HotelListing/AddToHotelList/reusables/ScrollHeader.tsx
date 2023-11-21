// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import "./headerStyles.css"

const pageLinks = [
  "/aboutProperty",
  "/amenities",
  "/propertyType",
  "/propertyPolicy",
  "/commision",
  "/photos",
  "/contract",
];

const pageNames = {
  "/aboutProperty": "About Property",
  "/amenities": "Amenities",
  "/propertyType": "Property Type",
  "/propertyPolicy": "Property Policy",
  "/commision": "Commission",
  "/photos": "Photos",
  "/contract": "Contract",
};

const ScrollHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<number>(
    pageLinks.indexOf(location.pathname) + 1
  );

  const handleItemClick = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setSelectedItem(page);
    if (page >= 1 && page <= pageLinks.length) {
      navigate(pageLinks[page - 1]);
    }
  };

  const links = pageLinks.map((link, index) => (
    <>
      <div key={link} style={{ display: selectedItem === index + 1 ? "block" : "none" }}>
        {/* <h2>{index + 1}</h2>
        <a href={link}>{pageNames[link]}</a> */}
      </div>
    </>
  ));

  const isMobile = window.innerWidth <= 768;

  const currentLink = pageLinks[selectedItem - 1];
  const pageName = pageNames[currentLink];

  const handlePreviousClick = () => {
    if (selectedItem > 1) {
      setSelectedItem(selectedItem - 1);
      navigate(pageLinks[selectedItem - 2]);
    }
  };

  const handleNextClick = () => {
    if (selectedItem < pageLinks.length) {
      setSelectedItem(selectedItem + 1);
      navigate(pageLinks[selectedItem]);
    }
  };

  return (
    <div>
      <div style={{ display: isMobile ? "none" : "block" }}>
        <h1
          style={{
            fontFamily: "volkhov, sans-serif",
            fontSize: "50px",
            fontWeight: "700",
            color: "#263238",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          Edit Property
        </h1>
        <nav
          aria-label="Page navigation example"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "850px",
              height: "3px",
              backgroundColor: "#939191",
              border: "none",
              top: "24px",
            }}
          ></div>
          <Pagination
            count={pageLinks.length}
            page={selectedItem}
            onChange={handleItemClick}
            variant="outlined"
            shape="circular"
            color="primary"
            hideNextButton
            hidePrevButton
            sx={{
              "& .MuiPaginationItem-root": {
                margin: "0px 45px",
                width: "51px",
                borderRadius: "25px",
                height: "50px",
                backgroundColor: "#ddd",
                border: "none",
                fontSize: "20px",
                fontFamily: "Volkhov",
                color: "rgba(0, 0, 0, 0.50)",
                "&.Mui-selected": {
                  backgroundColor: (theme) => theme.palette.common.white,
                  color: "#000",
                  border: "2px solid #00BFE9",
                },
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.common.white,
                  border: "2px solid #00BFE9",
                },
              },
            }}
          />
        </nav>
      </div>
      {isMobile && (
        <div className="mobile-header">
          {links[selectedItem - 1]}
          <div>
            {selectedItem > 1 && (
              <button
                onClick={handlePreviousClick}
                className="previousMobileButton"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                  <path d="M17 6.33325H1L6.33333 11.6666" stroke="#6E9E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 6.33333L6.33333 1" stroke="#6E9E76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            )}
            <span className="headernamemobile">{pageName}</span>
            {selectedItem < pageLinks.length && (
              <button
                onClick={handleNextClick}
                className="nextMobileButton"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                  <path d="M1 6.66675L17 6.66675L11.6667 1.33341" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 6.66667L11.6667 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollHeader;
