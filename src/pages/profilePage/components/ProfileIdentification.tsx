import { Divider } from "antd";
// import { useState } from "react";

const ProfileIdentification = () => {
  // const handleImageUpload = (event: { target: { files: any[]; }; }) => {
  //   const uploadedImage = event.target.files[0];

  //   if (uploadedImage) {
  //     const reader = new FileReader();

  //     // reader.onload = (e) => {
  //     //   setImage(e.target.result);
  //     // };

  //     reader.readAsDataURL(uploadedImage);
  //   }
  // };

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
                // onChange={handleImageUpload}
              />
              {/* {image ? (
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
                  {imageUploadIcon}
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
              )} */}
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
export default ProfileIdentification;

// const imageUploadIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="55"
//     height="54"
//     viewBox="0 0 55 54"
//     fill="none"
//   >
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M15.4999 11.6376C16.6099 10.8959 17.915 10.5 19.25 10.5C20.1071 10.5 20.802 11.1948 20.802 12.052C20.802 12.9091 20.1071 13.6039 19.25 13.6039C18.5289 13.6039 17.8239 13.8178 17.2244 14.2184C16.6248 14.619 16.1574 15.1885 15.8815 15.8547C15.6055 16.5209 15.5333 17.254 15.674 17.9613C15.8147 18.6686 16.1619 19.3182 16.6718 19.8282C17.1817 20.3381 17.8314 20.6853 18.5387 20.826C19.246 20.9667 19.9791 20.8945 20.6453 20.6185C21.3115 20.3426 21.881 19.8752 22.2816 19.2756C22.6822 18.6761 22.8961 17.9711 22.8961 17.25C22.8961 16.3929 23.5909 15.698 24.448 15.698C25.3052 15.698 26 16.3929 26 17.25C26 18.585 25.6041 19.8901 24.8624 21.0001C24.1207 22.1101 23.0665 22.9753 21.8331 23.4862C20.5997 23.9971 19.2425 24.1307 17.9331 23.8703C16.6238 23.6098 15.421 22.967 14.477 22.023C13.533 21.079 12.8902 19.8762 12.6297 18.5669C12.3693 17.2575 12.5029 15.9003 13.0138 14.6669C13.5247 13.4335 14.3899 12.3793 15.4999 11.6376Z"
//       fill="#8D98AA"
//     />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M52.9704 19.5C53.8152 19.5 54.5 20.1991 54.5 21.0615V34.1361C54.5 40.8246 53.2063 45.9128 49.9158 49.2906C46.6233 52.6705 41.6611 54 35.141 54H19.859C13.3409 54 8.37887 52.671 5.08585 49.2915C1.79484 45.9141 0.5 40.8259 0.5 34.1361V28.8792C0.5 28.0168 1.18484 27.3177 2.02963 27.3177C2.87442 27.3177 3.55926 28.0168 3.55926 28.8792V34.1361C3.55926 40.521 4.8138 44.584 7.25482 47.0891C9.69383 49.5922 13.6464 50.8771 19.859 50.8771H35.141C41.3556 50.8771 45.3081 49.5917 47.7466 47.0885C50.1871 44.5832 51.4407 40.5202 51.4407 34.1361V21.0615C51.4407 20.1991 52.1256 19.5 52.9704 19.5Z"
//       fill="#8D98AA"
//     />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M5.14951 4.61291C8.48633 1.30235 13.5144 0 20.124 0H30.4574C31.3094 0 32 0.685212 32 1.53046C32 2.37572 31.3094 3.06093 30.4574 3.06093H20.124C13.8189 3.06093 9.80628 4.32159 7.33108 6.77731C4.85588 9.23303 3.58521 13.214 3.58521 19.4695C3.58521 20.3148 2.89456 21 2.04261 21C1.19065 21 0.5 20.3148 0.5 19.4695C0.5 12.912 1.81268 7.92347 5.14951 4.61291Z"
//       fill="#8D98AA"
//     />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M35 9C35 8.17157 35.7189 7.5 36.6056 7.5H51.3944C52.2811 7.5 53 8.17157 53 9C53 9.82843 52.2811 10.5 51.3944 10.5H36.6056C35.7189 10.5 35 9.82843 35 9Z"
//       fill="#8D98AA"
//     />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M44 0C44.8284 0 45.5 0.718858 45.5 1.60561V16.3944C45.5 17.2811 44.8284 18 44 18C43.1716 18 42.5 17.2811 42.5 16.3944V1.60561C42.5 0.718858 43.1716 0 44 0Z"
//       fill="#8D98AA"
//     />
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M42.5744 29.5124L31.9585 38.7021L31.9303 38.7259C30.6396 39.79 29.0202 40.3718 27.349 40.3718C25.6777 40.3718 24.0583 39.79 22.7676 38.7259C22.7537 38.7145 22.74 38.7027 22.7265 38.6908L21.907 37.9652C21.2208 37.4115 20.3779 37.088 19.4976 37.041C18.6119 36.9936 17.7341 37.2286 16.99 37.7121L4.39581 46.2362C3.69283 46.712 2.73805 46.5266 2.26327 45.8221C1.78848 45.1176 1.97347 44.1608 2.67646 43.685L15.3022 35.1395C16.5942 34.2951 18.1209 33.8845 19.6612 33.9668C21.2016 34.0491 22.6758 34.6203 23.8709 35.5977C23.8864 35.6104 23.9017 35.6234 23.9167 35.6367L24.7386 36.3644C25.4763 36.9651 26.398 37.2933 27.349 37.2933C28.3026 37.2933 29.2268 36.9633 29.9654 36.3594L40.5814 27.1697L40.6096 27.1459C41.9002 26.0818 43.5196 25.5 45.1909 25.5C46.8622 25.5 48.4816 26.0818 49.7722 27.1459L49.8005 27.1697L53.9681 30.7778C54.61 31.3335 54.6809 32.3055 54.1263 32.9488C53.5718 33.5921 52.6018 33.6631 51.9599 33.1074L47.8073 29.5124C47.0687 28.9085 46.1445 28.5785 45.1909 28.5785C44.2373 28.5785 43.3131 28.9085 42.5744 29.5124Z"
//       fill="#8D98AA"
//     />
//   </svg>
// );
