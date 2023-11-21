// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSelector } from 'react-redux';
import React from 'react'; // Don't forget to import React
import "./DiscountOffer.css";
import { RootState } from '../../../../../../redux/reducers';

const DiscountOffer: React.FC = () => {
  const roomTypes = useSelector((state: RootState) => state.roomTypes);

  return (
    <div className="discountOffer-container">
      <h1>Offer a discount for your bookings.</h1>
      <div className="propertyType-Cards discount-contents">
        <p>Offer guests a deal. This helps you get increased bookings</p>
        <div className="discountOffer-input">
          <input type="number" placeholder="Input price" />
          <input type="text" placeholder="10% off" />
        </div>
        <p>Select the room types that this offer applies to.</p>
        <div className="discountOffer-checkbox">
          <div className="discountOffer-checkbox-flex">
          {roomTypes.map((roomType: string, index: number) => (
            <div key={index}>
              <input
                type="checkbox"
                name={`room-type-${index}`}
                id={`roomType-${index}`}
              />
              <label htmlFor={`roomType-${index}`}>{roomType}</label>
            </div>
          ))}
          </div>
          <div className="discountOffer-checkbox-flex">
            <input type="checkbox" name="room-type" id="roomType2" />
            <label htmlFor="roomType2">Room type 2</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
