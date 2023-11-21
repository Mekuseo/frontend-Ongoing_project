// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import MapModalSlider from './mapModalSlideshow';
import transcorpHiltonImage from '../../../../assets/pics/transcorp hilton.jpeg';
import image2 from '../../../../assets/pics/8bebc3fc-jpg.jpg.webp';
import image3 from '../../../../assets/pics/Bellagio-Hotel-Casino-Las-Vegas.jpg.webp';

const StarIcon: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18" 
      viewBox="0 0 35 30"
      fill="gold"
      stroke="gold"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    <path d="M18.1064 2.1685L20.7504 7.49181C21.1066 8.22801 22.0629 8.92646 22.8693 9.07747L27.6508 9.87031C30.7073 10.38 31.4198 12.6075 29.2259 14.835L25.4944 18.5915C24.8756 19.2144 24.5194 20.4414 24.7256 21.3286L25.7945 25.9724C26.6383 29.6345 24.6881 31.0692 21.4817 29.1437L17.0001 26.4632C16.1938 25.9724 14.8437 25.9724 14.0374 26.4632L9.55584 29.1437C6.34938 31.0503 4.39924 29.6345 5.24305 25.9724L6.31187 21.3286C6.48064 20.4225 6.12436 19.1955 5.50557 18.5726L1.77406 14.8161C-0.419837 12.6075 0.292712 10.38 3.34917 9.85143L8.13075 9.0586C8.93705 8.92646 9.89337 8.20914 10.2496 7.47293L12.8936 2.14962C14.3374 -0.719679 16.6626 -0.719679 18.1064 2.1685Z" />
    </svg>
);

  
const CardDetails = [
    {
        name: "Transcorp Hilton Hotel",
        review: "Very good",
        rating: "9.1",
        star: <><StarIcon/> <StarIcon/> <StarIcon/></>,
        amount: "20,000",
        discount: "30,000",
        images: [
            transcorpHiltonImage,
            image2,
            image3,
        ],
    },
    {
        name: "Radisson Blue Hotel",
        review: "Good",
        rating: "9.3",
        star: <><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></>,
        amount: "70,000",
        discount: "95,000",
        images: [
            transcorpHiltonImage,
            image2,
            image3,
        ],
    },
    {
        name: "Inn Hotel",
        review: "Very good",
        rating: "3.5",
        star: <><StarIcon/> <StarIcon/></>,
        amount: "90,000",
        discount: "120,000",
        images: [
            transcorpHiltonImage,
            image2,
            image3,
        ],
    },
    {
        name: "Oriental Hotel",
        review: "Amazing",
        rating: "10",
        star: <><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></>,
        amount: "120,000",
        discount: "210,000",
        images: [
            transcorpHiltonImage,
            image2,
            image3,
        ],
    },
];

const ModalMapContent = () => {
    return (
        <div>
            {CardDetails.map((option, index) => (
                <div key={index}>
                    <div className="mapmodalcard">
                        <p className="mapmodalcardhotelname">{option.name}</p>
                        <div className="row">
                            <div className="mapmodalcol">
                                <MapModalSlider images={option.images} text={option.text} />
                            </div>

                            <div className="mapmodalcol">
                                <div className="mapmodalratingdiv">
                                    <p>{option.review}</p>
                                    <span>
                                        {option.rating}
                                    </span>
                                </div>
                                
                                <div className="mapmodalstars">
                                    {option.star}
                                </div>
                                
                                <p className="mapmodalamount">₦ {option.amount}</p>
                                <p className="mapmodalcanceledamount">₦ {option.discount}</p>
                                <p className="mapmodaltaxes">Includes taxes and fees</p>
                            </div>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    );
};

export default ModalMapContent;
