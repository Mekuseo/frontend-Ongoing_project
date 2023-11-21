/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";

class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  constructor(createChatBotMessage: any, setStateFunc: any, createClientMessage: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // options action
  handleOptions = () => {
    const message = this.createChatBotMessage(
      "Please elaborate",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage(
      "The rooms were too small, and stuffy.",
      {
        widget: "contact",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleReturn = () =>{
    const message = this.createChatBotMessage(
      "That's great",
      {
        widget: "link",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message);
  }
  
  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome!");

    this.addMessageToState(message);
  };

  // handling message to set state
  addMessageToState = (message: any) => {
    this.setState((state: { messages: any; }) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
