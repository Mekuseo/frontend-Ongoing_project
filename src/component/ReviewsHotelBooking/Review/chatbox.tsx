/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

export default ChatBox

function ChatBox(){
  const [open, setOpen] = useState(false);

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
      className="chat"
      /> 
      </div>
      
    </div>
    );
}