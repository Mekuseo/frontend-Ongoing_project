import "./upBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogin, loginUser, registerUser } from "../../severs/auth";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const SignUpBody = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  //SignUp logics
  const [email, setUserEmail] = useState<any>();
  const [password, setPassword] = useState<string>();
  // const userContext = useContext(UserContext);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password == null) {
      window.alert("Error: Input password");
    } else {
      const registerNewUser = registerUser(email, password);
      if (registerNewUser) {
        console.log(registerNewUser);
        loginUser(email, password).then(() => {
          navigate("/", { replace: true });
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 5000);
      } else {
        navigate("/signUp");
      }
    }
  };
  const handleSuccess = async (
    clientId: any | React.SetStateAction<null> | undefined
  ) => {
    await googleLogin(clientId);
    navigate("/", { replace: true });
  };

  // const handleError = () => {
  //   console.log("Login Failed");
  // };

  return (
    <div className="SignBody">
      <div className="SiB">
        <div className="SignBodyLeft">
          <div className="SignBodyLeftTop">
            <h1>Hello Traveler!</h1>
            <p>
              Please provide these information to <br /> register your account.
            </p>
          </div>
          <div className="SignBodyLeftDown">
            <h3>Already have an account? Log In</h3>
            <div className="flex">
              <div
                className="SignBodyLeftDownBtn"
                onClick={() => navigate("/login")}
              >
                <span>Log IN</span>
              </div>
            </div>
          </div>
        </div>
        <div className="SignBodyRight">
          <div className="SignBodyRightBody">
            <h1>Register a new account</h1>
            <div className="flex">
              <GoogleOAuthProvider clientId="853220040767-g4tshp139meju2m4rpt2eh1f2n9lrm49.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    handleSuccess(credentialResponse.credential);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  useOneTap
                />
              </GoogleOAuthProvider>
            </div>
            {/* <div className="flex">
              <div className="img-login">
                <div className="round" id="google">
                  <img src={gl} alt="" />
                </div>

                <div className="round" id="face">
                  <img src={fb} alt="" />
                </div>
              </div>
            </div> */}
            <br />

            <h3>Or register with your email</h3>
            <br />
            <div className="InINput">
              <form
                action=""
                id="SignUp"
                onSubmit={(event) => {
                  handleSubmit(event);
                }}
              >
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} className="prefix" />
                  <input
                    type="email"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    onChange={(e) => {
                      return setUserEmail(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faLock} className="prefix" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password1"
                    name="password1"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="suffix"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <br />
                <div className="flex">
                  <button
                    type="submit"
                    className="submit-btn"
                    id="submit-btn"
                    //   onClick={() => navigate("/signUp")}
                  >
                    Sign Up
                  </button>
                  {/* <div
                    className="SignBodyLeftDownBtn2"

                    //   onClick={() => navigate("/signUp")}
                  >
                    <span>Sign Up</span>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBody;
