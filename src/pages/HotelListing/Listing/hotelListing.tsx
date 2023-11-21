// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import "../../../component/HotelListing/HotelList/hotelListing.css";
import HotelHead from "../../../component/HotelListing/HotelList/hotelHead/hotelHead";
import TopSearchBar from "../../hotelDetail/components/topSearchBar/TopSearchBar";
import HotelListing from "../../../component/HotelListing/HotelList/hotelListing";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../severs/auth";
import { UserContextProvider } from "../../../utils/UserData";
import { useLocation } from "react-router-dom";

const HotelList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [hotels, setHotels] = useState<
    { location_city: string; hotel_name: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hotelSearchString, setHotelSearchString] = useState(
    queryParams.get("searchString") || ""
  );
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const checkInParam = queryParams.get("CheckIn");
  const parsedCheckinDate = checkInParam ? new Date(checkInParam) : null;
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const checkOutParam = queryParams.get("CheckOut");
  const parsedCheckOutDate = checkOutParam ? new Date(checkOutParam) : null;
  const numberOfRoomsParam = queryParams.get("numberOfRoom");
  const [roomCount, setRoomCount] = useState(
    numberOfRoomsParam ? parseInt(numberOfRoomsParam) : 1
  );
  const adultCountParam = queryParams.get("adultCount");
  const [adultCount, setAdultCount] = useState(
    adultCountParam ? parseInt(adultCountParam) : 1
  );
  const childCountParam = queryParams.get("childCount");
  const [childCount, setChildCount] = useState(
    childCountParam ? parseInt(childCountParam) : 1
  );
  const numberOfNightParam = queryParams.get("numberOfNight");
  const [numberOfNight, setNumberOfNight] = useState(
    numberOfNightParam ? parseInt(numberOfNightParam) : 1
  );

  // onload
  useEffect(() => {
    console.log(parsedCheckinDate);

    if (!isNaN(parsedCheckinDate!.getTime())) {
      setCheckinDate(parsedCheckinDate);
    }
    if (!isNaN(parsedCheckOutDate!.getTime())) {
      setCheckoutDate(parsedCheckOutDate);
    }

    getHotels();
  }, [hotelSearchString]);

  const getHotels = async () => {
    try {
      setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(`${baseURL}hotels/hotels/`, config);
      const responseData = response.data;

      // Initialize searchResults as an empty array
      const searchResults: SetStateAction<
        {
          location_country: string;
          location_state: string;
          location_city: string;
          hotel_name: string;
        }[]
      > = [];

      responseData.forEach(
        (hotel: {
          location_country: string;
          location_state: string;
          location_city: string;
          hotel_name: string;
        }) => {
          const countyNameMatch =
            hotel.location_country &&
            hotel.location_country
              .toLowerCase()
              .includes(hotelSearchString.toLowerCase());

          const stateNameMatch =
            hotel.location_state &&
            hotel.location_state
              .toLowerCase()
              .includes(hotelSearchString.toLowerCase());

          const cityNameMatch =
            hotel.location_city &&
            hotel.location_city
              .toLowerCase()
              .includes(hotelSearchString.toLowerCase());

          const hotelNameMatch =
            hotel.hotel_name &&
            hotel.hotel_name
              .toLowerCase()
              .includes(hotelSearchString.toLowerCase());

          if (hotelNameMatch) {
            // Add hotels in the same city to the searchResults
            const hotelsInSameCity = responseData.filter(
              (otherHotel: { location_city: string }) =>
                otherHotel.location_city &&
                otherHotel.location_city.toLowerCase() ===
                  hotel.location_city.toLowerCase()
            );

            searchResults.push(...hotelsInSameCity); // Add hotels from the same city
            searchResults.push(hotel); // Add the current hotel
          } else if (countyNameMatch || cityNameMatch || stateNameMatch) {
            searchResults.push(hotel);
          }
        }
      );

      // Sort the searchResults
      searchResults.sort((a, b) => {
        if (a.hotel_name.toLowerCase() === hotelSearchString.toLowerCase())
          return -1;
        if (b.hotel_name.toLowerCase() === hotelSearchString.toLowerCase())
          return 1;
        return 0;
      });

      // Remove duplicates from searchResults (if any)
      const uniqueSearchResults = [...new Set(searchResults)];

      // Set hotels to the sorted and deduplicated searchResults
      setHotels(uniqueSearchResults);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching hotels data:", error);
    }
  };

  return (
    <>
      <UserContextProvider>
        <Navbar />
        <div className="listContent">
          <TopSearchBar
            hotelSearch={hotelSearchString}
            setHotelSearchString={setHotelSearchString}
            setCheckinDate={setCheckinDate}
            checkinDate={checkinDate}
            setCheckoutDate={setCheckoutDate}
            checkoutDate={checkoutDate}
            setRoomCount={setRoomCount}
            roomCount={roomCount}
            setAdultCount={setAdultCount}
            setChildCount={setChildCount}
            adultCount={adultCount}
            childCount={childCount}
            setNumberOfNight={setNumberOfNight}
            numberOfNight={numberOfNight}
          />
          <HotelHead />
          <HotelListing
            isLoading={isLoading}
            hotels={hotels}
            hotelsCity={hotelSearchString}
            roomCount={roomCount}
            hotelSearchString={hotelSearchString}
            checkinDate={checkinDate}
            checkoutDate={checkoutDate}
            adultCount={adultCount}
            childCount={childCount}
            numberOfNight={numberOfNight}
          />
        </div>
        <Footer />
      </UserContextProvider>
    </>
  );
};

export default HotelList;
