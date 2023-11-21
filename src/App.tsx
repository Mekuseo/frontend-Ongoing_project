import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/homePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/Auth/signUp/SignUp";
import Login from "./pages/Auth/login/Login";
import OwnersProfile from "./pages/HotelListing/owensprofile/OwnersProfile";
import Amenities from "./pages/HotelListing/AddToHotelList/amenities/Amenities";
import PropertyType from "./pages/HotelListing/AddToHotelList/propertyType/PropertyType";
import Commision from "./pages/HotelListing/AddToHotelList/paymentCommission/Commision";
import PropertyPolicy from "./pages/HotelListing/AddToHotelList/propertyPolicy/propertyPolicy";
import LandingPage from "./pages/HotelListing/landingPage/LandingPage";
import Photos from "./pages/HotelListing/AddToHotelList/Photos";
import Contract from "./pages/HotelListing/AddToHotelList/Contract/Contract";
// import Testlog from "./component/Auth/signUp/test";
import HotelDetail from "./pages/hotelDetail/HotelDetail";
import BoostProperty from "./pages/hotelBooking/BoostProperty";
import ManageListings from "./pages/hotelBooking/ManageListings";
import Payment from "./pages/hotelBooking/Payment";
import PostStay from "./pages/hotelBooking/PostStay";
import ReviewAndMessages from "./pages/hotelBooking/ReviewsAndMessages";
import ReviewAndMessages2 from "./pages/hotelBooking/ReviewAndMessages2";
import AboutProperty from "./pages/HotelListing/AddToHotelList/aboutProperty";
import Deals from "./pages/LateNightDeals/deals";
import DealsDetails from "./pages/LateNightDeals/details";
import DealsHome from "./pages/LateNightDeals/dealsHome";
import HotelListingBookingConfirm from "./pages/HotelListing/bookings/bookingConfirmation";
import DealsConfirmation from "./pages/LateNightDeals/bookingConfirmationDeals/confirmation";
import BookingSummary from "./pages/bookingSummary/BookingSummary";
import HotelPage from "./pages/hotelPage/HotelPage";
import HotelList from "./pages/HotelListing/Listing/hotelListing";

import ThingsToDoCart from "./pages/ThingsToDo/cart";
import ToDoHome from "./pages/ThingsToDo/toDoHome";
import EventReservation from "./pages/ThingsToDo/eventReservation";
import ManageEvent from "./pages/ThingsToDo/manageEvent";
import ReservationConfirmed from "./pages/ThingsToDo/reservationConfirmation";
// import hotel
import CreateEvent from "./pages/createNew/createEvent";
import CreatePlace from "./pages/createNew/createPlace";
import PlaceMarketing from "./pages/createNew/marketing";
import PlaceListing from "./pages/createNew/placeListing";
import Reservations from "./pages/ManageProperty/Reservations/Reservations";
import TalkToUs from "./pages/hotelBooking/TalkToUs";
import TravelAds from "./pages/ManageProperty/Advertisement/TravelAd/TravelAd";
import ProfilePage from "./pages/profilePage/ProfilePage";
import MarketingFinancial from "./pages/marketingFinancials/MarketingFinancials";
import ManageBooking from "./pages/manageBooking/ManageBooking";
import ManageBookingReviews from "./pages/manageBooking/components/ManageBookingReviews";
import Destinations from "./pages/destinations/Destinations";
import AboutUs from "./pages/aboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import HotelMain from "./pages/hotelBooking/hotelMain";
import SuperAdmin from "./pages/superAdmin/Routes/SuperAdmin";
import BookingConfirmation from "./pages/Bookings/BookingConfirmation";
// import ButtonNavBar from "./pages/HotelListing/AddToHotelList/reusables/ButtonNavBar";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stay" element={<LandingPage />} />
      <Route path="/ownersProfile" element={<OwnersProfile />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/propertyType" element={<PropertyType />} />
      <Route path="/propertyPolicy" element={<PropertyPolicy />} />
      <Route path="/commision" element={<Commision />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="/aboutProperty" element={<AboutProperty />} />
      <Route path="/boostProperty" element={<BoostProperty />} />
      <Route path="/manageListings" element={<ManageListings />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/postStay" element={<PostStay />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reviews" element={<ReviewAndMessages />} />
      <Route path="/amina" element={<ReviewAndMessages2 />} />
      <Route path="/talkToUs" element={<TalkToUs />} />
      <Route path="/travelAds" element={<TravelAds />} />
      <Route path="/dealsHome" element={<DealsHome />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/dealsDetails" element={<DealsDetails />} />
      <Route
        path="/listingConfirmation"
        element={<HotelListingBookingConfirm />}
      />
      <Route path="/dealsConfirmation" element={<DealsConfirmation />} />
      <Route path="/toDoCart" element={<ThingsToDoCart />} />
      <Route path="/toDoHome" element={<ToDoHome />} />
      <Route path="/eventReservation" element={<EventReservation />} />
      <Route path="/manageEvent" element={<ManageEvent />} />
      <Route path="/eventConfirmation" element={<ReservationConfirmed />} />
      <Route path="/createEvent" element={<CreateEvent />} />
      <Route path="/placeMarketing" element={<PlaceMarketing />} />
      <Route path="/managePlaceListing" element={<PlaceListing />} />
      <Route path="/addPlace" element={<CreatePlace />} />
      <Route path="/hotelList/:hotelSearch" element={<HotelList />} />
      <Route path="/hotelList" element={<HotelList />} />
      <Route path="/HotelDetail/:hotelId" element={<HotelDetail />} />
      <Route path="/HotelDetail/" element={<HotelDetail />} />
      <Route path="/HotelBooking" element={<HotelMain />} />
      <Route path="/bookingSummary" element={<BookingSummary />} />
      <Route path="/hotelPage" element={<HotelPage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      <Route path="/marketingFinancial" element={<MarketingFinancial />} />
      <Route path="/ManageBooking" element={<ManageBooking />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/super-admin/*" element={<SuperAdmin />} />
      <Route path="/destination-abuja" element={<Destinations />} />
      <Route
        path="/manage-booking-reviews"
        element={<ManageBookingReviews />}
      />

      <Route path="/bookingConfirmation" element={<BookingConfirmation />} />
    </Routes>
  </BrowserRouter>
);

export default App;
