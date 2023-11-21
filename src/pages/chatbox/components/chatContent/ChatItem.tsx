import { Component } from "react";
import Avatar from "../chatList/Avatar";

interface ChatItemProps {
  animationDelay: number;
  user: string;
  msg: string;
  image: string;
}

export default class ChatItem extends Component<ChatItemProps> {
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
          </div>
          <span style={{fontSize:"10px"}}>Seen 1.03PM</span>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
