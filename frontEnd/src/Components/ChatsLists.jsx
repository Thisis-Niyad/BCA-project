import React,{useState} from 'react'
import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
  IconButton,
  TextField, InputAdornment, 
} from "@mui/material";
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";

function ChatsLists({chats,role}) {
     const [search, setSearch] = useState("");
 const filteredChat = chats?.filter(chatRoom =>
  (
    role === "user"
      ? chatRoom.artistName
      : chatRoom.userName
  )
    ?.toLowerCase()
    .includes(search.toLowerCase())
);

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
      {filteredChat?.length === 0 && (
        <Typography align="center" mt={2}>
          No chats found
        </Typography>
      )}
       {filteredChat?.map((chat) => {
        const name =
          role === "user" ? chat.artistName : chat.userName;
        const profile =
          role === "user" ? chat.artistProfile : chat.userProfile;

        return (
          <Box key={chat._id}>
                <ListItemButton component={Link} to={`../chatroom/${chat._id}`}>
                  <ListItemAvatar>
                    <Badge
                      color="success"
                      badgeContent={chat.unread}
                      invisible={chat.unread === 0}
                    >
                      <Avatar src={profile} />
                    </Badge>
                  </ListItemAvatar>
    
                  <ListItemText
                    primary={
                      <Typography fontWeight="600">
                        {name}
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
                    {chat.lastMessageAt}
                  </Typography>
                </ListItemButton>
                <Divider sx={{ bgcolor: "#1e293b" }} />
              </Box>
        );
      })}
    </List>
        </Box>
    </>
  )
}

export default ChatsLists
