/* eslint-disable @typescript-eslint/no-unused-vars */
import StarRating from "./stars";
import map from "../../../assets/pics/MapsicleMap.png"
import PlaceSlider from "./slider";

interface AboutPlaceProps {
    selectedCategory: string;
    placeName: string;
    uploadedImageSrc: string;
    highlightValue: string;
    houseNo: string;
    streetName: string;
    cityName: string;
    stateName: string;
    countryName: string;
    houseNumber: string;
    startHour: number;
    startMinute: number;
    startAMPM: string;
    endHour: number;
    endMinute: number;
    endAMPM: string;
    formattedStartTime: string;
    formattedEndTime: string;
    name: string;
    entryFee: number | undefined;
    onNameChange: (name: string) => void;
    onEntryFeeChange: (entryFee: number | undefined) => void;
}

const PlaceModal: React.FC<AboutPlaceProps> = ({
    selectedCategory,
    placeName,
    uploadedImageSrc,
    highlightValue,
    streetName,
    cityName,
    stateName,
    countryName,
    formattedStartTime,
    formattedEndTime,
    name,
    entryFee,
    houseNumber,
  }) => {
    return(
        <>
            <div className="placeModalTextCont">
                <div className="topText">
                    <div>
                        <h1>{placeName}</h1>
                    </div>

                    <div className="stars">
                        <StarRating />
                    </div>
                    
                </div>

                <div className="placeModalImage">
                    <img src={uploadedImageSrc} alt="" />
                    <div className="bottomTextRight">Maps</div>

                    <p>
                        {selectedCategory}
                    </p>
                </div>

                <div className="row">
                    <div className="placeModalCol">
                        <div className="placeModalAboutCont">
                            <h1 className="abooutPlaceModal">
                                About
                            </h1>

                            <p>
                                {highlightValue}
                            </p>

                            <h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
                                    <path d="M11.1667 11.8794V17.9997C11.1667 18.318 11.3071 18.6232 11.5572 18.8483C11.8072 19.0733 12.1464 19.1998 12.5 19.1998C12.8536 19.1998 13.1928 19.0733 13.4428 18.8483C13.6929 18.6232 13.8333 18.318 13.8333 17.9997V11.8794C15.4521 11.582 16.8904 10.7542 17.8696 9.55656C18.8488 8.35889 19.299 6.87666 19.1329 5.39722C18.9669 3.91778 18.1964 2.54654 16.9709 1.54933C15.7454 0.552124 14.1521 0 12.5 0C10.8479 0 9.25464 0.552124 8.02913 1.54933C6.80361 2.54654 6.03314 3.91778 5.86709 5.39722C5.70104 6.87666 6.15124 8.35889 7.1304 9.55656C8.10957 10.7542 9.54794 11.582 11.1667 11.8794ZM12.5 2.3989C13.2911 2.3989 14.0645 2.61005 14.7223 3.00564C15.3801 3.40123 15.8928 3.9635 16.1955 4.62135C16.4983 5.2792 16.5775 6.00308 16.4231 6.70144C16.2688 7.39981 15.8878 8.0413 15.3284 8.5448C14.769 9.04829 14.0563 9.39118 13.2804 9.53009C12.5044 9.669 11.7002 9.59771 10.9693 9.32522C10.2384 9.05273 9.61365 8.59128 9.17412 7.99924C8.7346 7.40719 8.5 6.71113 8.5 5.99908C8.5 5.04425 8.92143 4.12853 9.67157 3.45337C10.4217 2.7782 11.4391 2.3989 12.5 2.3989ZM18.1133 14.9035C17.9382 14.8704 17.7576 14.8687 17.5818 14.8984C17.4059 14.9282 17.2383 14.9888 17.0885 15.0768C16.9387 15.1649 16.8096 15.2786 16.7086 15.4115C16.6077 15.5445 16.5368 15.694 16.5 15.8516C16.4632 16.0092 16.4613 16.1717 16.4943 16.33C16.5274 16.4883 16.5947 16.6391 16.6925 16.774C16.7903 16.9088 16.9167 17.025 17.0644 17.1159C17.2121 17.2068 17.3782 17.2706 17.5533 17.3037C20.58 17.8437 21.8333 18.8157 21.8333 19.1998C21.8333 19.8958 18.5667 21.5999 12.5 21.5999C6.43333 21.5999 3.16667 19.8958 3.16667 19.1998C3.16667 18.8157 4.42 17.8437 7.44667 17.2557C7.62176 17.2226 7.7879 17.1588 7.9356 17.0679C8.08329 16.977 8.20965 16.8608 8.30747 16.726C8.40528 16.5911 8.47262 16.4403 8.50566 16.282C8.53869 16.1237 8.53677 15.9612 8.5 15.8036C8.46323 15.646 8.39233 15.4965 8.29136 15.3635C8.19038 15.2306 8.0613 15.1169 7.91149 15.0288C7.76167 14.9408 7.59406 14.8802 7.41823 14.8504C7.24239 14.8207 7.06176 14.8224 6.88667 14.8555C2.83333 15.6956 0.5 17.2677 0.5 19.1998C0.5 22.3559 6.54 24 12.5 24C18.46 24 24.5 22.3559 24.5 19.1998C24.5 17.2677 22.1667 15.6956 18.1133 14.9035Z" fill="#263238"/>
                                </svg>

                                No. {houseNumber}, {streetName}, {cityName}, {stateName}, {countryName}.
                            </h3>
                            
                            <div className="placeModalMoreInfo topModalMoreSpace">
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M6.5 11.375C3.535 11.375 1.125 8.965 1.125 6C1.125 3.035 3.535 0.625 6.5 0.625C9.465 0.625 11.875 3.035 11.875 6C11.875 8.965 9.465 11.375 6.5 11.375ZM6.5 1.375C3.95 1.375 1.875 3.45 1.875 6C1.875 8.55 3.95 10.625 6.5 10.625C9.05 10.625 11.125 8.55 11.125 6C11.125 3.45 9.05 1.375 6.5 1.375Z" fill="#292D32"/>
                                        <path d="M8.35482 7.96586C8.28982 7.96586 8.22482 7.95086 8.16482 7.91086L6.61482 6.98586C6.22982 6.75586 5.94482 6.25086 5.94482 5.80586V3.75586C5.94482 3.55086 6.11482 3.38086 6.31982 3.38086C6.52482 3.38086 6.69482 3.55086 6.69482 3.75586V5.80586C6.69482 5.98586 6.84482 6.25086 6.99982 6.34086L8.54982 7.26586C8.72982 7.37086 8.78482 7.60086 8.67982 7.78086C8.60482 7.90086 8.47982 7.96586 8.35482 7.96586Z" fill="#292D32"/>
                                    </svg>
                                    &nbsp;
                                    Opens

                                    <br/>
                                    {formattedStartTime} WAT
                                </p>

                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M6.5 11.375C3.535 11.375 1.125 8.965 1.125 6C1.125 3.035 3.535 0.625 6.5 0.625C9.465 0.625 11.875 3.035 11.875 6C11.875 8.965 9.465 11.375 6.5 11.375ZM6.5 1.375C3.95 1.375 1.875 3.45 1.875 6C1.875 8.55 3.95 10.625 6.5 10.625C9.05 10.625 11.125 8.55 11.125 6C11.125 3.45 9.05 1.375 6.5 1.375Z" fill="#292D32"/>
                                        <path d="M8.35482 7.96586C8.28982 7.96586 8.22482 7.95086 8.16482 7.91086L6.61482 6.98586C6.22982 6.75586 5.94482 6.25086 5.94482 5.80586V3.75586C5.94482 3.55086 6.11482 3.38086 6.31982 3.38086C6.52482 3.38086 6.69482 3.55086 6.69482 3.75586V5.80586C6.69482 5.98586 6.84482 6.25086 6.99982 6.34086L8.54982 7.26586C8.72982 7.37086 8.78482 7.60086 8.67982 7.78086C8.60482 7.90086 8.47982 7.96586 8.35482 7.96586Z" fill="#292D32"/>
                                    </svg>
                                    &nbsp;
                                    Closes

                                    <br/>
                                    {formattedEndTime} WAT
                                </p>
                            </div>

                            <div className="placeModalMoreInfo">
                                <p>
                                    By: {name}
                                </p>

                                <p>
                                    Entry fee: {entryFee ? `N${entryFee.toFixed(2)}` : 'N/A'}
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="placeModalCol">
                        <img src={map} alt="" />
                    </div>
                </div>
            </div>

            <div className="sliderPlace">
                <PlaceSlider/>
            </div>
        </>
    );
};

export default PlaceModal;