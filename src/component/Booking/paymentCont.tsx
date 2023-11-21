import image from "../../assets/pics/signature.png"
import "./bookingConfirmation.css"

const PaymentBooking = () =>{
    return(
        <>
            <div className="paymentcontainerbookingconfirmation">
                <div className="row">
                    <div className="paymentcolbookingconfirm">
                        <p>
                            Total price( incl. of tax & fees)
                        </p>

                        <h1>
                            50,000.00
                        </h1>
                    </div>

                    <div className="paymentcolbookingconfirm">
                        <h5>
                            Fully paid.
                        </h5>
                    </div>


                    <div className="paymentcolbookingconfirm">
                        <img src={image} alt="" />

                        <h2>
                            Booked and Payable by
                        </h2>

                        <h6>
                            Thetravelhunters Grey Vertigo Services Ltd.  49, B9 Street, Citec Estate, F.C.T, Abuja 90001
                        </h6>
                    </div>
                </div>

                <p className="paymenttextbookingconfirm">
                    Payment will be sent to your account by wire transfer.
                    <br />
                    Please refer to Thetravelhunters extranet to obtain necessary details, and manage your property. The Order for this purchase has been sent to your property and acknowledged by you.
                </p>
            </div>
        </>
    );
};

export default PaymentBooking;