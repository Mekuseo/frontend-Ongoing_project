import LoginBody from "../../../component/Auth/login/Login";
import Navbar from "../../../component/HomePage/header/header";
import Footer from "../../../component/HomePage/footer/Footer";
import { UserContextProvider } from "../../../utils/UserData";

const Login = () => {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <LoginBody />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default Login;
