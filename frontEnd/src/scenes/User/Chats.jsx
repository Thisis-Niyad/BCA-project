import React,{useState} from 'react'
import Header from '../../Components/Header'
import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  IconButton,
  TextField, InputAdornment, 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
    const [search, setSearch] = useState("");
   const filteredChat = chats.filter((chatRoom) =>
    chatRoom.name.toLowerCase().includes(search.toLowerCase()) );
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Chats" subtitle="Connect and interact with Artist " /> 
        </Box>
        <Box
      sx={{
        width: "100%",
        mx: "auto",
        height: "100vh",
        color: "#fff",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          borderBottom: "1px solid #1e293b",
        }}
      >
                    <TextField
                      style={{width:"40%"}}
                      placeholder="Search... "
                      variant="outlined"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                       InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton 
                            // onClick={onSearch}
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                        style:{
                          borderRadius:"20px",
                          padding:"5px"
                        }
                      }}
                      sx={{"& .Mui-focused fieldset": { borderColor: "#4cceac !important"} }}
                    />
      </Box>

      {/* Chat List */}
      <List>
        {filteredChat.map((chat) => (
          <Box key={chat.id}>
            <ListItem button>
              <ListItemAvatar>
                <Badge
                  color="success"
                  badgeContent={chat.unread}
                  invisible={chat.unread === 0}
                >
                  <Avatar src={chat.avatar} />
                </Badge>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography fontWeight="600">
                    {chat.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="#94a3b8"
                    noWrap
                  >
                    {chat.lastMessage}
                  </Typography>
                }
              />

              <Typography
                variant="caption"
                color="#94a3b8"
              >
                {chat.time}
              </Typography>
            </ListItem>
            <Divider sx={{ bgcolor: "#1e293b" }} />
          </Box>
        ))}
      </List>
    </Box>
    </Box>
  )
}

export default Chats





