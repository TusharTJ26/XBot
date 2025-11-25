import "./ChatPage.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState } from "react";
export default function ChatPage({ messages }) {
  //   const message = [];
  console.log(messages);
  //   const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {messages.map((message, index) => (
        <Box key={index} className="chat-box">
          <Box className="chat-box-logo">
            {message.sender == "Soul AI" ? (
              <img src="/images/bot-logo.png" alt="user-img" />
            ) : (
              <img src="/images/user.png" alt="user-img" />
            )}
          </Box>
          <Box>
            <Box className="chat-box-content">
              <Box className="chat-box-title">
                <span>{message.sender}</span>
              </Box>
              <p className="chat-box-text">{message.message}</p>
            </Box>
            <Box className="chat-box-time">
              {message.time}
              {/* {message.sender == "Soul AI" ? (
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              ) : (
                ""
              )} */}
            </Box>
          </Box>
        </Box>
      ))}
      {/* <Box className="chat-box">
        <Box className="chat-box-logo">
          <img src="/images/user.png" alt="user-img" />
        </Box>
        <Box>
          <Box className="chat-box-content">
            <Box className="chat-box-title">You</Box>
            <Box className="chat-box-text">Hi!</Box>
          </Box>
          <Box className="chat-box-time">10:33pm</Box>
        </Box>
      </Box> */}
    </Box>
  );
}
