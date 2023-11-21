import { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
// import UserProfile from "../userProfile/UserProfile";
import Navbar from "../../../../component/HomePage/header/header";

export default class ChatBody extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main__chatbody" style={{margin:"10vh auto"}}>
          <ChatList />
          <ChatContent />
          {/* <UserProfile /> */}
        </div>
      </div>
    );
  }
}
