import React from 'react';
import "./header.css"

interface MarketingHeaderProps {
  isActive: boolean;
}

const MarketingHeader: React.FC<MarketingHeaderProps> = ({ isActive }) => {
  return (
    <div className={`marketingHeader ${isActive ? 'marketingHeaderActive' : ''}`}>
      <a href="/placeMarketing">Marketing</a>
      <a href="/managePlaceListing">Manage place listings</a>
    </div>
  );
};

export default MarketingHeader;
