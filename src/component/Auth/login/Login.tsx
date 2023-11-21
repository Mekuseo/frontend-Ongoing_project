import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import {
  googleLogin,
  logOut,
  loginUser,
  setAxiosAuthToken,
  setToken,
  userData,
} from "../../../severs/auth";
import { useContext, useState } from "react";
import { UserContext } from "../../../utils/UserData";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import CircularProgress from "@mui/material/CircularProgress";
import ForgotPasswordModal from "../modals/forgotPassword/ForgotPasswordModal";

const LoginBody = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordLinkClick = () => {
    setShowForgotPasswordModal(true);
    // handleOpen();
  };

  //login logics
  const [email, setUserEmail] = useState<any>();
  const [password, setUserPassword] = useState<any>();
  const userContext = useContext(UserContext);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setIsLoading(true);
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Validate password
    if (!password || password.length < 8) {
      setPasswordError("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    loginUser(email, password)
      .then((response) => {
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
        setTimeout(() => {
          navigate("/", { replace: true });
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        logOut();
        setIsLoading(false);
        window.alert("Login Error" + error);
      });
  };

  const handleSuccess = async (
    clientId: any | React.SetStateAction<null> | undefined
  ) => {
    setIsLoading(true);
    googleLogin(await clientId);

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
  };

  return (
    <div className="LoginBody">
      <div className="LoginSiB">
        {isLoading ? (
          <div className="form-box">
            {" "}
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="top-body">
              <div className="form-box">
                <div className="form-box-small">
                  <div className="top-login">
                    <h2>Log in to your account</h2>
                    <br />
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
                    <div className="p">
                      <small>Or login with your email</small>
                    </div>
                    <br />
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    id="Login"
                    className="input-group-longin"
                  >
                    <div
                      className="login-input-wrapper"
                      style={{ height: "70px" }}
                    >
                      <div className="input-icon">{mailIcon}</div>
                      <TextField
                        type="email"
                        placeholder="Email address"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        variant="outlined"
                        fullWidth
                        error={Boolean(emailError)}
                        helperText={emailError}
                        className="custom-textfield"
                        style={{ marginLeft: "25px" }}
                      />
                    </div>
                    <br />
                    <div className="login-input-wrapper">
                      <div className="input-icon">{lockIcon}</div>
                      <TextField
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setUserPassword(e.target.value)}
                        variant="outlined"
                        fullWidth
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        className="custom-textfield"
                        style={{ marginLeft: "25px" }}
                      />
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        className="suffix"
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                    <div className="forgot-btn">
                      <a href="#/" onClick={handleForgotPasswordLinkClick}>
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="submit-btn"
                      id="submit-btn"
                    >
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="SignBodyLeft">
          <div className="SignBodyLeftTop">
            <h1>Welcome Back Traveler!</h1>
            <p>
              Please log in to your TRAVEL HUNTER
              <br /> account with the given details to
              <br /> continue.
            </p>
          </div>
          <div className="SignBodyLeftDown">
            <p>New here? Sign Up</p>
            <button className="logInPage-SignUpBtn">
              <a href="/signup">Sign Up</a>
            </button>
          </div>
        </div>

        {showForgotPasswordModal && (
          <ForgotPasswordModal setOpen={setShowForgotPasswordModal} />
        )}
      </div>
    </div>
  );
};

export default LoginBody;

const mailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M22.667 27.3333H9.33366C5.33366 27.3333 2.66699 25.3333 2.66699 20.6666V11.3333C2.66699 6.66663 5.33366 4.66663 9.33366 4.66663H22.667C26.667 4.66663 29.3337 6.66663 29.3337 11.3333V20.6666C29.3337 25.3333 26.667 27.3333 22.667 27.3333Z"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6663 12L18.493 15.3333C17.1197 16.4267 14.8663 16.4267 13.493 15.3333L9.33301 12"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const lockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M8 13.3333V10.6666C8 6.25329 9.33333 2.66663 16 2.66663C22.6667 2.66663 24 6.25329 24 10.6666V13.3333"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.0003 24.6667C17.8413 24.6667 19.3337 23.1743 19.3337 21.3333C19.3337 19.4924 17.8413 18 16.0003 18C14.1594 18 12.667 19.4924 12.667 21.3333C12.667 23.1743 14.1594 24.6667 16.0003 24.6667Z"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.667 29.3334H9.33366C4.00033 29.3334 2.66699 28 2.66699 22.6667V20C2.66699 14.6667 4.00033 13.3334 9.33366 13.3334H22.667C28.0003 13.3334 29.3337 14.6667 29.3337 20V22.6667C29.3337 28 28.0003 29.3334 22.667 29.3334Z"
      stroke="#5F5E5E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
