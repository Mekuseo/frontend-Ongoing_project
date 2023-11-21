import { Box, Typography } from "@mui/material";

const location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M11.5556 12.8693V19.4997C11.5556 19.8445 11.7077 20.1751 11.9786 20.419C12.2495 20.6628 12.6169 20.7997 13 20.7997C13.3831 20.7997 13.7505 20.6628 14.0214 20.419C14.2923 20.1751 14.4444 19.8445 14.4444 19.4997V12.8693C16.1981 12.5472 17.7563 11.6504 18.8171 10.3529C19.8778 9.05547 20.3655 7.44972 20.1856 5.84699C20.0058 4.24427 19.1711 2.75875 17.8434 1.67844C16.5158 0.598135 14.7898 0 13 0C11.2102 0 9.4842 0.598135 8.15656 1.67844C6.82891 2.75875 5.99424 4.24427 5.81435 5.84699C5.63446 7.44972 6.12218 9.05547 7.18294 10.3529C8.2437 11.6504 9.80194 12.5472 11.5556 12.8693ZM13 2.59881C13.8571 2.59881 14.6949 2.82755 15.4075 3.25611C16.1201 3.68467 16.6755 4.2938 17.0035 5.00646C17.3315 5.71913 17.4173 6.50333 17.2501 7.2599C17.0829 8.01646 16.6702 8.71141 16.0641 9.25686C15.4581 9.80232 14.686 10.1738 13.8454 10.3243C13.0048 10.4748 12.1335 10.3975 11.3417 10.1023C10.5499 9.80712 9.87312 9.30722 9.39697 8.66584C8.92081 8.02446 8.66667 7.27039 8.66667 6.49901C8.66667 5.46461 9.12321 4.47258 9.93587 3.74115C10.7485 3.00972 11.8507 2.59881 13 2.59881ZM19.0811 16.1455C18.8914 16.1096 18.6957 16.1078 18.5053 16.14C18.3148 16.1722 18.1332 16.2379 17.9709 16.3332C17.8086 16.4286 17.6688 16.5518 17.5594 16.6958C17.45 16.8398 17.3732 17.0018 17.3333 17.1726C17.2935 17.3433 17.2914 17.5194 17.3272 17.6908C17.363 17.8623 17.4359 18.0257 17.5419 18.1718C17.6479 18.3179 17.7848 18.4437 17.9448 18.5422C18.1048 18.6406 18.2848 18.7098 18.4744 18.7456C21.7533 19.3307 23.1111 20.3837 23.1111 20.7997C23.1111 21.5538 19.5722 23.3999 13 23.3999C6.42778 23.3999 2.88889 21.5538 2.88889 20.7997C2.88889 20.3837 4.24667 19.3307 7.52556 18.6936C7.71524 18.6578 7.89523 18.5886 8.05523 18.4902C8.21523 18.3917 8.35213 18.2659 8.45809 18.1198C8.56405 17.9737 8.63701 17.8103 8.6728 17.6388C8.70858 17.4674 8.7065 17.2913 8.66667 17.1205C8.62683 16.9498 8.55003 16.7878 8.44063 16.6438C8.33124 16.4998 8.19141 16.3766 8.02911 16.2812C7.86681 16.1859 7.68524 16.1202 7.49474 16.088C7.30425 16.0558 7.10858 16.0576 6.91889 16.0935C2.52778 17.0035 0 18.7066 0 20.7997C0 24.2189 6.54333 26 13 26C19.4567 26 26 24.2189 26 20.7997C26 18.7066 23.4722 17.0035 19.0811 16.1455Z"
      fill="#263238"
    />
  </svg>
);

const ticket = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_6143_1724)">
      <path
        d="M15 5V7"
        stroke="#263238"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 11V13"
        stroke="#263238"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 17V19"
        stroke="#263238"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V10C20.4696 10 19.9609 10.2107 19.5858 10.5858C19.2107 10.9609 19 11.4696 19 12C19 12.5304 19.2107 13.0391 19.5858 13.4142C19.9609 13.7893 20.4696 14 21 14V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V14C3.53043 14 4.03914 13.7893 4.41421 13.4142C4.78929 13.0391 5 12.5304 5 12C5 11.4696 4.78929 10.9609 4.41421 10.5858C4.03914 10.2107 3.53043 10 3 10V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5Z"
        stroke="#263238"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_6143_1724">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HighlightActivity = () => {
  return (
    <Box>
      <Box>
        <Box>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            {location}
            <Typography
              style={{
                fontWeight: "600",
                fontFamily: "raleway, sans-serif",
                fontSize: "20px",
                color: "#263238",
                marginBottom: "14px",
              }}
            >
              Location <br />
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "volkhov, sans-serif",
                  color: "#CF0007",
                  textDecoration: "underline",
                }}
              >
                No. 52, Zarebi crescent, Ikeja , Lagos.{" "}
              </p>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginBottom: "34px",
            }}
          >
            {ticket}
            <Typography
              style={{
                fontFamily: "raleway, sans-serif",
                color: "#263238",
                fontSize: "20px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Ticket</span> N5000.00 per
              person
            </Typography>
          </div>
          <Box
            sx={{
              borderRadius: "10px",
              border: "1px solid #C5C4C4",
              marginTop: "34px",
              marginBottom: "28px",
              padding: "16px",
            }}
          >
            <Typography
              style={{
                fontFamily: "raleway, sans-serif",
                color: "#263238",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Highlight of activity
            </Typography>
            <Typography
              style={{
                fontFamily: "raleway, sans-serif",
                color: "#263238",
                fontSize: "15px",
              }}
            >
              SuperBrain is an exceptional workshop by Dr. Sachin (Certified
              Masters NLP Practitioner & a BRAIN expert). We use GAMES
              Activities and Exercises as program methodology to deliver your
              lessons/workshops.
            </Typography>
            <br />
            <Typography
              style={{
                fontFamily: "raleway, sans-serif",
                color: "#263238",
                fontSize: "15px",
              }}
            >
              To know more about us please visit our website www.superbhuman.in
              we are India’s fastest growing TRAINING & COACHING company.
              <br />
              With Doctorate in Experimental Training Dr. Sachin has touched and
              transformed 185000+ lives in the last decade.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HighlightActivity;
