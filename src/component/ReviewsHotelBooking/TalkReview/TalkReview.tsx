import "../TalkReview/TalkReview.css";
import TalkReviewNav from "./TalkReviewNav";
import ManageNavbar from "../../HotelProcessing/Nav/navbar";

interface TalkReviewProps {
    editableDivContent: React.ReactNode;
}

const TalkReview: React.FC<TalkReviewProps> = ({ editableDivContent }) => {
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

                <TalkReviewNav />

                <div className="talkReviewContainer">
                    {editableDivContent}

                    <div className="timeReview">
                        <p>
                            Today, 2:02pm
                        </p>
                    </div>

                    <div className="callTalkToUs">
                        <p>
                            You can 
                            <a href="tel:9051290512">
                            <span>
                                Call 
                            </span>
                            </a> us, 
                            send a message on 
                            <span>
                                WhatsApp
                            </span>
                            or send an 
                            <a href="mailto:hello@thetravelhunters.com">
                                <span>
                                    E-mail.
                                </span>
                            </a>
                        </p>

                        <div className="talkReview-inline">
                            <textarea name="" id="" placeholder="Send a message " className="talkText"></textarea>
                            <button>
                                Send
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default TalkReview;