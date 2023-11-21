import React, { Component } from "react";
import Avatar from "./Avatar";

interface ChatListItemsProps {
  name: string;
  animationDelay: number;
  active: string;
  isOnline: string;
  image?: string;
}

export default class ChatListItems extends Component<ChatListItemsProps> {
  selectChat = (e: React.MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget.parentNode;
    if (parent) {
      for (let index = 0; index < parent.children.length; index++) {
        parent.children[index].classList.remove("active");
      }
      e.currentTarget.classList.add("active");
    }
  };

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "http://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">32 mins ago</span>
        </div>
      </div>
    );
  }
}
