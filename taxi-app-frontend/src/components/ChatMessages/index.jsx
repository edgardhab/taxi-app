// components/ChatMessages.jsx
import React from "react";
import "./index.css";

const ChatMessages = ({ messages }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <ul className="chat">
      {messages.map((message, index) => {
        let user_id = message.user_id;
        const isCurrentUser = user_id === user.id ? "right" : "leftSide";
        return (
          <li className={`${isCurrentUser} list-el`} key={index}>
            <div className="clearfix">
              <div className="message-info">
                <div className="pp">
                  <img
                    src={`http://localhost:8000${message.image_url}`}
                    className="chat-img"
                    alt="User"
                  />
                </div>
                <div className="user">
                  <p className="user-name">
                    {message.fname + " " + message.lname}
                  </p>
                </div>
              </div>
              <p>{message.message}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ChatMessages;
