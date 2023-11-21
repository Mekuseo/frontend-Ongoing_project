import { faCalendar, faClock, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M10.6667 11.8794V17.9997C10.6667 18.318 10.8071 18.6232 11.0572 18.8483C11.3072 19.0733 11.6464 19.1998 12 19.1998C12.3536 19.1998 12.6928 19.0733 12.9428 18.8483C13.1929 18.6232 13.3333 18.318 13.3333 17.9997V11.8794C14.9521 11.582 16.3904 10.7542 17.3696 9.55656C18.3488 8.35889 18.799 6.87666 18.6329 5.39722C18.4669 3.91778 17.6964 2.54654 16.4709 1.54933C15.2454 0.552124 13.6521 0 12 0C10.3479 0 8.75464 0.552124 7.52913 1.54933C6.30361 2.54654 5.53314 3.91778 5.36709 5.39722C5.20104 6.87666 5.65124 8.35889 6.6304 9.55656C7.60957 10.7542 9.04794 11.582 10.6667 11.8794ZM12 2.3989C12.7911 2.3989 13.5645 2.61005 14.2223 3.00564C14.8801 3.40123 15.3928 3.9635 15.6955 4.62135C15.9983 5.2792 16.0775 6.00308 15.9231 6.70144C15.7688 7.39981 15.3878 8.0413 14.8284 8.5448C14.269 9.04829 13.5563 9.39118 12.7804 9.53009C12.0044 9.669 11.2002 9.59771 10.4693 9.32522C9.73836 9.05273 9.11365 8.59128 8.67412 7.99924C8.2346 7.40719 8 6.71113 8 5.99908C8 5.04425 8.42143 4.12853 9.17157 3.45337C9.92172 2.7782 10.9391 2.3989 12 2.3989ZM17.6133 14.9035C17.4382 14.8704 17.2576 14.8687 17.0818 14.8984C16.9059 14.9282 16.7383 14.9888 16.5885 15.0768C16.4387 15.1649 16.3096 15.2786 16.2086 15.4115C16.1077 15.5445 16.0368 15.694 16 15.8516C15.9632 16.0092 15.9613 16.1717 15.9943 16.33C16.0274 16.4883 16.0947 16.6391 16.1925 16.774C16.2903 16.9088 16.4167 17.025 16.5644 17.1159C16.7121 17.2068 16.8782 17.2706 17.0533 17.3037C20.08 17.8437 21.3333 18.8157 21.3333 19.1998C21.3333 19.8958 18.0667 21.5999 12 21.5999C5.93333 21.5999 2.66667 19.8958 2.66667 19.1998C2.66667 18.8157 3.92 17.8437 6.94667 17.2557C7.12176 17.2226 7.2879 17.1588 7.4356 17.0679C7.58329 16.977 7.70965 16.8608 7.80747 16.726C7.90528 16.5911 7.97262 16.4403 8.00566 16.282C8.03869 16.1237 8.03677 15.9612 8 15.8036C7.96323 15.646 7.89233 15.4965 7.79136 15.3635C7.69038 15.2306 7.5613 15.1169 7.41149 15.0288C7.26167 14.9408 7.09406 14.8802 6.91823 14.8504C6.74239 14.8207 6.56176 14.8224 6.38667 14.8555C2.33333 15.6956 0 17.2677 0 19.1998C0 22.3559 6.04 24 12 24C17.96 24 24 22.3559 24 19.1998C24 17.2677 21.6667 15.6956 17.6133 14.9035Z"
      fill="#263238"
    />
  </svg>
);

const signal = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <g clip-path="url(#clip0_6143_1718)">
      <path
        d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z"
        stroke="#263238"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 4.5H6.005"
        stroke="#263238"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 6H6V8H6.5"
        stroke="#263238"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_6143_1718">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EventDetailSummary = () => {
  const [count, setCount] = useState(2)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <Box
      sx={{
        border: "1px solid #263238",
        borderRadius: "12px",
        boxShadow:
          "2px 4px 4px 0px rgba(0, 0, 0, 0.25), -2px -2px 4px 0px rgba(0, 0, 0, 0.25)",
        position: "relative",
        marginTop: "16px",
        marginLeft:"28px",
        padding: "0 8px",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "36px",
          background: "#263238",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          position: "absolute",
          top: "-18px",
          left: "103px",
        }}
      >
        SUMMARY
      </div>

      <div
        style={{
          marginTop: "42px",
          display: "flex",
          alignItems: "center",
          gap: "5pxF",
          marginLeft: "11px",
          marginBottom: "24px",
        }}
      >
        {location}
        <p style={{ fontFamily: "volkhov, sans-serif", fontSize: "15px" }}>
          No. 52, Zarebi crescent, Ikeja , Lagos.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <FontAwesomeIcon icon={faClock} />
          <p>
            Time: <span style={{ fontWeight: "600" }}>10:00am WAT</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            fontFamily: "raleway, sans-serif",
            fontSize: "15px",
          }}
        >
          <FontAwesomeIcon icon={faClock} />
          <p>
            Duration: <span style={{ fontWeight: "600" }}>2 hours</span>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          fontFamily: "raleway, sans-serif",
          fontSize: "15px",
          marginBottom: "44px",
        }}
      >
        <FontAwesomeIcon icon={faCalendar} />
        <p>
          Date: <span style={{ fontWeight: "600" }}>Thurs 9th Sept, 2023</span>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          border: "2px solid #263238",
          borderRadius: "5px",
          borderRight:"none"
        }}
      >
        <div
          style={{
            padding: "8px 0 4px 12px",
            fontSize: "15px",
            color:"#263238"
          }}
        >
          <p style={{ fontWeight: "600" }}>Participants</p>
          <p style={{ fontWeight: "600", display:"flex", alignItems:"end", gap:"3px" }}>
            N5,000{" "}
            <span style={{ fontWeight: "400", fontSize: "10px" }}>
              per person
            </span>{" "}
            {signal}
          </p>
        </div>
        <Button
          style={{
            background: "#263238",
            height: "53px",
            fontSize: "40px",
            color: "white",
            borderRadius: "0",
          }}
          onClick={handleDecrement}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <div
          style={{
            fontFamily: "volkhov, sans-serif",
            fontSize: "30px",
            fontWeight: "700",
            padding: "0 10px",
          }}
        >
          {count}
        </div>
        <Button
          style={{
            background: "#263238",
            height: "53px",
            fontSize: "40px",
            color: "white",
            borderRadius: "0 3px 3px 0",
            paddingRight:"0"
          }}
          onClick={handleIncrement}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>

      <Button
        style={{
          fontFamily: "volkhov, sans-serif",
          fontSize: "15px",
          fontWeight: "700",
          display:"flex",
          justifyContent:"space-around",
          margin:"0 auto 45px ",
          padding:"13px 15px",
          background:"#CF0007",
          color:"white",
          filter:"drop-shadow(-5px 20px 20px rgba(0, 0, 0, 0.05))",
          borderRadius:"5px",
          gap:"5px"
        }}
      >
        <p>N10,000.00</p>
        <p>|</p>
        <p style={{textTransform:"capitalize"}}>Make Reservation </p>
      </Button>
    </Box>
  );
};

export default EventDetailSummary;
