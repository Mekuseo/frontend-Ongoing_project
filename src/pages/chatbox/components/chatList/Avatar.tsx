import { Component } from "react";

interface AvatarProps {
  image: string;
  isOnline: string;
}

export default class Avatar extends Component<AvatarProps> {
  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={this.props.image} alt="#" />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}
