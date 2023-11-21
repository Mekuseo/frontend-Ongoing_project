// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { SetStateAction, useState } from "react";
import map from "../../../assets/pics/MapsicleMapEvent.png"
import "./form.css"

interface EventProps {
    eventTitle: string;
    streetName: string;
    cityName: string;
    stateName: string;
    countryName: string;
    houseNumber: string;
    onEventTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHouseNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStreetNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCityNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStateNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCountryNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Event: React.FC<EventProps> = ({
    eventTitle,
    streetName,
    cityName,
    stateName,
    countryName,
    houseNumber,
    onEventTitleChange,
    onStreetNameChange,
    onCityNameChange,
    onStateNameChange,
    onCountryNameChange,
    onHouseNumberChange,
  }) => {
    const [isAdditionalContentVisible, setAdditionalContentVisible] = useState(false);
    return(
        <>
            <div className="eventCont">
                <form action="" className="formEvent">
                    <label htmlFor="">
                        Event Title
                    </label>

                    <input 
                    type="text" 
                    placeholder="Enter the name of your event"
                    value={eventTitle}
                    onChange={onEventTitleChange}
                    />
                </form>

                <p>
                    Location
                </p>

                <form action="" className="eventLocation">
                    <div className="input">
                        <label>Plot No.</label>
                        <br />
                        <input
                        type="number"
                        className="cityName"
                        placeholder="52"
                        value={houseNumber}
                        onChange={onHouseNumberChange}
                        />
                    </div>

                    <div className="input">
                        <label>
                            Street Name
                        </label>
                        <br/>
                        <input
                        type="text"
                        className="streetName"
                        placeholder="Kumasi Cresent"
                        value={streetName}
                        onChange={onStreetNameChange}
                        />
                    </div>
                    
                    <div className="input">
                        <label>
                            City
                        </label>
                        <br/>
                        <input
                        type="text"
                        className="cityName"
                        placeholder="Wuse"
                        value={cityName}
                        onChange={onCityNameChange}
                        />
                    </div>

                    <div className="input">
                        <label>
                            State
                        </label>
                        <br/>
                        <input
                        type="text"
                        className="countryName"
                        placeholder="F.C.T Abuja"
                        value={stateName}
                        onChange={onStateNameChange}
                        />
                    </div>

                    <div className="input">
                        <label>
                            Country
                        </label>
                        <br/>
                        <input 
                        type="text" 
                        className="countryName" 
                        placeholder="Nigeria"
                        value={countryName}
                        onChange={onCountryNameChange}
                        />
                    </div>
                </form>

                <div className="eventMapSelect" onClick={() => setAdditionalContentVisible(true)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M11.5556 12.8693V19.4997C11.5556 19.8445 11.7077 20.1751 11.9786 20.419C12.2495 20.6628 12.6169 20.7997 13 20.7997C13.3831 20.7997 13.7505 20.6628 14.0214 20.419C14.2923 20.1751 14.4444 19.8445 14.4444 19.4997V12.8693C16.1981 12.5472 17.7563 11.6504 18.8171 10.3529C19.8778 9.05547 20.3655 7.44972 20.1856 5.84699C20.0058 4.24427 19.1711 2.75875 17.8434 1.67844C16.5158 0.598135 14.7898 0 13 0C11.2102 0 9.4842 0.598135 8.15656 1.67844C6.82891 2.75875 5.99424 4.24427 5.81435 5.84699C5.63446 7.44972 6.12218 9.05547 7.18294 10.3529C8.2437 11.6504 9.80194 12.5472 11.5556 12.8693ZM13 2.59881C13.8571 2.59881 14.6949 2.82755 15.4075 3.25611C16.1201 3.68467 16.6755 4.2938 17.0035 5.00646C17.3315 5.71913 17.4173 6.50333 17.2501 7.2599C17.0829 8.01646 16.6702 8.71141 16.0641 9.25686C15.4581 9.80232 14.686 10.1738 13.8454 10.3243C13.0048 10.4748 12.1335 10.3975 11.3417 10.1023C10.5499 9.80712 9.87312 9.30722 9.39697 8.66584C8.92081 8.02446 8.66667 7.27039 8.66667 6.49901C8.66667 5.46461 9.12321 4.47258 9.93587 3.74115C10.7485 3.00972 11.8507 2.59881 13 2.59881ZM19.0811 16.1455C18.8914 16.1096 18.6957 16.1078 18.5053 16.14C18.3148 16.1722 18.1332 16.2379 17.9709 16.3332C17.8086 16.4286 17.6688 16.5518 17.5594 16.6958C17.45 16.8398 17.3732 17.0018 17.3333 17.1726C17.2935 17.3433 17.2914 17.5194 17.3272 17.6908C17.363 17.8623 17.4359 18.0257 17.5419 18.1718C17.6479 18.3179 17.7848 18.4437 17.9448 18.5422C18.1048 18.6406 18.2848 18.7098 18.4744 18.7456C21.7533 19.3307 23.1111 20.3837 23.1111 20.7997C23.1111 21.5538 19.5722 23.3999 13 23.3999C6.42778 23.3999 2.88889 21.5538 2.88889 20.7997C2.88889 20.3837 4.24667 19.3307 7.52556 18.6936C7.71524 18.6578 7.89523 18.5886 8.05523 18.4902C8.21523 18.3917 8.35213 18.2659 8.45809 18.1198C8.56405 17.9737 8.63701 17.8103 8.6728 17.6388C8.70858 17.4674 8.7065 17.2913 8.66667 17.1205C8.62683 16.9498 8.55003 16.7878 8.44063 16.6438C8.33124 16.4998 8.19141 16.3766 8.02911 16.2812C7.86681 16.1859 7.68524 16.1202 7.49474 16.088C7.30425 16.0558 7.10858 16.0576 6.91889 16.0935C2.52778 17.0035 0 18.7066 0 20.7997C0 24.2189 6.54333 26 13 26C19.4567 26 26 24.2189 26 20.7997C26 18.7066 23.4722 17.0035 19.0811 16.1455Z" fill="#263238"/>
                    </svg>
                    <p>
                        Select location on map
                    </p>
                </div>
        
                {isAdditionalContentVisible && (
                    <div className="eventMap">
                        <img src={map} alt="" />
                    </div>
                )}

            </div>
        </>
    );
};

export default Event;