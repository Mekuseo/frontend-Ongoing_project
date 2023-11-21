import React, { useRef, Dispatch, SetStateAction, useState } from "react";
// import LinearProgress, {
//   LinearProgressProps,
// } from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress"; 
import FormControl from "@mui/material/FormControl";
import {
  faArrowAltCircleDown,
  faFile,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { baseURL } from "../../../severs/auth";
import "./photosMobile.css"

interface ImageObject {
  caption: string;
  imgPath: string;
  progress: number;
}

const captions = [
  "Parking area",
  "Gym",
  "Conference centre",
  "Meeting room",
  "Swimming pool",
  "Spa and Sauna",
  "Business centre",
  "Entrance",
  "Kitchen",
  "Exterior",
  "Terrace/Patio",
  "Garden",
  "Reception",
];

// function LinearProgressWithLabel(
//   props: LinearProgressProps & { value: number }
// ) {
//   return (
//     <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 0 80px" }}>
//       <Box sx={{ width: "70%", m: 1 }}>
//         <LinearProgress variant="determinate" value={props.value} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="body2" color="text.secondary">{`${Math.round(
//           props.value
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

interface FileUploaderProps {
  exteriorImages: ImageObject[];
  setExteriorImages: Dispatch<SetStateAction<ImageObject[]>>;
}

function FileUploader({
  exteriorImages,
  setExteriorImages,
}: FileUploaderProps) {
  const imageContainerRef = useRef(null);
  const [uploading, setUploading] = useState(false); // Add a loading state

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("hotel_image", file);
      });
      formData.set("boundary", "your-custom-boundary");

      try {
        const userToken = localStorage.getItem("token") || "";
        setUploading(true); // Set loading state to true
        const response = await fetch(`${baseURL}hotels/images/`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Token ${userToken}`,
          },
        });

        if (response.ok) {
          const responseData = await response.json();

          setExteriorImages((prevImages) => {
            if (Array.isArray(prevImages)) {
              return [
                ...prevImages,
                { caption: "", imgPath: responseData.hotel_image, progress: 0 },
              ];
            }
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
      } finally {
        setUploading(false); 
      }
    }
  };

  const handleCaptionChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    index: number
  ) => {
    const value = event.target.value as string;

    // Update exteriorImages for the corresponding image
    setExteriorImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index].caption = value;
      return updatedImages;
    });
  };

  const handleDeleteImage = (index: number) => {
    setExteriorImages((prevImages) => {
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
        onChange={handleUpload}
        style={{ display: "none" }}
        id="upload-button"
      />
      <Grid
        container
        spacing={2}
        style={{ position: "relative", marginTop: "-20px", marginLeft: "-10px" }}
      >
        <Grid className="photoColumn">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
              background: "#fff",
              width: "100%",
            }}
            className="morephotosphotospageex"
          >
            <label htmlFor="upload-button">
              {uploading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="outlined"
                  component="span"
                  sx={{
                    color: "rgba(38, 50, 56, 0.75)",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    fontFamily: "Volkhov",
                    textTransform: "none",
                  }}
                  className="uploadbuttonmorephotosex"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    style={{ color: "#6E9E76", marginRight: "10px" }}
                  />{" "}
                  {exteriorImages.length > 0 ? "Add More" : "Upload"}
                </Button>
              )}
            </label>
          </div>
        </Grid>

        <Grid className="photoColumn">
          <div
            style={{
              marginTop: "12px",
              paddingTop: "40px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
              border: "2px solid #c5c4c4",
              background: "#fff",
              boxShadow:
                "10px 10px 20px 0px rgba(191, 191, 191, 0.3), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              width: "100%",
              height: "450px",
              overflow: "scroll",
            }}
            ref={imageContainerRef}
          >
            {exteriorImages &&
            Array.isArray(exteriorImages) &&
            exteriorImages.length > 0 ? (
              exteriorImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    height: "255px",
                    width: "100%",
                    marginBottom: "90px",
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
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        textAlign: "center",
                        marginBottom: "0px",
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
                        right: "40px",
                        top: "-10px",
                        cursor: "pointer",
                      }}
                      size="2x"
                      onClick={() => handleDeleteImage(index)}
                    />
                     <Typography style={{ color: "red", textAlign: "center" }}>
                      Please select a caption
                    </Typography>
                    <FormControl
                      variant="outlined"
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyItems: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid green",
                        borderRadius: "5px",
                        width: "80%",
                        margin: "0 auto",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faArrowAltCircleDown}
                        style={{ position: "absolute", right: "20px" }}
                      />
                      <select
                        value={image.caption}
                        onChange={(event) => handleCaptionChange(event, index)}
                        style={{ fontSize: "20px", fontWeight: "700" }}
                      >
                        {captions.map((caption, captionIndex) => (
                          <option key={captionIndex} value={caption}>
                            {caption}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    {/* <LinearProgressWithLabel value={0} /> */}
                  </>
                </div>
              ))
            ) : (
              <Typography style={{ color: "red", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "350px" }}>
                No image(s) uploaded
              </Typography>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FileUploader;
