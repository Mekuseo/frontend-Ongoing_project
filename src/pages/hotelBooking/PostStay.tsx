import Navbar from '../../component/HomePage/header/header';
import Footer from '../../component/HomePage/footer/Footer';
import PostReview from '../../component/ReviewsHotelBooking/PostReviews/PostReview';
import Switch from '@mui/material/Switch';

const PostStay = () => {
    const editableDivMessage = (
        <div contentEditable="true">
             <p className="greeting">
                Dear (
                <span>
                    Guest name
                </span>),
            </p>

            <p className="greeting">
                We hope you enjoyed your recent stay with us at ( 
                <span>
                    Hotel name
                </span>).
            </p>

            <p className="greeting">
                Please take a moment to leave us a review. It lets us know how we did, and gives other travellers a better picture of what It’s like to stay with us (
                <span>
                    guest name
                </span>).
            </p>

            <p className="greeting">
                Thank you again for choosing our brand, and we hope to see you again soon.
            </p>

            <p className="greeting">
                Best regards,
                <br />
                (hotel-name)
            </p>
        </div>
    );

    const switchComponent = <Switch aria-label="Switch demo" defaultChecked />;
    return (
        <>
            <Navbar />
            <PostReview editableDivMessage={editableDivMessage} switchComponent={switchComponent}/>
            <Footer />
        </>
    );
  };
  
export default PostStay;
  