import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../component/HomePage/header/header";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  eventTitle: string;
  phoneNumber: string;
  message: string;
}

const ContactOrganizer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    eventTitle: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "1014px",
          height: "90vh",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "1px solid rgba(171, 170, 170, 0.58)",
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#263238",
            textAlign: "center",
            padding: "10px 0 10px 0",
          }}
        >
          Contact the Organizer
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            borderRadius: "5px",
            boxShadow:
              "-2px -4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "40px 41px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>First Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                inputProps={{
                  style: {
                    padding: "8px", // Adjust padding
                    fontSize: "14px", // Adjust font size
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Last Name/Surname</Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                inputProps={{
                  style: {
                    padding: "8px", // Adjust padding
                    fontSize: "14px", // Adjust font size
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Email Address</Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                inputProps={{
                  style: {
                    padding: "8px", // Adjust padding
                    fontSize: "14px", // Adjust font size
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Event Title</Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleChange}
                required
                inputProps={{
                  style: {
                    padding: "8px", // Adjust padding
                    fontSize: "14px", // Adjust font size
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Phone Number</Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                inputProps={{
                  style: {
                    padding: "8px", // Adjust padding
                    fontSize: "14px", // Adjust font size
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                variant="outlined"
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                style={{
                  border: "1px solid green",
                  borderRadius: "4px",
                  backgroundColor: "#F4F4F4",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="outlined"
                  color="success"
                  style={{ width: "150px" }}
                >
                  Send
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ marginLeft: "10px" }}
                  />
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default ContactOrganizer;
