import HomePage from "../../Components/HomePage/HomePage";
import "./Main_Chat.css";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import ChatPage from "../../Components/ChatPage/ChatPage";
import { useState } from "react";
import PastChats from "../../Components/PastChats/PastChats";
import InputBar from "../../Components/InputBar/InputBar";

export default function Main_Chat({
  previousChat,
  setPreviousChat,
  menu,
  setMenu,
}) {
  const width = window.innerWidth;
  const [start, setStart] = useState(true);
  const [messages, setMessages] = useState([]);
  // const handleMessage = (e) => {
  //   const time = new Date().toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: true,
  //   });
  //   e.preventDefault();
  //   const userInput = e.target.userInput.value;
  //   const userMessage = { sender: "You", message: userInput, time: time };
  //   const aiMessage = { sender: "Soul AI", message: "Chala ja", time: time };
  //   setMessages([...messages, userMessage, aiMessage]);
  //   // e.target.userInput.value = "";
  // };
  // const handleSave = () => {
  //   setPreviousChat([...previousChat, messages]);
  //   localStorage.setItem("chats", JSON.stringify(previousChat));
  //   setMessages([]);
  // };
  console.log(messages);
  return (
    <Box className="chat-container">
      <Box className="main-heading">
        <header>
          <h1>
            {width < 475 ? <MenuIcon onClick={() => setMenu(!menu)} /> : ""} Bot
            AI
          </h1>
        </header>
      </Box>
      <Box className="container">
        <Box sx={{ width: "100%" }}>
          {start ? <HomePage /> : <ChatPage messages={messages} />}
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputBar
            messages={messages}
            setMessages={setMessages}
            previousChat={previousChat}
            setPreviousChat={setPreviousChat}
            setStart={setStart}
            disabled={false}
          />
        </Box>
        {/* <form onSubmit={handleMessage} style={{ width: "100%" }}>
          <Box className="chat-bar">
            <input name="userInput" />
            <button type="submit">Ask</button>
            <button onClick={() => handleSave()}>Save</button>
          </Box>
        </form> */}
      </Box>
    </Box>
  );
}
