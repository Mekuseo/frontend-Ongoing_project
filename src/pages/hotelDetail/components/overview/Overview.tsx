import { Dispatch, SetStateAction } from "react";
import "./Overview.css";
import Hero from "./hero/Hero";
import HotelInfo from "./hotelInfo/HotelInfo";
import HotelSearchBar from "./hotelSearchBar/HotelSearchBar";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

interface OverviewProps {
  hotel: any[];
  hotelName: string;
  mainPictures: string[];
  exteriorImages: ImageObject[];
  interiorsImages: ImageObject[];
  propertyDescription: string;
  propertyLocation: string;
  number_of_room_type: number;
  setCheckinDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkinDate: Date | null;
  setCheckoutDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setRoomCount: Dispatch<SetStateAction<number>>;
  roomCount: number;
  setAdultCount: Dispatch<SetStateAction<number>>;
  setChildCount: Dispatch<SetStateAction<number>>;
  adultCount: number;
  childCount: number;
  checkedAmenities: {
    amenity: string;
    subItem: string;
    icon: string;
  }[];
  setNumberOfNight: Dispatch<SetStateAction<number>>;
  numberOfNight: number;
}

const Overview: React.FC<OverviewProps> = ({
  hotelName,
  mainPictures,
  exteriorImages,
  interiorsImages,
  propertyDescription,
  propertyLocation,
  number_of_room_type,
  setCheckinDate,
  checkinDate,
  setCheckoutDate,
  checkoutDate,
  setRoomCount,
  roomCount,
  setAdultCount,
  setChildCount,
  adultCount,
  childCount,
  checkedAmenities,
  setNumberOfNight,
  numberOfNight,
}) => {
  return (
    <div className="overview-body">
      <Hero
        mainPictures={mainPictures}
        exteriorImages={exteriorImages}
        interiorsImages={interiorsImages}
      />
      <HotelInfo
        hotelName={hotelName}
        propertyDescription={propertyDescription}
        propertyLocation={propertyLocation}
        number_of_room_type={number_of_room_type}
        checkedAmenities={checkedAmenities}
      />
      <HotelSearchBar
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
        numberOfNight={numberOfNight}
        setNumberOfNight={setNumberOfNight}
      />
    </div>
  );
};

export default Overview;
