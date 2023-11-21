import Footer from "../../../component/HomePage/footer/Footer";
import Navbar from "../../../component/HomePage/header/header";
import SignUpBody from "../../../component/Auth/signUp/SignUpBody";
import { UserContextProvider } from "../../../utils/UserData";

const SignUp = () => {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <SignUpBody />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default SignUp;
