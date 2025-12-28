import React,{useState} from 'react'
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

function ChatsLists({chats}) {
     const [search, setSearch] = useState("");
       const filteredChat = chats.filter((chatRoom) =>
        chatRoom.name.toLowerCase().includes(search.toLowerCase()) );
  return (
    <>
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
    </>
  )
}

export default ChatsLists
