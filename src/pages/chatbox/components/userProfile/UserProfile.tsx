import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {

  toggleInfo = (e: React.MouseEvent<HTMLDivElement>) => {
    const parentElement = e.currentTarget.parentElement as HTMLElement;
    parentElement?.classList.toggle("open");
  };
  
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" />
          </div>
          <h4>Gbenga Fernando</h4>
          <p>CEO & Founder at Travel Hunters</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
