import React from "react";
import { Box } from "@mui/material";

import avatarOpen from "../../assets/faras1.png";
import avatarClosed from "../../assets/hand3.png";

export default function MonkeyAvatar({ showPassword, togglePassword }) {
    
  return (
    <Box
      onClick={togglePassword}
      className={`faras${showPassword ? "shows" : "hides"}`}
      sx={{
        width: 170,
        height: 170,
        cursor: "pointer",
        overflow:"hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img
        // src={showPassword ? avatarOpen : avatarClosed}
        src={avatarOpen}
        alt="avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <img
        // src={showPassword ? avatarOpen : avatarClosed}
        src={avatarClosed}
        alt="avatar"
        style={{
          width: "165px",
          height: "165px",
          borderRadius:"34%",
          translate:showPassword ?  "3px -175px": "0px 0px",
          opacity:showPassword?1:0
        }}
      />
    </Box>
  );
}
