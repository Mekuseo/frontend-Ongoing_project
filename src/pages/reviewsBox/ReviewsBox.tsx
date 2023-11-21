import { useState } from "react";
import { Box, Divider, Typography, Button, Input } from "@mui/material";
import avatar from "../../assets/pics/Rectangle 952.svg";
import Navbar from "../../component/HomePage/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ResponseType = string;

const ReviewsBox = () => {
  const [reply, setReply] = useState("");
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const [replyMode, setReplyMode] = useState(false); // New state for reply mode

  const handleReply = () => {
    setReplyMode(true);
  };

  const handleSend = () => {
    if (reply.trim() !== "") {
      setResponses([...responses, reply]);
      setReply("");
      setReplyMode(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F4F4F4",
        width: "1080px",
        height: "100%",
        padding: "10px 0",
      }}
    >
      <Navbar />
      <div>
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "white",
            margin: "120px 120px 20px 50px",
            padding: "23px 51px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <img src={avatar} alt="avatar" />
          <Box>
            <Typography
              style={{
                color: "#263238",
                fontFamily: "raleway, sans-serif",
                fontSize: "30px",
                fontWeight: "600",
              }}
            >
              From Gbenga Daniel |{" "}
              <span style={{ color: "red" }}>A day in Lagos</span>
            </Typography>
            <Typography
              style={{
                color: "rgba(38, 50, 56, 0.80)",
                fontWeight: "600",
                fontSize: "25px",
                fontFamily: "raleway, sans-serif",
              }}
            >
              Absolutely worth all the money, I had a whole lot of fun
            </Typography>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "raleway, sans-serif",
                padding: "27px 0 20px 0",
                margin: "0 0 0 500px",
              }}
            >
              25th December, 2023
            </p>
            <Divider style={{ margin: "0" }} />
          </Box>
        </Box>
        {!replyMode && ( // Conditionally render reply button and response input
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleReply}
              style={{
                width: "193px",
                height: "50px",
                padding: "8px 12px",
                margin: "0 120px 25px",
                float: "right",
                borderRadius: "8px",
                background: "#263238",
                color: "white",
              }}
            >
              Reply
            </Button>
          </Box>
        )}
        {replyMode && ( // Conditionally render reply input and send button
          <div>
            <Input
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Your response..."
              style={{
                backgroundColor: "white",
                padding: "50px 100px",
                width: "85%",
                borderRadius: "10px",
                margin: "0 auto 20px 50px",
                border: "none",
                fontSize: "20px",
              }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              style={{
                width: "193px",
                height: "50px",
                padding: "8px 12px",
                margin: "0 420px 20px",
                borderRadius: "8px",
                background: "#263238",
                color: "white",
              }}
            >
              send{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ paddingLeft: "15px" }}
              />
            </Button>
          </div>
        )}
        {responses.length > 0 && ( // Conditionally render the response box
          <Box
            sx={{
              borderRadius: "20px",
              backgroundColor: "white",
              margin: "20px 50px",
              padding: "23px 51px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "rgba(38, 50, 56, 0.80)",
                  fontWeight: "600",
                  fontSize: "25px",
                  fontFamily: "raleway, sans-serif",
                  textAlign: "right",
                }}
              >
                {responses.map((response, index) => (
                  <div key={index}>{response}</div>
                ))}
              </Typography>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "raleway, sans-serif",
                  padding: "27px 0 20px 0",
                  margin: "0 0 0 500px",
                }}
              >
                25th December, 2023
              </p>
              <Divider style={{ margin: "0" }} />
            </Box>
          </Box>
        )}
      </div>
    </Box>
  );
};

export default ReviewsBox;
