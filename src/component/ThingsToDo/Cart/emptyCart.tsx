import { useState } from "react";
import image from "../../../assets/pics/Illustration/Bored.png";
import ToggleCartEvents from "./toggleCartEvents";

const ToDoEmptyCart: React.FC = () => {
    const [showContentEmpty, setShowContentEmpty] = useState(true);
  
    const toggleCartContent = () => {
        setShowContentEmpty(!showContentEmpty);
    };
    return(
        <>
            {showContentEmpty ? (
                <div className="toDoEmptyBackground">
                    <div className="toDoEmptyCartContainer">
                        <img src={image} alt="" />
                        <div className="toDoEmptyCartContent">
                            <h1>
                                Your cart is empty
                            </h1>

                            <p>
                                Add events, and places to your cart in things to do
                            </p>
                            
                            <button onClick={toggleCartContent}>
                                Find things to do

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.086 11.1564L12.136 7.20643C11.9538 7.01783 11.853 6.76523 11.8553 6.50303C11.8576 6.24083 11.9628 5.99002 12.1482 5.80461C12.3336 5.6192 12.5844 5.51403 12.8466 5.51176C13.1088 5.50948 13.3614 5.61027 13.55 5.79243L19.207 11.4494C19.3002 11.5421 19.3741 11.6522 19.4246 11.7736C19.4751 11.8949 19.501 12.025 19.501 12.1564C19.501 12.2878 19.4751 12.418 19.4246 12.5393C19.3741 12.6606 19.3002 12.7708 19.207 12.8634L13.55 18.5204C13.4578 18.6159 13.3474 18.6921 13.2254 18.7445C13.1034 18.7969 12.9722 18.8245 12.8394 18.8257C12.7066 18.8268 12.5749 18.8015 12.452 18.7513C12.3291 18.701 12.2175 18.6267 12.1236 18.5328C12.0297 18.4389 11.9555 18.3273 11.9052 18.2044C11.8549 18.0815 11.8296 17.9498 11.8307 17.817C11.8319 17.6842 11.8595 17.553 11.9119 17.431C11.9643 17.309 12.0405 17.1987 12.136 17.1064L16.086 13.1564H6.5C6.23478 13.1564 5.98043 13.0511 5.79289 12.8635C5.60536 12.676 5.5 12.4216 5.5 12.1564C5.5 11.8912 5.60536 11.6369 5.79289 11.4493C5.98043 11.2618 6.23478 11.1564 6.5 11.1564H16.086Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (

            <div className="toDoEmptyBackground">
                <ToggleCartEvents />
            </div>
            )}
        </>
    );
};

export default ToDoEmptyCart;