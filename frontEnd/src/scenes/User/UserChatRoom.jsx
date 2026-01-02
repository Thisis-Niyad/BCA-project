import React, { useState, useEffect, useRef } from "react";
import ChatRoom from "../../Components/ChatRoom";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import Api from '../../Api'

function UserChatRoom() {
  const { chatroomId, id } = useParams();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const[actor,setActor]=useState()
  const socketRef = useRef(null);

  useEffect(()=>{
    const fetchMessages=async()=>{
      try {
        const response=await Api.get(`/artist/${id}/chatroom/${chatroomId}?role=user`);
        const data=response.data;
          setMessages(data.messages);  
          setActor({name:data.actor.artistName,profile:data.actor.artistProfile})
      } catch (err) {
        console.log(err);
      }
  }
fetchMessages()},[id,chatroomId])

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
               { role: data.role, type:data.msgType,text:data.text,image:data.image  },

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
    role:"user",
      text: newMessage,
      msgType:"text"
    });

    setMessages((prev) => [
      ...prev,
      { role: "user", text: newMessage },
    ]);

    setNewMessage("");
  };
 const sendImage = async(file) => {
  try {
    if (!file) return;
console.log(file);

    const formData = new FormData();
  formData.append("image", file);
      const response= await Api.post(`/user/${id}/chatroom/${chatroomId}`,formData,
        {headers: { "Content-Type": "multipart/form-data" }})
        const imageUrl = response.data.imageUrl;
        console.log(imageUrl);
 socketRef.current.emit("send_message", {
    room: chatroomId,
    senderId: id,
    role:"user",
    msgType:"image",
    image: imageUrl,
  });
   setMessages((prev) => [
    ...prev,
    { role: "user", type: "image", image: imageUrl },
  ]);
  } catch (error) {
    console.log(error);
    
  }
  };
  return (
    <ChatRoom
      role="user"
      actor={actor}
      messages={messages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      sendMessage={sendMessage}
      sendImage={sendImage}
    />
  );
}

export default UserChatRoom;
