// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import { useState } from "react";
import "../PostReviews/PostReview.css";
import PostReviewNav from "../PostReviews/PostReviewNav";
import ManageNavbar from "../../HotelProcessing/Nav/navbar";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface PostReviewProps {
    editableDivMessage: React.ReactNode;
    switchComponent: React.ReactNode;
}

const PostReview: React.FC<PostReviewProps> = ({ editableDivMessage, switchComponent }) => {
    const links = [
        { label: 'Reservations', href: '/reservations' },
        { label: 'Payment', href: '/payment' },
        { label: 'Manage Listings', href: '/manageListings' },
        { label: 'Reviews & Messages', href: '/reviews' },
        { label: 'Boost my property', href: '/boostProperty' },
        { label: 'Travel Ads', href: '/travelAds' },
    ];

    
    return (
        <>
        <div className="content">
            <ManageNavbar links={links} activeLink="Reviews & Messages"  />
            <PostReviewNav/>

            <div className="postReviewContainer">
                <p>
                    Write a custom message to guests thanking them for their stay, knowing how they enjoyed your property and asking them to leave a review. 
                    Reviews help boost confidence in your property and increases booking. 
                </p>

                <h5>
                    Custom Message
                </h5>

                <div className="message" contentEditable="true">
                    {editableDivMessage}
                </div>
            </div>

            <div className="postCheck">
                <p>
                    Send automatically to guests after check-out date

                    {switchComponent}
                </p>

                <div className="postReviewButton">
                    save
                </div>
            </div>
        </div>
            
        </>
    );
  };
  
  export default PostReview;
  