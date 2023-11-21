import { useState } from 'react';
import Metrics from "../../component/HotelProcessing/BoostProperty/metrics";
import Travel from "../../component/HotelProcessing/BoostProperty/Travel/travel";
import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import ManageNavbar from "../../component/HotelProcessing/Nav/navbar";
import ".//booking.css"
import BottomButton from './bottomButtons/bottom';

const pageLinks = [
    "/manageListings",
    "/Reservations",
    "/Payment",
    "/reviews",
    "/boostProperty",
    "/travelAds",
];

const BoostProperty = () => {
    const [rangePickerValue, setRangePickerValue] = useState<[Date | null, Date | null] | null>(null);
    const [checkboxChecked, setCheckboxChecked] = useState(false); 
    const handleRangePickerChange = (dates: [Date | null, Date | null] | null) => {
        setRangePickerValue(dates);
    };
  
    const links = [
        { label: 'Manage Listings', href: '/manageListings' },
        { label: 'Reservations', href: '/reservations' },
        { label: 'Payment', href: '/payment' },
        { label: 'Reviews & Messages', href: '/reviews' },
        { label: 'Boost my property', href: '/boostProperty' },
        { label: 'Travel Ads', href: '/travelAds' },
    ];

    // const date = new Date();
    return (
        <>
            <Navbar />

            <div className="content">
                <ManageNavbar links={links} activeLink="Boost my property"  />
                
                <div className="boostPropContainer">
                    <p className="boostPropertyMainText">
                        Get your property in front of more travelers with a boost by creating sort orders for your property to appear. You fill empty rooms and pay us when booking has been confirmed.   
                    </p>

                    <Travel 
                        additionalContent={<Travel additionalContent={undefined} />}
                        checkboxChecked={checkboxChecked}
                        setCheckboxChecked={setCheckboxChecked}
                    />
                </div>
                <Metrics rangePickerValue={rangePickerValue} onRangePickerChange={handleRangePickerChange} />
                
                <BottomButton currentPage="/boostProperty" pageLinks={pageLinks} />
            </div>
            
            <Footer />
        </>
    )
}

export default BoostProperty;