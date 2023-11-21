/* eslint-disable no-unused-labels */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import React, { useState } from "react";
// import Chats from "./chats";
// // import { analyze } from "./analyze.js";
// import ".//Review.css"

// interface ResponseBotObject {
  time: BigInteger;
//   purpose: string;
//   message: string;
//   options?: string[];
//   sender: string;
// }

// const Review: React.FC = () => {
//   const [userResponse, setUserResponse] = useState<string>("");
//   const [step, setStep] = useState<number>(0);
//   const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    // time: "",
//     purpose: "",
//     message: "",
//     sender: "bot"
//   });
//   const [sendUserResponse, setSendUserResponse] = useState<string>("");

//   // setting next step when there's response and option click
//   const setNextStep = (response: string) => {
//     setStep(prevState => prevState + 1);
//     setSendUserResponse(response);
//     const res = analyze(step, response);
//     setBotResponse({ ...res, sender: "bot" });
//     setUserResponse("");
//   };

//   const optionClick = (e: React.MouseEvent<HTMLElement>) => {
//     const option = e.currentTarget.dataset.id;
//     if (option) {
//       setNextStep(option);
//     }
//   };

//   // // event handlers
//   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setUserResponse(e.target.value);
//   // };

//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setNextStep(userResponse);
//   // };

//   return (
//     <div className="chat-container">
//         <Chats
//         userResponse={userResponse}
//         botResponse={botResponse}
//         sendUserResponse={sendUserResponse}
//         optionClick={optionClick}
//         />

//         {/* <form onSubmit={e => handleSubmit(e)} className="chatForm">
//             <div className="chatInput-container">

//                 <input onChange={e => handleInputChange(e)} value={userResponse}/>
      
//             </div>

//             <div className="sendChat">
//                 <div className="sendChat-button">
//                     <button>Send</button>
//                 </div>
//             </div> 
//         </form> */}
//     </div>
//   );
// };

// export default Review;