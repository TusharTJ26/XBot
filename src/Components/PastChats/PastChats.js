import InputBar from "../InputBar/InputBar";
import "./PastChats.css";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
export default function PastChats({
  previousChat,
  menu,
  setMenu,
  currentMessages,
}) {
  const width = window.innerWidth;
  return (
    <Box className="previouschat-page">
      <Box className="previouschat-container-heading">
        {width < 475 ? <MenuIcon onClick={() => setMenu(!menu)} /> : ""}{" "}
        Conversation History
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box className="previouschat-container">
          {previousChat.map((chat, index) => {
            const key = `chat${index}`;
            return (
              <Box key={key} className="previous-chat">
                {chat.map((message, index) => (
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
                        <Box className="chat-box-title">{message.sender}</Box>
                        <div className="chat-box-text">{message.message}</div>
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
              </Box>
            );
          })}
          {currentMessages.map((message, index) => (
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
                  <Box className="chat-box-title">{message.sender}</Box>
                  <div className="chat-box-text">{message.message}</div>
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
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputBar disabled={true} />
        </Box>
        {/* <form style={{ width: "100%" }}>
          <Box className="chat-bar">
            <input name="userInput" />
            <button type="submit">Ask</button>
            <button
            //   onClick={() => handleSave()}
            >
              Save
            </button>
          </Box>
        </form> */}
      </Box>
    </Box>
  );
}
