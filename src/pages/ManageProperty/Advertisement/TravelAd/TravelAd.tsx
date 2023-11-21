import React, { useState } from 'react';
import Navbar from '../../../../component/HomePage/header/header';
import Footer from '../../../../component/HomePage/footer/Footer';
import MetricAd from '../../../../component/TravelAd/metricAd';
import Ad from '../../../../component/TravelAd/ad';
import ManageNavbar from '../../../../component/HotelProcessing/Nav/navbar';
import BottomButton from '../../../hotelBooking/bottomButtons/bottom';

const pageLinks = [
  "/manageListings",
  "/Reservations",
  "/Payment",
  "/reviews",
  "/boostProperty",
  "/travelAds",
];

const TravelAds = () => {
  const links = [
    { label: 'Manage Listings', href: '/manageListings' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Payment', href: '/payment' },
    { label: 'Reviews & Messages', href: '/reviews' },
    { label: 'Boost my property', href: '/boostProperty' },
    { label: 'Travel Ads', href: '/travelAds' },
  ];

  const [personName, setPersonName] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handlePersonNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string[];
    setPersonName(value);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleCancelDate = (date: Date) => {
    const updatedSelectedDates = selectedDates.filter(
      (selectedDate) => selectedDate.getTime() !== date.getTime()
    );
    setSelectedDates(updatedSelectedDates);
  };

  const [rangePickerValue, setRangePickerValue] = useState<[Date | null, Date | null] | null>(null);

  const handleRangePickerChange = (dates: [Date | null, Date | null] | null, dateStrings: [string, string]) => {
    setRangePickerValue(dates);
  };

  return (
    <div>
      <Navbar />
      <>
        <div className="content">
          <ManageNavbar links={links} activeLink="Travel Ads" />

          <Ad
            personName={personName}
            personName={handlePersonNameChange}
            startDate={startDate}
            setStartDate={handleStartDateChange}
            endDate={endDate}
            setEndDate={handleEndDateChange}
            selectedDates={selectedDates}
            selectedDates={handleCancelDate}
          />

          <MetricAd rangePickerValue={rangePickerValue} onRangePickerChange={handleRangePickerChange} />

          <BottomButton currentPage="/travelAds" pageLinks={pageLinks} />
        </div>
      </>
      <Footer />
    </div>
  );
};

export default TravelAds;