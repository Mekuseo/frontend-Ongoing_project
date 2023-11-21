/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createChatBotMessage } from 'react-chatbot-kit';
import dp2 from "../../../assets/pics/unsplash_rDEOVtE7vOs.png";

const botName = "sky-bot"

const config = {
  initialMessages: [createChatBotMessage(`I am writing to inform you I didn’t like your place`),

  ],  
  state: {},
  botName: botName,
  
  customComponents: { botAvatar: (props) => <img src={dp2} alt="" /> },
};

export default config2;