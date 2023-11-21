import "../../pages/hotelBooking/booking.css"

const Travel = () =>{
    return (
        <>
            <div className="boostPropContainer">
                <p>
                    Get your property in front of more travellers with a boost by creating sort orders for your property to appear. 
                    You fill empty rooms and pay us when booking has been confirmed.   
                </p>

                <div className="dateCont">
                    <div className="date-inline">
                        <input placeholder="Start Date" type="date" id="date" />

                        <input placeholder="Stop Date" type="date" id="date" />
                    </div>
                </div>
   

                <form className="boost-inline" action="/">
                    <label className="containerAmenities">
                        Appear on the top hotel search for a particular day.
                        <input type="checkbox" />
                        <span className="boostTick"></span>
                    </label>

                    <input type="text" id="" placeholder="Input date(s)" name="" />
                    <label className="percentage">1%</label>
                </form>

                <form className="boost-inline" action="/">
                    <label className="containerAmenities">
                        Appear on the top hotel search for a class/star rating. 
                        <input type="checkbox" />
                        <span className="boostTick"></span>
                    </label>

                    <div className="ratings">
                        <input type="radio" name="ratings" value="5" id="5" /><label htmlFor="5">☆</label>
                        <input type="radio" name="ratings" value="4" id="4" /><label htmlFor="4">☆</label>
                        <input type="radio" name="ratings" value="3" id="3" /><label htmlFor="3">☆</label>
                        <input type="radio" name="ratings" value="2" id="2" /><label htmlFor="2">☆</label>
                        <input type="radio" name="ratings" value="1" id="1" /><label htmlFor="1">☆</label>
                    </div>

                    <label className="percentage">1%</label>
                </form>

                <form className="boost-inline" action="/">
                    <label className="containerAmenities">
                        Appear on the top hotel search when hotel is searched based on the price. 
                        <input type="checkbox" />
                        <span className="boostTick"></span>
                    </label>

                    <input type="text" id="" placeholder="Input price" name="" />
                    <label className="percentage">1%</label>
                </form>

                <form className="boost-inline" action="/">
                    <label className="containerAmenities">
                        Appear on the top hotel search for a time duration.
                        <input type="checkbox" />
                        <span className="boostTick"></span>
                    </label>

                    <input type="text" id="" placeholder="Start time" name="" className="double"/>
                    <input type="text" id="" placeholder="Stop time" name="" className="doubleTwo"/>


                    <label className="percentage">1%</label>
                </form>

                <form className="boost-inline" action="/">
                    <label className="containerAmenities">
                        Appear based on location being searched from.
                        <input type="checkbox" />
                        <span className="boostTick"></span>
                    </label>

                    <input type="text" id="" placeholder="Input city" name="" className="double"/>
                    <input type="text" id="" placeholder="Input city" name="" className="doubleTwo"/>


                    <label className="percentage">1%</label>
                </form>

                <button className="createButton">
                    Create
                </button>
                
            </div>
        </>
    );
};

export default Travel;