import addmore from "../../../assets/pics/add-square.png"
import "../marketingListing.css"

const array = [
    {
        button: "NAME OF PLACE",
        content: "Dee event",
    },

    {
        button: "LOCATION",
        content: "Wuse Abuja",
    },

    {
        button: "DATE CREATED",
        content: "5th August, 2023",
    },
]
    
function ManagePlace() {
    return (
        <div>
            <div className="marketingPlaceListing">
                <br/>
                <br/>
                <div className="marketingHeader">
                    <a href="/placeMarketing">Marketing</a>
                    <a href="/managePlaceListing" className="marketingHeaderActive">Manage place listings</a>
                </div>
                <h1 className="marketingHeader">
                    Manage Place Listing
                </h1>

                <div className="placeListingContainer">
                    <div className="placeListingCont">
                        <div className="row">
                            {array.map((item, index) => (
                                <div className="placeTableColumn"  key={index}>
                                    <button>
                                        {item.button}
                                    </button>

                                    <div className="placeTableContent">
                                        <p>
                                            {item.content}
                                        </p>

                                        <p></p>

                                        <p></p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <a href="/addPlace">
                        <div className="addmore">
                            <img src={addmore} alt="" className="addimagePlace"/>
                            Add a place
                        </div>
                    </a>

                    <br/>
                </div>
            </div>
        </div>
    );
}

export default ManagePlace;