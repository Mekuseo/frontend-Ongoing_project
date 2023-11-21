import "../Review/Review.css";

const PostReviewNav = () => {
    return(
        <>
            <div className="reviewNavbar">
                <a href="/reviews">Reviews</a> 
                <a className="active" href="/postStay">Post stay Reviews</a> 
                <a href="/talkToUs">Talk to us</a> 
            </div>
 
        </>
    );
};

export default PostReviewNav;