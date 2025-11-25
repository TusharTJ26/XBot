import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Side_Panel from "./Pages/Side_Panel/Side_Panel";
import Main_Chat from "./Pages/Main_Chat/Main_Chat";
import PastChats from "./Components/PastChats/PastChats";
import MainPage from "./Pages/Main-Page/MainPage";
import ChatHistory from "./Pages/ChatHistory/ChatHistory";
function App() {
  const isMobile = useMediaQuery("(max-width:475px)");
  const [previousChat, setPreviousChat] = useState([]);
  const [pastChat, setPastChat] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("chats");
    if (saved) {
      // Parse saved bookings (should be an array)
      setPreviousChat(JSON.parse(saved));
    } else {
      // Initialize localStorage with an empty array
      localStorage.setItem("chats", JSON.stringify([]));
    }
  }, []);

  const [menu, setMenu] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/history"
          element={
            <ChatHistory
              pastChat={pastChat}
              setPastChat={setPastChat}
              menu={menu}
              setMenu={setMenu}
              previousChat={previousChat}
            />
          }
        />
        <Route
          path="/"
          element={
            <MainPage
              menu={menu}
              setMenu={setMenu}
              previousChat={previousChat}
              setPreviousChat={setPreviousChat}
              pastChat={pastChat}
              setPastChat={setPastChat}
            />
          }
        />
      </Routes>
      {/* <MainPage
        menu={menu}
        setMenu={setMenu}
        previousChat={previousChat}
        setPreviousChat={setPreviousChat}
        pastChat={pastChat}
        setPastChat={setPastChat}
      /> */}
      {/* <ChatHistory
        pastChat={pastChat}
        setPastChat={setPastChat}
        menu={menu}
        setMenu={setMenu}
        previousChat={previousChat}
      /> */}
    </div>
  );
}

export default App;
