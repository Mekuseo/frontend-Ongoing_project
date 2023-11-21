import "../Review/Review.css";

const TalkReviewNav = () => {
    return(
        <>
            <div className="reviewNavbar">
                <a href="/reviews">Reviews</a> 
                <a href="/postStay">Post stay Reviews</a> 
                <a className="active" href="/talkToUs">Talk to us</a> 
            </div>
 
        </>
    );
};

export default TalkReviewNav;