import Navbar from "../../component/HomePage/header/header";
import Footer from "../../component/HomePage/footer/Footer";
import PaymentInfo from "../../component/HotelProcessing/Payment/PaymentInfo";
import Earnings from "../../component/HotelProcessing/Payment/Earning";
import History from "../../component/HotelProcessing/Payment/History";
import Invoice from "../../component/HotelProcessing/Payment/Invoice";
import ManageNavbar from "../../component/HotelProcessing/Nav/navbar";
import { ChangeEvent, useState } from "react";
import BottomButton from "./bottomButtons/bottom";

const pageLinks = [
    "/manageListings",
    "/Reservations",
    "/Payment",
    "/reviews",
    "/boostProperty",
    "/travelAds",
];

const Payment: React.FC = () => {
    const links = [
        { label: 'Manage Listings', href: '/manageListings' },
        { label: 'Reservations', href: '/reservations' },
        { label: 'Payment', href: '/payment' },
        { label: 'Reviews & Messages', href: '/reviews' },
        { label: 'Boost my property', href: '/boostProperty' },
        { label: 'Travel Ads', href: '/travelAds' },
    ];

    const [accountNumber, setAccountNumber] = useState<string>("");
    const [bankName, setBankName] = useState<string>("");
    const [accountName, setAccountName] = useState<string>("");
    const [swiftCode, setSwiftCode] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [billingName, setBillingName] = useState<string>("");
    const [billingEmail, setBillingEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

    const handleAccountNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAccountNumber(e.target.value);
    };

    const handleBankNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBankName(e.target.value);
    };

    const handleAccountNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAccountName(e.target.value);
    };

    const handleSwiftCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSwiftCode(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleBillingNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBillingName(e.target.value);
    };

    const handleBillingEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBillingEmail(e.target.value);
    };
    
    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleCountryCodeChange = (code: string) => {
        setSelectedCountryCode(code);
    };
    return (
        <div>
            <Navbar />
            <div className="content">
                <ManageNavbar links={links} activeLink="Payment"  />

                <PaymentInfo
                    accountNumber={accountNumber}
                    bankName={bankName}
                    accountName={accountName}
                    swiftCode={swiftCode}
                    email={email}
                    billingName={billingName}
                    billingEmail={billingEmail}
                    phoneNumber={phoneNumber}
                    selectedCountryCode={selectedCountryCode}
                    onAccountNumberChange={handleAccountNumberChange}
                    onBankNameChange={handleBankNameChange}
                    onAccountNameChange={handleAccountNameChange}
                    onSwiftCodeChange={handleSwiftCodeChange}
                    onEmailChange={handleEmailChange}
                    onBillingNameChange={handleBillingNameChange}
                    onBillingEmailChange={handleBillingEmailChange}
                    onPhoneNumberChange={handlePhoneNumberChange}
                    onCountryCodeChange={handleCountryCodeChange}
                />

                <Earnings />

                <History />

                <Invoice />

                <BottomButton currentPage="/Payment" pageLinks={pageLinks} />
                
            </div>
            <Footer />
        </div>
    );
}

export default Payment;