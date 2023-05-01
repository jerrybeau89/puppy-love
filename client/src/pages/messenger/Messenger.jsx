import React from 'react'
import './messenger.css';
import Conversation from "../conversation/Conversation";
import Message from "../message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";



export default function Messenger() {
  // const [conversations, setConversations] = useState([]);
  // const [messages, setMessages] = useState([]);
  // const [currentChat, setCurrentChat] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const message = {
  //     sender: user._id,
  //     text: newMessage,
  //     conversationId: currentChat._id,
  //   };
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  
  return (
    <>
      
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper"></div>
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation />
          
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                 <Message />
                 <Message own={true}/>
                 <Message />
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}