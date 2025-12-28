import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  IconButton,
  Avatar,
  useTheme,
  Typography,
  Paper,
  InputAdornment, 
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import {tokens} from '../Theme'

const ChatRoom = () => {
          const theme= useTheme()
          const colors =tokens(theme.palette.mode)
          const bottomRef=useRef(null);
  const [messages, setMessages] = useState([
    { sender: "artist", text: "Hello! How can I help you?" },
    { sender: "user", text: "I want a custom artwork." }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");
  };

  const sendImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setMessages([...messages, { sender: "user", image: imageURL }]);
  };

  return (
    <Box sx={{ height: "90vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header */}
      <Box sx={{ p: 2, bgcolor:colors.primary[500], color: "white", display: "flex", alignItems: "center", borderTop: "1px solid #ddd"   }}>
        <Avatar sx={{ mr: 2 }}>A</Avatar>
        <Typography variant="h6" color={colors.grey[200]}>Artist Chat</Typography>
      </Box>

      {/* Messages */}
      <Box sx={{ flex: 1, p: 2, overflowY: "auto", bgcolor: colors.primary[400] }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              mb: 1
            }}
          >
            <Paper
              sx={{
                p: 1.5,
                maxWidth: "60%",
                bgcolor: msg.sender === "user" ? colors.greenAccent[500] : "#cececeff",
                color: "#000",
                borderRadius: 2
              }}
            >
              {msg.text && <Typography>{msg.text}</Typography>}
              {msg.image && (
                <img
                  src={msg.image}
                  alt="sent"
                  style={{ width: "100%", borderRadius: 8 }}
                />
              )}
            </Paper>

          </Box>
        ))}
<div ref={bottomRef}/>
      </Box>
      {/* Input */}
      <Box sx={{ p: 2, display: "flex", alignItems: "center", borderTop: "1px solid #ddd" }}>
        <IconButton component="label">
          <ImageIcon />
          <input type="file" hidden accept="image/*" onChange={sendImage} />
        </IconButton>

        <TextField
          fullWidth
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{ mx: 2 }}
          onKeyDown={()=>{if (event.key==='Enter') {
            event.preventDefault()
            setTimeout(() => {
                bottomRef.current?.scrollIntoView({behavior:"smooth"})
            }, 0);
            sendMessage()
          }}}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton sx={{color:colors.blueAccent[500]}} onClick={sendMessage}>
                    <SendIcon />
                    </IconButton>
                </InputAdornment>
                ),
                style:{
                borderRadius:"20px",
                padding:"5px"
                }
            }}
        />
      </Box>
    </Box>
  );
};

export default ChatRoom;
