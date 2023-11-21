// import { useState } from "react";
// import PhoneNumber from "../phoneNumber";
// import { SelectChangeEvent } from "@mui/material";
// import { ContactDProps } from "./ContactD";

// export const ContactD: React.FC<ContactDProps> = ({
//   setPhoneNumber,
//   setPhoneNumberCountry,
//   phoneNumberCountry,
// }) => {
//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   const [phoneNumber, setPhoneNumberState] = useState<string>("");
//   // const [selectedCountryCode, setSelectedCountryCode] =
//   //   useState<string>("+234");
//   const handlePhoneNumberChange = (value: string) => {
//     setPhoneNumberState(value);
//   };
//   const changeHandling = (
//     event: SelectChangeEvent<typeof phoneNumberCountry>
//   ) => {
//     const {
//       target: { value },
//     } = event;
//     setPhoneNumberCountry(typeof value === "string" ? value : value.join(", "));
//     // setPersonName(
//     //   // On autofill we get a stringified value.
//     //   typeof value === "string" ? value.split(",") : value
//     // );
//   };
//   const handleCountryCodeChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setPhoneNumberCountry(cleanedCountryCode);
//   };

//   // const handleCountryCodeChange = (
//   //   event: React.ChangeEvent<HTMLSelectElement>
//   // ) => {
//   //   const cleanedCountryCode = event.target.value.startsWith("+")
//   //     ? event.target.value.slice(1)
//   //     : event.target.value;
//   //   setPhoneNumberCountry(cleanedCountryCode);
//   // };
//   // const cleanedPhoneNumber = phoneNumber.replace(/\s+/g, "");
//   // const combinedPhoneNumber = `${selectedCountryCode}${cleanedPhoneNumber}`;
//   // setPhoneNumber(combinedPhoneNumber);
//   return (
//     <div className="FNDetails">
//       <h1 className="reusedH1">Contact details</h1>
//       <div className="CNBody">
//         <span className="topOPB">Mobile Phone Number</span>

//         <div className="row">
//           <div className="contactColumn">
//             <select
//               className="form-control"
//               value={phoneNumberCountry}
//               onChange={changeHandling}
//             >
//               <option value="+234">Nigeria(+234)</option>
//               <option value="+233">Ghana (+233)</option>
//               <option value="+27">South Africa (+27)</option>
//               <option value="+249">Sudan (+249)</option>
//             </select>
//           </div>

//           <div className="contactColumn">
//             <div className="formNomarl">
//               <PhoneNumber onPhoneNumberChange={handlePhoneNumberChange} />
//             </div>
//           </div>
//         </div>

//         <h2>Email Address</h2>
//         <span className="Pga">
//           We will send you a link to verify your email
//         </span>

//         <div className="formNomarl">
//           <input
//             type="text"
//             id="text"
//             name="Email"
//             placeholder={user.email || ""}
//             className="input"
//             readOnly // Add readOnly attribute
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
