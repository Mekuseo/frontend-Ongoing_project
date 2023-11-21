import Switch from "@mui/material/Switch";
import Navbar from "../../component/HomePage/header/header";

const label = { inputProps: { "aria-label": "Color switch demo" } };

const Notifications = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontSize: "40px",
          fontFamily: "raleway, sans-serif",
          padding: "27px 0 13px 0",
          textAlign:"center",
          marginTop:"30px"
        }}
      >
        Notifications
      </h1>
      <div
        style={{
          width: "1014px",
          borderRadius: "10px",
          border: "1px solid rgba(171, 170, 170, 0.58)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "26px 0 0 62px",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              Get reminders about your bookings account
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "300px",
                gap: "20px",
                fontFamily: "volkhov, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Email</p>
              </div>
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Phone</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "26px 0 0 62px",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              Get reminders on guide products and services
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "300px",
                gap: "20px",
                fontFamily: "volkhov, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Email</p>
              </div>
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Phone</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "26px 0 0 62px",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              Get reminders on monthly tips for your events{" "}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "300px",
                gap: "20px",
                fontFamily: "volkhov, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Email</p>
              </div>
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Phone</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "26px 0 0 62px",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              Get reminders on reviews from attendees
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "300px",
                gap: "20px",
                fontFamily: "volkhov, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Email</p>
              </div>
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Phone</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "26px 0 0 62px",
              justifyContent: "space-between",
              marginBottom:"20px"
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              Get reminders on mesages from attendees
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "300px",
                gap: "20px",
                fontFamily: "volkhov, sans-serif",
                fontSize: "20px",
                color: "#263238",
              }}
            >
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Email</p>
              </div>
              <div>
                <Switch {...label} defaultChecked color="success" />
                <p>Phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
