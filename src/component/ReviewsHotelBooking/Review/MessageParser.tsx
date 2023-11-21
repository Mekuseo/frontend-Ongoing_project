/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";

class MessageParser {
  actionProvider: any;
  state: any;
  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string | string[]) {
    console.log(message);

    if (
      message.includes("issues") ||
      message.includes("wrong") ||
      message.includes("why") ||
      message.includes("sorry") ||
      message.includes("let us know") ||
      message.includes("kindly") ||
      message.includes("please")
    ) {
      return this.actionProvider.handleContact();
    }

    if (
        message.includes("look") ||
        message.includes("investigate") ||
        message.includes("check") 
      ) {
        return this.actionProvider.handleReturn();
      }
  

    if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }
    
    return this.actionProvider.handleOptions();
  }
}
export default MessageParser;
