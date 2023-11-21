import ".//bookingPayment.css"

const PaymentDeals = () => {
    return(
        <>
            <br /><br />
            <div className="bookingPaymentContainer">
                <br />
               <div className="totalPriceDeals">
                    Total price
                    <span>
                        (Incl. of tax)
                    </span> &nbsp; N5,200.00
               </div>
            </div>
        </>
    );
};

export default PaymentDeals;