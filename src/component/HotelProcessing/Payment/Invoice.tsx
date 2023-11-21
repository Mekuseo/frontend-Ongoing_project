import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import React from "react";

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    boxShadow: '0px 4px 22px 0px rgba(0, 0, 0, 0.70)',
    p: 4,
};

const Invoice = () => {
    const [opentwo, setOpentwo] = React.useState(false);
    const handleOpentwo = () => setOpentwo(true);
    const handleClosetwo = () => setOpentwo(false);
    return(
        <>
            <p className="headerTextPayment">
                Recent invoice from us
            </p>

            <p className="subheaderTextPayment">
                We invoice you for compensation due on confirmed bookings. See recent invoice here. 
            </p>

            <div className="paymentContainerThree">

                <div className="centb">
                    <button onClick={handleOpentwo} className="paymentButton">
                        <span className="amt">
                        ₦ 5,000.00 /
                        </span>
                        dated 25/09/2023

                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M5.28089 1.69336L5.28089 10.3146M5.28089 10.3146L8.9651 6.00399M5.28089 10.3146L1.59668 6.00399" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                

                <p className="notePayment">
                    Note: We send invoice on payment due on confirmed booking(s).
                </p>

                    <Modal
                        open={opentwo}
                        onClose={handleClosetwo}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                         <Box sx={style} className="ModalPayment">
                            <Typography variant="h6" component="h2">
                                <p className="headerModal">
                                    Recent invoice(s)
                                </p> 
                            </Typography>

                            <hr />

                            <Typography>
                                <div className="row">
                                    <div className="secondColumn">
                                        <p className="amount">
                                            ₦100,000.00
                                        </p>
                                    </div>

                                    <div className="secondColumn">
                                        <p className="date">
                                            Date
                                        </p>

                                        <p className="datesub">
                                            25/09/2023
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="secondColumn">
                                        <p className="amount">
                                            ₦50,000.00
                                        </p>
                                    </div>

                                    <div className="secondColumn">
                                        <p className="date">
                                            Date
                                        </p>

                                        <p className="datesub">
                                            25/09/2023
                                        </p>
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
            </div>
        </>
    );
};

export default Invoice;