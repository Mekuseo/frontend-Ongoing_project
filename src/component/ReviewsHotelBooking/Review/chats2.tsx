/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState, useEffect, useRef } from "react";
// import "./chats.scss";

// interface Props {
//   userResponse: string;
//   botResponse: {
//     purpose: string;
//     message: string;
//     options?: string[];
//     sender: string;
//   };
//   sendUserResponse: string;
//   optionClick: (ev: React.MouseEvent<HTMLElement>) => void;
// }

// interface MessagesInfo {
//   purpose?: string;
//   message: string;
//   options?: string[];
//   sender: string;
// }

// const Chats: React.FC<Props> = props => {
//   const [messages, setMessages] = useState<MessagesInfo[]>([]);
//   const dummyRef = useRef<HTMLDivElement>(null);
//   const bodyRef = useRef<HTMLDivElement>(null);

//   // stacking up messages
//   useEffect(() => {
//     if (messages.length === 0) {
//       setMessages([
//         {
//           purpose: "introduction",
//           message:
//             "I am writing to inform you I didn’t like your place",
//           sender: "bot"
//         }
//       ]);
//     } else {
//       const tempArray = [...messages];
//       tempArray.push({ message: props.sendUserResponse, sender: "user" });
//       setMessages(tempArray);

//       setTimeout(() => {
//         const temp2 = [...tempArray];
//         temp2.push(props.botResponse);
//         setMessages(temp2);
//       }, 1000);
//     }
//   }, [props.sendUserResponse, props.botResponse]);

//   // enable autoscroll after each message
//   useEffect(() => {
//     if (dummyRef && dummyRef.current && bodyRef && bodyRef.current) {
//       bodyRef.current.scrollTo({
//         top: dummyRef.current.offsetTop,
//         behavior: "smooth"
//       });
//     }
//   }, [messages]);

//   return (
//     <div className="message-container" ref={bodyRef}>
//       {messages.map(chat => (
//         <div key={chat.message} >
//           <div className={`message ${chat.sender}`}>
//             <p>
//               {chat.message}
//             </p>
//           </div>
//           {chat.options ? (
//             <div className="options">
//               <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
//               <div>
//                 <i className="far fa-hand-pointer"></i>
//               </div>
//               {chat.options.map(option => (
//                 <p
//                   onClick={e => props.optionClick(e)}
//                   data-id={option}
//                   key={option}
//                 >
//                   {option}
//                 </p>
//               ))}
//             </div>
//           ) : null}
//           <div ref={dummyRef} className="dummy-div"></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chats;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config2 from "./config2";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import ".//chat.css";

export default Chats2

function Chats2(){

    function handleChat(e){
      setOpen(!open);
      console.log(open);
    }

    return(
    <div className="chat-box">

      <div className="chatbot" >
       <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        className="chatBox"
      >
        </Chatbot> 
      </div>
      
    </div>
    );
}