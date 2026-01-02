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

const ChatRoom = ({role,actor,newMessage,setNewMessage,messages,sendMessage,sendImage}) => {
          const theme= useTheme()
          const colors =tokens(theme.palette.mode)
          const bottomRef=useRef(null);
          const [image, setImage] = useState();
          const [sendimg,setSendImg]=useState()

 const prevImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file) {
      setImage(URL.createObjectURL(file));
      setSendImg(file)
      }
  };
          
console.log(messages);


 

  return (
    <Box sx={{ height: "90vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header */}
      <Box sx={{ p: 2, bgcolor:colors.primary[500], color: "white", display: "flex", alignItems: "center", borderTop: "1px solid #ddd"   }}>
        <Avatar sx={{ mr: 2 }} src={actor?.profile}/>
        <Typography variant="h6" color={colors.grey[200]}>{actor?.name}</Typography>
      </Box>

      {/* Messages */}
      <Box sx={{ flex: 1, p: 2, overflowY: "auto", bgcolor: colors.primary[400] }}>
        {messages.map((msg, index) => (
        
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.role === role ? "flex-end" : "flex-start",
              mb: 1
            }}
          >
            <Paper
              sx={{
                p: 1.5,
                maxWidth: "60%",
                bgcolor: msg.role === role ? colors.greenAccent[500] : "#cececeff",
                color: "#000",
                borderRadius: 2
              }}
            >
              {msg.text && <Typography>{msg.text}</Typography>}
              {msg.image && (
                <img
                  src={`http://localhost:5000/${msg.image}`}
                  alt="sent"
                  style={{ width: "300px", borderRadius: 8 }}
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
         
              <Box display="flex"  justifyContent="center">
              <img
                  src={image}
                  alt="Preview"
                  style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: 8 }}
                />
                  
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                <IconButton sx={{color:"#666666" ,m:"0 0 0 -17px",paddingTop:"0"}} onClick={()=>{setImage("")}} >
                    <HighlightOffIcon/>
                    </IconButton>
             <IconButton sx={{bgcolor:colors.blueAccent[500],color:"#fff" ,borderRadius:"50%"}} 
                  onClick={()=>{sendImage(sendimg);
                  setImage("");
                  }}>
                    <SendIcon />
              </IconButton>
              </Box>
                   
              </Box>
              ):null}
              <Box sx={{p: 2, display: "flex", alignItems: "center"}} width="100%">
        <IconButton component="label">
          <ImageIcon />
          <input type="file" hidden accept="image/*" onChange={prevImage} />
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
