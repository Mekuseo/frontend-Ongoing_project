import React, { useState } from 'react';
import './navbar.css';
import MobileHeader from './mobileNavbar';

interface NavbarProps {
  links: { label: string; href: string }[];
  activeLink?: string;
}

const pageLinks = [
  "/manageListings",
  "/Reservations",
  "/Payment",
  "/Reviews",
  "/boostProperty",
  "/travelAds",
];

const pageNames = {
  "/manageListings": "Manage Listings",
  "/Reservations": "Reservations",
  "/Payment": "Payment",
  "/Reviews": "Reviews and Messages",
  "/boostProperty": "Boost my Property",
  "/travelAds": "Travel Ads",
};

const ManageNavbar: React.FC<NavbarProps> = ({ links, activeLink }) => {
  const [selectedItem, setSelectedItem] = useState<number>(
    pageLinks.indexOf(window.location.pathname) + 1
  );

  const handlePreviousClick = () => {
    if (selectedItem > 1) {
      setSelectedItem(selectedItem - 1);
      window.location.href = pageLinks[selectedItem - 2];
    }
  };

  const handleNextClick = () => {
    if (selectedItem < pageLinks.length) {
      setSelectedItem(selectedItem + 1);
      window.location.href = pageLinks[selectedItem];
    }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div style={{ display: isMobile ? "none" : "block" }}>
        <div className="manageNavbar">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={activeLink === label ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      {isMobile && (
        <MobileHeader
          selectedItem={selectedItem}
          pageLinks={pageLinks}
          pageNames={pageNames}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      )}
    </>
  );
};

export default ManageNavbar;
