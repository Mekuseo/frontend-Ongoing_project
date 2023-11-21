import ".//sideMap.css";
import DealsSwitch from "../../SwitchDeals/switchDeals";
import Card from "../Cards/card";

const SideMap = () => {
    return(
        <>
            <div className="sideMapDeals"></div>

            <div className="mainDeals">
                <DealsSwitch />
                <a href="/dealsDetails">
                    <Card />
                </a>
                <Card />
                <Card />

                <div className="dealsWontLast">
                    <div className="textBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                            <path d="M20.5008 7.75C12.5341 7.75 6.05078 14.2333 6.05078 22.2C6.05078 30.1667 12.5341 36.6667 20.5008 36.6667C28.4674 36.6667 34.9508 30.1833 34.9508 22.2167C34.9508 14.25 28.4674 7.75 20.5008 7.75ZM21.7508 21.6667C21.7508 22.35 21.1841 22.9167 20.5008 22.9167C19.8174 22.9167 19.2508 22.35 19.2508 21.6667V13.3333C19.2508 12.65 19.8174 12.0833 20.5008 12.0833C21.1841 12.0833 21.7508 12.65 21.7508 13.3333V21.6667Z" fill="#6E9E76"/>
                            <path d="M25.3177 5.75065H15.6844C15.0177 5.75065 14.4844 5.21732 14.4844 4.55065C14.4844 3.88398 15.0177 3.33398 15.6844 3.33398H25.3177C25.9844 3.33398 26.5177 3.86732 26.5177 4.53398C26.5177 5.20065 25.9844 5.75065 25.3177 5.75065Z" fill="#6E9E76"/>
                        </svg>
                        <p>
                            <span>
                                Good deals won’t last long. 
                            </span>
                            Book soon so you dont miss out 
                        </p>
                    </div>
                </div>

                <Card />
                <Card />
                <Card />

                <div className="dealsWontLast">
                    <div className="textBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                            <path d="M20.5008 7.75C12.5341 7.75 6.05078 14.2333 6.05078 22.2C6.05078 30.1667 12.5341 36.6667 20.5008 36.6667C28.4674 36.6667 34.9508 30.1833 34.9508 22.2167C34.9508 14.25 28.4674 7.75 20.5008 7.75ZM21.7508 21.6667C21.7508 22.35 21.1841 22.9167 20.5008 22.9167C19.8174 22.9167 19.2508 22.35 19.2508 21.6667V13.3333C19.2508 12.65 19.8174 12.0833 20.5008 12.0833C21.1841 12.0833 21.7508 12.65 21.7508 13.3333V21.6667Z" fill="#6E9E76"/>
                            <path d="M25.3177 5.75065H15.6844C15.0177 5.75065 14.4844 5.21732 14.4844 4.55065C14.4844 3.88398 15.0177 3.33398 15.6844 3.33398H25.3177C25.9844 3.33398 26.5177 3.86732 26.5177 4.53398C26.5177 5.20065 25.9844 5.75065 25.3177 5.75065Z" fill="#6E9E76"/>
                        </svg>
                        <p>
                            <span>
                                Good deals won’t last long. 
                            </span>
                            Book soon so you dont miss out 
                        </p>
                    </div>
                </div>

                <Card />
                <Card />
            </div>
        </>
    );
};

export default SideMap;