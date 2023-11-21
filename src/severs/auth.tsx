import { googleLogout } from "@react-oauth/google";
import axios, { AxiosError } from "axios";

export const baseURL = "http://localhost:8000/";
// export const baseURL = "https://apithetravelhunters.com/";

export const setAxiosAuthToken = (token: any) => {
  if (typeof token !== "undefined" && token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const setToken = (token: any) => {
  localStorage.setItem("token", token);
};

export const logOut = () => {
  googleLogout();
  setAxiosAuthToken(null);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const setUser = (user: {
  pk: string;
  username: string;
  email: string;
  phone_number: string;
  profile_picture: string;
  first_name: string;
  last_name: string;
  means_of_id: string;
  date_of_birth: string;
  country: string;
  state: string;
  city: string;
  address: string;
  nationality: string;
  currency: string;
  is_verified: boolean;
  is_active: boolean;
  is_hotel_manager: boolean;
  is_staff: boolean;
}) => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
};

export const userData = async () => {
  try {
    const userToken = localStorage.getItem("token") || "";
    console.log(userToken);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${userToken}`,
      },
    };
    const response = await axios.get(`${baseURL}auth/userdetail/`, config);
    const user = {
      pk: response.data.pk,
      username: response.data.username,
      email: response.data.email,
      phone_number: response.data.phone_number,
      profile_picture: response.data.profile_picture,
      first_name: response.data.first_name,
      last_name: response.data.last_name,
      means_of_id: response.data.means_of_id,
      date_of_birth: response.data.date_of_birth,
      country: response.data.country,
      state: response.data.state,
      city: response.data.city,
      address: response.data.address,
      nationality: response.data.nationality,
      currency: response.data.currency,
      is_verified: response.data.is_verified,
      is_active: response.data.is_active,
      is_hotel_manager: response.data.is_hotel_manager,
      is_staff: response.data.is_staff,
    };
    await setUser(user);
  } catch (error) {
    // Handle error
    console.log("Error fetching user data:", error);
  }
};

export const loginUser = async (email: string, password: string) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ email, password });

  // Send POST request to the login endpoint
  try {
    const response = await axios.post(`${baseURL}auth/login/`, body, config);
    return response.data.key;
  } catch (error) {
    console.log(error);
    throw new Error("Error logging in"); // Handle the error appropriately
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
      password,
    });

    await axios.post(`${baseURL}auth/reg/`, body, config);
    // const authResponse = await loginUser(email, password);
    // const auth_token = authResponse;
    // setAxiosAuthToken(auth_token);
    // await userData();
    // setToken(auth_token);
    return { success: true };
  } catch (error) {
    // Handle any errors that occur during registration or login
    logOut();

    // Typecast 'error' as AxiosError to access response properties
    const axiosError = error as AxiosError;

    // Check if 'response' property exists
    if (axiosError.response) {
      // 'response' exists, use 'message' property if available
      // const errorMessage =
      //   axiosError.response.data.message || "Registration and login failed";

      // Reject the promise with the error message
      return { success: false };
    } else {
      // 'response' does not exist, handle the error differently or provide a default message
      const errorMessage =
        "An unexpected error occurred during registration and login";

      // Reject the promise with the error message
      return { success: false, error: errorMessage };
    }
  }
};

export const facebookLogin = (accessToken: any) => {
  axios
    .post(`${baseURL}auth/facebook/`, {
      auth_token: accessToken,
    })
    .then((response) => {
      // Handle the response from the backend
      console.log(response.data);
      // Additional logic or actions based on the response
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};

export const googleLogin = (accessToken: any) => {
  axios
    .post(`${baseURL}auth/google/`, {
      auth_token: accessToken,
    })
    .then(async (response) => {
      const auth_token = response.data.key;
      setAxiosAuthToken(auth_token);
      setToken(await auth_token);
      userData();
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};
