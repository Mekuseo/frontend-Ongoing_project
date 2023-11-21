import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import { baseURL } from "../../../severs/auth";

interface IdentificationSectionProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}
const IdentificationSection = ({
  image,
  setImage,
}: IdentificationSectionProps) => {
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    const uploadImageUrl = `${baseURL}auth/idImage/`;

    if (file) {
      const formData = new FormData();
      formData.append("id_image", file);

      try {
        const response = await fetch(uploadImageUrl, {
          method: "POST",
          body: formData,
        });
        console.log(response);

        if (response.status === 201) {
          const responseData = await response.json();
          const imageUrl = responseData.id_image_url;
          console.log("Image uploaded successfully:", imageUrl);

          // Uncomment if you want to update the component state
          setImage(imageUrl);

          // Pass the image URL to the parent component or perform other actions
          // handleImageUpload1(imageUrl);
        } else {
          const errorData = await response.json();
          console.error("Image upload failed:", errorData);
        }
      } catch (error) {
        console.error("Error during image upload:", error);
      }
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "raleway, sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              margin: "33px 0 0",
            }}
          >
            Means of Identification
          </p>
          <div
            style={{
              border: "1px solid #cfcfcf",
              padding: "10px 60px",
              borderRadius: "5px",
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Means of Identification
            </p>
            <p
              style={{
                fontFamily: "raleway, sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "-10px",
              }}
            >
              Please upload an image of any of the following. <br /> (NIN,
              Drivers License, Voters card)
            </p>
            <label
              htmlFor="image-upload"
              style={{
                width: "198px",
                height: "198px",
                border: "1px dashed #4C535F",
                borderRadius: "10px",
                backgroundColor: "#EDF2F6",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <input
                type="file"
                id="image-upload"
                accept="image/*" // Allow only image files
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  opacity: 0,
                }}
                onChange={handleImageUpload}
              />
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              ) : (
                <div>
                  <FontAwesomeIcon icon={faImage} />
                  <p
                    style={{
                      fontFamily: "raleway, sans-serif",
                      fontSize: "20px",
                      color: "#4C535F",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Upload your <br /> photo
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>

        <div
          style={{
            color: "red",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Edit
        </div>
      </div>
      <Divider style={{ margin: "2px 0" }} />
    </div>
  );
};

export default IdentificationSection;
