import Navbar from "../../component/HomePage/header/header";
import "../../component/HotelProcessing/HotelProcessing.css";
import "../../component/stay/ownsProfileBody/propertyAxis.css";
import Footer from "../../component/HomePage/footer/Footer";
import addmore from "../../assets/pics/add-square.png"
import ManageNavbar from "../../component/HotelProcessing/Nav/navbar";
import BottomButton from "./bottomButtons/bottom";

const array = [
        {
            button: "Property name",
            content: "Trust apartments",
        },

        {
            button: "Location",
            content: "Jabi",
        },

        {
            button: "Date created ",
            content: "23/4/23",
        },

        {
            button: "Total no. of rooms",
            content: "22",
        },

        {
            button: "Total no. of bookings",
            content: "10",
        },

        {
            button: "Verification status",
            content: "Pending",
        },
]

const pageLinks = [
    "/manageListings",
    "/Reservations",
    "/Payment",
    "/Reviews",
    "/boostProperty",
    "/travelAds",
];
  
function ManageListings() {
    const links = [
        { label: 'Manage Listings', href: '/manageListings' },
        { label: 'Reservations', href: '/reservations' },
        { label: 'Payment', href: '/payment' },
        { label: 'Reviews & Messages', href: '/reviews' },
        { label: 'Boost my property', href: '/boostProperty' },
        { label: 'Travel Ads', href: '/travelAds' },
    ];

    return (
        <div>
            <Navbar />

            <div className="content">
                <ManageNavbar links={links} activeLink="ManageListings"  />

                <div className="managelistingmaincontainer">
                    <div className="manageListingContainer">
                        <div className="managelistingcontaiercontent">
                            <div className="row">
                                {array.map((item, index) => (
                                    <div className="manageTableColumn"  key={index}>
                                        <button>
                                            {item.button}
                                        </button>

                                        <div className="manageTableContent">
                                            <p>
                                                {item.content}
                                            </p>

                                            <p>
                                                {item.content}
                                            </p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <br />
                    </div>

                    <a href="/aboutProperty">
                        <div className="addmore">
                            <img src={addmore} alt="" className="addimage"/>
                            Add more properties to the list
                        </div>
                    </a>
                </div>
                

                <BottomButton currentPage="/manageListings" pageLinks={pageLinks} />
            </div>
            <Footer />
        </div>
    );
}

export default ManageListings;