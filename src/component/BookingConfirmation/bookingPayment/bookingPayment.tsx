import "./bookingPayment.css"

const BookingPayment = () => {
    return(
        <>
            <div className="bookingPaymentContainer">
               <div className="rates">
                   <p>
                        1 night X 1 room  
                        <span className="span">
                            : &nbsp; N5,000.00
                        </span>
                   </p>
                   <p>
                        6.5% VAT  
                        <span className="paymentamount">
                            : &nbsp; N5,3000.00
                        </span>
                   </p>
               </div>

               <div className="totalPrice">
                    Total Price &nbsp; N5,300.00
               </div>
            </div>
        </>
    );
};

export default BookingPayment;