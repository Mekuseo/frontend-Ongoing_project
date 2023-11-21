import "./upBody.css";
import { BiLock } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  googleLogin,
  loginUser,
  registerUser,
  setAxiosAuthToken,
  setToken,
  userData,
} from "../../../severs/auth";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FiMail } from "react-icons/fi";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContext } from "../../../utils/UserData";

const SignUpBody = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  //SignUp logics
  const [email, setUserEmail] = useState<any>();
  const [password, setPassword] = useState<string>();
  const userContext = useContext(UserContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password) {
      setIsLoading(false);
      window.alert("Error: Input password");
      return;
    }

    try {
      setIsLoading(true);

      const registerResult = await registerUser(email, password);

      if (registerResult.success) {
        await loginUser(email, password).then((response) => {
          const auth_token = response;
          setToken(auth_token);
          setAxiosAuthToken(auth_token);
          userData();
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            const user = JSON.parse(storedUser);
            const email = user.email;
            const username = user.username;
            const phoneNumber = user.phone_number;
            // Set the user data in the userContext
            userContext.setUser({
              email: email,
              username: username,
              phone_number: phoneNumber,
            });
          } else {
            console.log("No user data found in localStorage");
          }
        });
        setTimeout(() => {
          navigate("/", { replace: true });
          setIsLoading(false);
        }, 3000);
      } else {
        setIsLoading(false);
        navigate("/signUp");
      }
    } catch (error) {
      setIsLoading(false);
      window.alert(`Registration and login failed: `);
    }
  };

  const handleSuccess = async (
    clientId: any | React.SetStateAction<null> | undefined
  ) => {
    setIsLoading(true);
    await googleLogin(clientId);
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
  };

  // const handleError = () => {
  //   console.log("Login Failed");
  // };

  return (
    <div className="SignBody">
      <div className="SiB">
        <div className="SignBodyLeft">
          <div className="SignBodyLeftTop">
            <h1>Hello Traveler !</h1>
            <p>
              Please provide these information to <br /> register your account.
            </p>
          </div>
          <div className="SignBodyLeftDown">
            <p>Already have an account? Log In</p>
            <button className="SignBodyLeftDownBtn">
              <a href="/login">Log In</a>
            </button>
          </div>
        </div>
        <div className="SignBodyRight">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              {" "}
              <CircularProgress />
            </div>
          ) : (
            <>
              <div className="SignBodyRightBody">
                <div className="rightBodyHeader">
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
                  <br />

                  <p>Or register with your email</p>
                </div>
                <br />
                <div className="InINput">
                  <form
                    action=""
                    id="SignUp"
                    onSubmit={(event) => {
                      handleSubmit(event);
                    }}
                  >
                    <div className="signup-input-wrapper">
                      <div className="input-icon">
                        <FiMail size={30} />
                      </div>
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
                    <div className="signup-input-wrapper">
                      <div className="input-icon">
                        <BiLock size={30} />
                      </div>
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
                    <div>
                      <small className="signUp-terms">
                        By signing in or registering, you are deemed to have
                        agreed to the <br />
                        theTravel hunters{" "}
                        <a href="/terms-and-conditions">Terms and conditions</a>
                        and <a href="/privacy">Privacy Statement.</a>
                      </small>
                    </div>
                    <div className="flex">
                      <button
                        type="submit"
                        className="submit-btn"
                        id="submit-btn"
                        //   onClick={() => navigate("/signUp")}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpBody;
