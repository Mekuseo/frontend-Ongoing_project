import Filter from "./filterPanel/filter";
import HotelListBody from "./hotelListBody/hotelListBody";
import { CircularProgress } from "@mui/material";

interface HotelListingProps {
  isLoading: boolean;
  hotels: any[];
  hotelsCity: string;
  roomCount: number;
  hotelSearchString: string;
  checkinDate: Date | null;
  checkoutDate: Date | null;
  adultCount: number;
  childCount: number;
  numberOfNight: number;
}

const HotelListing: React.FC<HotelListingProps> = ({
  isLoading,
  hotels,
  hotelsCity,
  roomCount,
  hotelSearchString,
  checkinDate,
  checkoutDate,
  adultCount,
  childCount,
  numberOfNight,
}) => {
  return (
    <>
      <div className="hotelListBody">
        <Filter />
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />{" "}
          </div>
        ) : (
          <HotelListBody
            hotels={hotels}
            hotelsCity={hotelsCity}
            roomCount={roomCount}
            hotelSearchString={hotelSearchString}
            checkinDate={checkinDate}
            checkoutDate={checkoutDate}
            adultCount={adultCount}
            childCount={childCount}
            numberOfNight={numberOfNight}
          />
        )}
      </div>
    </>
  );
};

export default HotelListing;
