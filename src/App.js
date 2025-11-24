import "./App.css";
import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Side_Panel from "./Pages/Side_Panel/Side_Panel";
import Main_Chat from "./Pages/Main_Chat/Main_Chat";
import PastChats from "./Components/PastChats/PastChats";
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
    <div className="App">
      {/* {width < 475 ? ( */}
      {isMobile ? (
        // <Box>
        //   <Grid container>
        //     {/* <Grid size={0}>
        //       <Side_Panel />
        //     </Grid> */}
        //     <Grid size={12}>
        //       {menu ? (
        //         <Side_Panel menu={menu} setMenu={setMenu} />
        //       ) : (
        //         <Main_Chat menu={menu} setMenu={setMenu} />
        //       )}
        //     </Grid>
        //   </Grid>
        // </Box>
        <Box>
          <Grid container>
            {/* SIDE PANEL */}
            <Grid
              size={12}
              style={{
                display: menu ? "block" : "none",
              }}
            >
              <Side_Panel
                menu={menu}
                setMenu={setMenu}
                pastChat={pastChat}
                setPastChat={setPastChat}
              />
            </Grid>

            {/* MAIN CHAT */}
            <Grid
              size={12}
              style={{
                display: menu ? "none" : "block",
              }}
            >
              {pastChat ? (
                <PastChats
                  previousChat={previousChat}
                  menu={menu}
                  setMenu={setMenu}
                />
              ) : (
                <Main_Chat
                  previousChat={previousChat}
                  setPreviousChat={setPreviousChat}
                  menu={menu}
                  setMenu={setMenu}
                />
              )}
              {/* <Main_Chat
                previousChat={previousChat}
                setPreviousChat={setPreviousChat}
                menu={menu}
                setMenu={setMenu}
              /> */}
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box>
          <Grid container>
            <Grid size={2}>
              <Side_Panel pastChat={pastChat} setPastChat={setPastChat} />
            </Grid>
            <Grid size={10}>
              {pastChat ? (
                <PastChats previousChat={previousChat} />
              ) : (
                <Main_Chat
                  previousChat={previousChat}
                  setPreviousChat={setPreviousChat}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default App;
