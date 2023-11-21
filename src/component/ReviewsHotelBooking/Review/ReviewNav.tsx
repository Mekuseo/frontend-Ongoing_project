import "../Review/Review.css";

const ReviewNav = () => {
    return(
        <>
            <div className="reviewNavbar">
                <a className="active" href="/reviews">Reviews</a> 
                <a href="/postStay">Post stay Reviews</a> 
                <a href="/talkToUs">Talk to us</a> 
            </div>
 
        </>
    );
};

export default ReviewNav;