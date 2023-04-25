
import "./conversation.css";

export default function Conversation() {

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src=""
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}