import Navbar from '../../../component/HomePage/header/header';
import Footer from '../../../component/HomePage/footer/Footer';
import Table from '../../../component/HotelProcessing/Reservations/table';
import BookingRevenue from '../../../component/HotelProcessing/Reservations/BookingRevenue';
// import DaysReservations from '../../../component/HotelProcessing/Reservations/Days';
import ManageNavbar from '../../../component/HotelProcessing/Nav/navbar';
import "./Reservations.css"
import BottomButton from '../../hotelBooking/bottomButtons/bottom';

const pageLinks = [
    "/manageListings",
    "/Reservations",
    "/Payment",
    "/Reviews",
    "/boostProperty",
    "/travelAds",
];

const Reservations: React.FC = () => {
    const links = [
        { label: 'Manage Listings', href: '/manageListings' },
        { label: 'Reservations', href: '/reservations' },
        { label: 'Payment', href: '/payment' },
        { label: 'Reviews & Messages', href: '/reviews' },
        { label: 'Boost my property', href: '/boostProperty' },
        { label: 'Travel Ads', href: '/travelAds' },
    ];
    
    return (
        <>
            <Navbar />

            <div className="content">
                <ManageNavbar links={links} activeLink="Reservations"  />
                <Table />
                <BookingRevenue />
                <br />
                {/* <DaysReservations /> */}
                <BottomButton currentPage="/Reservations" pageLinks={pageLinks} />
            </div>
            
            
            <Footer />
        </>
    );
};

export default Reservations;