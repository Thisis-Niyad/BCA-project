import React from 'react'
import Header from '../../Components/Header'
import {Box,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatsLists from '../../Components/ChatsLists';

const chats = [
  {
    id: 1,
    name: "Ayaan Art",
    lastMessage: "Your commission is ready 🎨",
    time: "10:45 AM",
    unread: 2,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Pixel Queen",
    lastMessage: "Can you confirm the size?",
    time: "Yesterday",
    unread: 0,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "SketchMaster",
    lastMessage: "Payment received ✅",
    time: "Mon",
    unread: 1,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

function Chats() {
   
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Chats" subtitle="Connect and interact with Artist " /> 
        </Box>
      <ChatsLists chats={chats} />
    </Box>
  )
}

export default Chats