// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import ReviewNav from "../../component/ReviewsHotelBooking/Review/ReviewNav";
// import Review from "../../component/ReviewsHotelBooking/Review/Review";
// import ChatHeader from "../../component/ReviewsHotelBooking/Review/ChatBox/ChatHeader";
// import ChatSend from "../../component/ReviewsHotelBooking/Review/ChatBox/ChatSend";
import Message2 from "../../component/ReviewsHotelBooking/Message/Messages2";
import React from "react";

const  ReviewAndMessages2: React.FC = () => {
    return(
        <>
            <Navbar />
            <div className="content">
                <ReviewNav />

                {/* <div className="reviewContainer">
                    <ChatHeader />
                    <Review />
                </div>  
                <ChatSend /> */}

                <Message2 />

            </div>
            
            <Footer />
        </>
    );
};

export default ReviewAndMessages2;
