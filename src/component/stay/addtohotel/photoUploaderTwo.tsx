import React, { useRef } from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { faFile, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { baseURL } from "../../../severs/auth";

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 0 80px" }}>
      <Box sx={{ width: "70%", m: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

interface uploadFileTwoProps {
  interiorsImages: ImageObject[];
  setInteriorsImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
}

function FileUploaderTwo({
  interiorsImages = [],
  setInteriorsImages,
}: uploadFileTwoProps) {
  const imageContainerRef = useRef(null);

  const handleInteriorImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("hotel_image", file);
      });
      formData.set("boundary", "your-custom-boundary");

      try {
        const userToken = localStorage.getItem("token") || "";
        const response = await fetch(`${baseURL}hotels/images/`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Token ${userToken}`,
          },
        });

        if (response.ok) {
          const responseData = await response.json();

          setInteriorsImages((prevImages) => {
            if (Array.isArray(prevImages)) {
              return [
                ...prevImages,
                { caption: "", imgPath: responseData.hotel_image, progress: 0 },
              ];
            }
            // Handle the case where prevImages is not an array (maybe set a default value)
            return [
              { caption: "", imgPath: responseData.hotel_image, progress: 0 },
            ];
          });
        } else {
          const responseBody = await response.text();
          console.error("Image upload failed! Server response:", responseBody);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;

    setInteriorsImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = { ...updatedImages[index], caption: value };
      return updatedImages;
    });

    console.log(interiorsImages);
  };

  const handleDeleteImage = (index: number) => {
    setInteriorsImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleInteriorImage}
        style={{ display: "none" }}
        id="upload-button-two"
      />
      <Grid container spacing={2} style={{ position: "relative", marginTop: "-35px", marginLeft: "-10px" }}>
        <Grid item xs={6}>
          <div
             style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "12px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
              border: "2px solid #c5c4c4",
              background: "#fff",
              boxShadow:
                "10px 10px 20px 0px rgba(191, 191, 191, 0.3), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              width: "100%",
              height: "100%",
              padding: "40px",
            }}
          >
            <label htmlFor="upload-button-two">
              <Button
                variant="outlined"
                component="span"
                sx={{
                  color: "rgba(38, 50, 56, 0.75)",
                  width: "100%",
                  height: "100%",
                  fontSize: "25px",
                  padding: "25px 50px",
                  borderRadius: "10px",
                  border: "1px solid #C4C4C4",
                  background: "#fff",
                  boxShadow:
                    "0px 2px 4px 0px rgba(196, 196, 196, 0.50)",
                  fontFamily: "Volkhov",
                  textTransform: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ color: "#6E9E76", marginRight: "10px" }}
                />{" "}
                Upload
              </Button>
            </label>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "12px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
              border: "2px solid #c5c4c4",
              background: "#fff",
              boxShadow:
                "10px 10px 20px 0px rgba(191, 191, 191, 0.3), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              width: "100%",
              height: "100%",
              overflow: "scroll",
            }}
            ref={imageContainerRef}
          >
            {interiorsImages.map((image, index) => (
              <div
                key={index}
                style={{
                  height: "255px",
                  width: "100%",
                  marginBottom: "70px",
                  position: "relative",
                }}
              >
                <>
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      overflow: "hidden",
                      width: "90%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      textAlign: "center",
                      marginRight: "20px",
                      position: "relative",
                    }}
                    src={image.imgPath}
                    alt={image.caption}
                  />
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{
                      color: "#ee1b45",
                      position: "absolute",
                      right: "50px",
                      top: "10px",
                      cursor: "pointer",
                    }}
                    size="2x"
                    onClick={() => handleDeleteImage(index)}
                  />
                  <input
                    type="text"
                    placeholder="Enter a name "
                    value={interiorsImages[index].caption}
                    onChange={(event) => handleNameChange(event, index)}
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      width: "70%",
                      margin: "10px 0 0 80px",
                      textAlign: "center",
                      borderRadius: "5px",
                      border: "1px solid green",
                    }}
                  />
                  <LinearProgressWithLabel value={image.progress} />
                </>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FileUploaderTwo;
