import React, { useState, useEffect, useRef } from "react";
import ChatRoom from "../../Components/ChatRoom";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

function UserChatRoom() {
  const { chatroomId, id } = useParams();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const socketRef = useRef(null);

  // 🔌 SOCKET CONNECTION
  useEffect(() => {
    socketRef.current = io("http://localhost:5000", {
      transports: ["websocket"],
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      socket.emit("join_room", chatroomId);
    });

    const handleReceiveMessage = (data) => {
      console.log("Message received:", data);

      setMessages((prev) => [
        ...prev,
        { sender: "artist", text: data.message },
      ]);
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
      socket.disconnect();
    };
  }, [chatroomId]);

  // 📤 SEND MESSAGE
  const sendMessage = () => {
    if (!newMessage.trim()) return;

    socketRef.current.emit("send_message", {
      room: chatroomId,
      senderId: id,
       msgType:"text",
      message: newMessage,
    });

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: newMessage },
    ]);

    setNewMessage("");
  };

  return (
    <ChatRoom
      role="user"
      messages={messages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      sendMessage={sendMessage}
    />
  );
}

export default UserChatRoom;
