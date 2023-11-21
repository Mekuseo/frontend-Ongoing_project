import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import TalkReview from "../../component/ReviewsHotelBooking/TalkReview/TalkReview";

const TalkToUs = () => {
    const editableDivContent = (
        <div className="talkReviewContainerTwo" contentEditable="true">
            <p>
                What problems are you having? We are here to help you fix it!
            </p>
        </div>
    );
    return(
        <>
            <Navbar />
            <TalkReview editableDivContent={editableDivContent} />
            <Footer />

        </>
    );
};

export default TalkToUs;