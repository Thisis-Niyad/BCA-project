import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import { useParams } from "react-router-dom";
import ChatRoom from "../../Components/ChatRoom";
import Api from '../../Api'

function Imagegeneration() {
    const { id } = useParams();
  const actor={name:"AI",profile:"uploads/images/Ai.jpg"}
  const [messages, setMessages] = useState([]);
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
  return (
    <Box>
           <ChatRoom
              role="user"
              actor={actor}
              messages={messages}
              // newMessage={newMessage}
              // setNewMessage={setNewMessage}
              // sendMessage={sendMessage}
              // sendImage={sendImage}
            />
    </Box>
  )
}

export default Imagegeneration
