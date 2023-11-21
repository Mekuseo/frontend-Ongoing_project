// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import '../topDes/topDes.css';
import "./toDoAbuja.css";
import image from "../../../assets/pics/happeninghomepage.png"

const cards1 = [
  {
    id: 1,
    name: "JUJU GARDENS",
    imageSrc: image,
    href: "#",
    nightLife: "Nightlife",
    fee: "₦ 3,000.00",
  },
  {
    id: 2,
    name: "jabi lake",
    imageSrc: image,
    href: "#",
    wildlife: "Wildlife park",
    fee: "Free",
  },
  {
    id: 3,
    name: "retro africa",
    imageSrc: image,
    href: "#",
    sports: "Sports",
    fee: "Free",
  },
  {
    id: 4,
    name: "bmt african garden",
    imageSrc: image,
    href: "#",
    wildlifepark: "Wildlife park",
    fee: "₦ 3,000.00",
  },
];

const ToDoCards: React.FC = () => {

  return (
    <>
        <div className="footerow">
        {cards1.map((cards, id) => (
            <div key={id} id={id} className="todoabujacardCols">
            <div className="todoabujahomecard">
                <a href={cards.href}>
                <img src={cards.imageSrc} alt="" />

                <div className="todoabujahomecardcontent">
                    <div className="nameoflocationdeetshome">
                    {cards.name}
                    </div>

                    <div className="durationdateslocationdeetshome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6 4.31244C5.6925 4.31244 5.4375 4.05744 5.4375 3.74994V1.49994C5.4375 1.19244 5.6925 0.937439 6 0.937439C6.3075 0.937439 6.5625 1.19244 6.5625 1.49994V3.74994C6.5625 4.05744 6.3075 4.31244 6 4.31244Z" fill="#263238"/>
                        <path d="M12 4.31244C11.6925 4.31244 11.4375 4.05744 11.4375 3.74994V1.49994C11.4375 1.19244 11.6925 0.937439 12 0.937439C12.3075 0.937439 12.5625 1.19244 12.5625 1.49994V3.74994C12.5625 4.05744 12.3075 4.31244 12 4.31244Z" fill="#263238"/>
                        <path d="M15.375 7.37988H2.625C2.3175 7.37988 2.0625 7.12488 2.0625 6.81738C2.0625 6.50988 2.3175 6.25488 2.625 6.25488H15.375C15.6825 6.25488 15.9375 6.50988 15.9375 6.81738C15.9375 7.12488 15.6825 7.37988 15.375 7.37988Z" fill="#263238"/>
                        <path d="M12 17.0624H6C3.2625 17.0624 1.6875 15.4874 1.6875 12.7499V6.37494C1.6875 3.63744 3.2625 2.06244 6 2.06244H12C14.7375 2.06244 16.3125 3.63744 16.3125 6.37494V12.7499C16.3125 15.4874 14.7375 17.0624 12 17.0624ZM6 3.18744C3.855 3.18744 2.8125 4.22994 2.8125 6.37494V12.7499C2.8125 14.8949 3.855 15.9374 6 15.9374H12C14.145 15.9374 15.1875 14.8949 15.1875 12.7499V6.37494C15.1875 4.22994 14.145 3.18744 12 3.18744H6Z" fill="#263238"/>
                        <path d="M6.375 10.8749C6.2775 10.8749 6.18 10.8525 6.09 10.815C6 10.7775 5.91751 10.7249 5.84251 10.6574C5.77501 10.5824 5.72249 10.5 5.68499 10.41C5.64749 10.32 5.625 10.2224 5.625 10.1249C5.625 9.92995 5.70751 9.73495 5.84251 9.59245C5.91751 9.52495 6 9.47244 6.09 9.43494C6.225 9.37494 6.37501 9.35994 6.52501 9.38994C6.57001 9.39744 6.615 9.41244 6.66 9.43494C6.705 9.44994 6.75 9.47246 6.795 9.50246C6.8325 9.53246 6.86999 9.56245 6.90749 9.59245C6.93749 9.62995 6.97499 9.66745 6.99749 9.70495C7.02749 9.74995 7.05001 9.79494 7.06501 9.83994C7.08751 9.88494 7.10251 9.92994 7.11001 9.97494C7.11751 10.0274 7.125 10.0724 7.125 10.1249C7.125 10.3199 7.04249 10.5149 6.90749 10.6574C6.76499 10.7924 6.57 10.8749 6.375 10.8749Z" fill="#263238"/>
                        <path d="M9 10.8749C8.805 10.8749 8.61001 10.7924 8.46751 10.6574C8.43751 10.6199 8.40751 10.5824 8.37751 10.5449C8.34751 10.4999 8.32499 10.4549 8.30999 10.4099C8.28749 10.3649 8.27249 10.3199 8.26499 10.2749C8.25749 10.2224 8.25 10.1774 8.25 10.1249C8.25 10.0274 8.27249 9.9299 8.30999 9.8399C8.34749 9.7499 8.40001 9.66741 8.46751 9.59241C8.67751 9.38241 9.015 9.31489 9.285 9.43489C9.3825 9.47239 9.45749 9.52491 9.53249 9.59241C9.66749 9.73491 9.75 9.9299 9.75 10.1249C9.75 10.1774 9.74251 10.2224 9.73501 10.2749C9.72751 10.3199 9.71251 10.3649 9.69001 10.4099C9.67501 10.4549 9.65249 10.4999 9.62249 10.5449C9.59249 10.5824 9.56249 10.6199 9.53249 10.6574C9.45749 10.7249 9.3825 10.7774 9.285 10.8149C9.195 10.8524 9.0975 10.8749 9 10.8749Z" fill="#263238"/>
                        <path d="M6.375 13.4999C6.2775 13.4999 6.18 13.4774 6.09 13.4399C6 13.4024 5.91751 13.3499 5.84251 13.2824C5.77501 13.2074 5.72249 13.1324 5.68499 13.0349C5.64749 12.9449 5.625 12.8474 5.625 12.7499C5.625 12.5549 5.70751 12.3599 5.84251 12.2174C5.91751 12.1499 6 12.0974 6.09 12.0599C6.3675 11.9399 6.69749 12.0074 6.90749 12.2174C6.93749 12.2549 6.97499 12.2924 6.99749 12.3299C7.02749 12.3749 7.05001 12.4199 7.06501 12.4649C7.08751 12.5099 7.10251 12.5549 7.11001 12.6074C7.11751 12.6524 7.125 12.7049 7.125 12.7499C7.125 12.9449 7.04249 13.1399 6.90749 13.2824C6.76499 13.4174 6.57 13.4999 6.375 13.4999Z" fill="#263238"/>
                    </svg>
                    Sat 19th Sept 2023 - 5:00pm WAT
                    </div>

                    <div className="traveltimeanddistancelocationdeetshome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.22222 6.92958V10.4998C6.22222 10.6854 6.30417 10.8635 6.45003 10.9948C6.59589 11.126 6.79372 11.1998 7 11.1998C7.20628 11.1998 7.40411 11.126 7.54997 10.9948C7.69583 10.8635 7.77778 10.6854 7.77778 10.4998V6.92958C8.72203 6.7561 9.56109 6.27323 10.1323 5.5746C10.7034 4.87596 10.9661 4.01132 10.8692 3.14832C10.7723 2.28531 10.3229 1.48542 9.60801 0.903715C8.89312 0.322011 7.96373 -6.10352e-05 7 -6.10352e-05C6.03627 -6.10352e-05 5.10688 0.322011 4.39199 0.903715C3.67711 1.48542 3.22767 2.28531 3.1308 3.14832C3.03394 4.01132 3.29656 4.87596 3.86774 5.5746C4.43892 6.27323 5.27797 6.7561 6.22222 6.92958ZM7 1.3993C7.46149 1.3993 7.91262 1.52247 8.29633 1.75323C8.68005 1.98399 8.97912 2.31198 9.15572 2.69573C9.33232 3.07947 9.37853 3.50173 9.2885 3.90911C9.19847 4.31649 8.97624 4.6907 8.64992 4.9844C8.32359 5.27811 7.90783 5.47813 7.45521 5.55916C7.00259 5.64019 6.53343 5.5986 6.10707 5.43965C5.68071 5.2807 5.31629 5.01152 5.0599 4.66616C4.80351 4.3208 4.66667 3.91477 4.66667 3.4994C4.66667 2.94242 4.9125 2.40825 5.35008 2.0144C5.78767 1.62056 6.38116 1.3993 7 1.3993ZM10.2744 8.69367C10.1723 8.67436 10.0669 8.67336 9.96437 8.6907C9.8618 8.70804 9.76402 8.7434 9.67663 8.79475C9.58924 8.84611 9.51395 8.91245 9.45504 8.99C9.39614 9.06754 9.35478 9.15477 9.33333 9.2467C9.31188 9.33863 9.31076 9.43346 9.33003 9.52578C9.3493 9.6181 9.38859 9.7061 9.44565 9.78475C9.5027 9.86341 9.57641 9.93118 9.66257 9.9842C9.74872 10.0372 9.84564 10.0744 9.94778 10.0937C11.7133 10.4088 12.4444 10.9758 12.4444 11.1998C12.4444 11.6058 10.5389 12.5999 7 12.5999C3.46111 12.5999 1.55556 11.6058 1.55556 11.1998C1.55556 10.9758 2.28667 10.4088 4.05222 10.0657C4.15436 10.0464 4.25128 10.0092 4.33743 9.95619C4.42359 9.90318 4.4973 9.83541 4.55436 9.75675C4.61141 9.6781 4.6507 9.5901 4.66997 9.49778C4.68924 9.40546 4.68812 9.31063 4.66667 9.2187C4.64522 9.12677 4.60386 9.03954 4.54496 8.96199C4.48605 8.88445 4.41076 8.81811 4.32337 8.76675C4.23598 8.7154 4.1382 8.68004 4.03563 8.6627C3.93306 8.64535 3.82769 8.64636 3.72556 8.66567C1.36111 9.15569 0 10.0727 0 11.1998C0 13.0409 3.52333 13.9999 7 13.9999C10.4767 13.9999 14 13.0409 14 11.1998C14 10.0727 12.6389 9.15569 10.2744 8.69367Z" fill="#263238"/>
                    </svg>
                    Wuse: 5 minus from to city centre
                    </div>

                    <div className="entryfreeperpersonlocationdeetshome">
                    {cards.fee} per person
                    </div>

                    <div className="todoabujacategorylocationdeetshome">
                    <span className="todoabujahomecircle"></span>
                    <p>
                        Neighbourhood Hangout 
                    </p>
                    </div>
                </div>
                
                </a>
            </div>
            </div>
        ))}
        </div>
    </>
  );
};

export default ToDoCards;