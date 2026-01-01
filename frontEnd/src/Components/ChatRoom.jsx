import React, {  useRef,useState } from "react";
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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ChatRoom = ({role,newMessage,setNewMessage,messages,sendMessage}) => {
          const theme= useTheme()
          const colors =tokens(theme.palette.mode)
          const bottomRef=useRef(null);
          const [image, setImage] = useState();
          




  const sendImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    // setMessages([...messages, { sender: role, image: imageURL }]);
    if (file) {
          setImage(imageURL);
      }
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
              justifyContent: msg.sender === role ? "flex-end" : "flex-start",
              mb: 1
            }}
          >
            <Paper
              sx={{
                p: 1.5,
                maxWidth: "60%",
                bgcolor: msg.sender === role ? colors.greenAccent[500] : "#cececeff",
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
      <Box sx={{ pt: 2, display: "flex", alignItems: "center",flexDirection:"column", borderTop: "1px solid #ddd" }}>
          {image?(
             <Box display="flex" alignItems="flex-start" justifyContent="center">
              <img
                  src={image}
                  alt="Preview"
                  style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: 8 }}
                />
                  <IconButton sx={{color:"#666666" ,m:"0 0 0 -17px",paddingTop:"0"}} onClick={()=>{setImage("")}} >
                    <HighlightOffIcon/>
                    </IconButton>
              </Box>
              ):null}
              <Box sx={{p: 2, display: "flex", alignItems: "center"}} width="100%">
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
    </Box>
  );
};

export default ChatRoom;
