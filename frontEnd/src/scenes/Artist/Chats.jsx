import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatsLists from '../../Components/ChatsLists';
import Api from '../../Api'
import {useParams} from 'react-router-dom'


function Chats() {
  const { id } = useParams();
  const [chats, setChats]=useState();

    useEffect(()=>{
      const fetchChatLists=async()=>{
        try {
          const response=await Api.get(`/user/${id}/chats?role=artist`)
            setChats(response.data);  
        } catch (err) {
          console.log(err);
        }
    }
  fetchChatLists()},[id])
 console.log(chats);
 
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Chats" subtitle="Connect and interact with Customer " /> 
        </Box>
      <ChatsLists chats={chats} role={"artist"} />
    </Box>
  )
}

export default Chats





