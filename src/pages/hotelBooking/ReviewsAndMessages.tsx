import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import ReviewNav from "../../component/ReviewsHotelBooking/Review/ReviewNav";
// import Review from "../../component/ReviewsHotelBooking/Review/Review";
// import ChatHeader from "../../component/ReviewsHotelBooking/Review/ChatBox/ChatHeader";
// import ChatSend from "../../component/ReviewsHotelBooking/Review/ChatBox/ChatSend";
import Message from "../../component/ReviewsHotelBooking/Message/Message";
import "../../component/ReviewsHotelBooking/Message/Message.css"
import React from "react";
import ManageNavbar from "../../component/HotelProcessing/Nav/navbar";
import BottomButton from "./bottomButtons/bottom";

const pageLinks = [
    "/manageListings",
    "/Reservations",
    "/Payment",
    "/reviews",
    "/boostProperty",
    "/travelAds",
];

const  ReviewAndMessages: React.FC = () => {
    const links = [
        { label: 'Manage Listings', href: '/manageListings' },
        { label: 'Reservations', href: '/reservations' },
        { label: 'Payment', href: '/payment' },
        { label: 'Reviews & Messages', href: '/reviews' },
        { label: 'Boost my property', href: '/boostProperty' },
        { label: 'Travel Ads', href: '/travelAds' },
    ];

    return(
        <>
            <Navbar />
            <div className="content">
                <ManageNavbar links={links} activeLink="Reviews & Messages"  />
                <ReviewNav />

                {/* <div className="reviewContainer">
                    <ChatHeader />
                    <Review />
                </div>  
                <ChatSend /> */}


                <div className="chatsSection">
                    <Message />
                </div>

                <BottomButton currentPage="/reviews" pageLinks={pageLinks} />

            </div>
            
            <Footer />
        </>
    );
};

export default ReviewAndMessages;
