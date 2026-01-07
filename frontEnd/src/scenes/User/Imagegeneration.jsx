import React,{useRef,useState,useEffect} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import { useParams } from "react-router-dom";
import ChatRoom from "../../Components/ChatRoom";
import Api from '../../Api'
import io from "socket.io-client";


function Imagegeneration() {
    const { id } = useParams();
  const actor={name:"AI",profile:"uploads/images/Ai.jpg"}
    const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
    const socketRef = useRef(null);

  // fetch prev messages
    useEffect(()=>{
      const fetchMessages=async()=>{
        try {
          const response=await Api.get(`/artist/${id}/imagegeneration/`);
            setMessages(response.data.messages);  
        } catch (err) {
          console.log(err);
        }
    }
  fetchMessages()},[id])

    useEffect(() => {
      socketRef.current = io("http://localhost:5000", {
        transports: ["websocket"],
      });
          const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      socket.emit("join_room", id);
    });

        const handleReceiveMessage = (data) => {
      console.log("Message received:", data);

      setMessages((prev) => [
        ...prev,
               { role: data.role, type:data.msgType,text:data.text,image:data.image  },

      ]);
    };

    socket.on("receiveMessage", handleReceiveMessage);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.disconnect();
    };
    })

      const sendMessage = () => {
    if (!newMessage.trim()) return;

    socketRef.current.emit("sendPromptToAI", {
      userId:id,
      prompt:newMessage
    });

    setMessages((prev) => [
      ...prev,
      { role: "user", text: newMessage },
    ]);

    setNewMessage("");
  };

  return (
    <Box>
           <ChatRoom
              role="user"
              actor={actor}
              messages={messages}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              sendMessage={sendMessage}
              sendImage={null}
            />
    </Box>
  )
}

export default Imagegeneration
