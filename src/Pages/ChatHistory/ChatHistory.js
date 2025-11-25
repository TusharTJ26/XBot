import PastChats from "../../Components/PastChats/PastChats";
import Side_Panel from "../Side_Panel/Side_Panel";
import "./ChatHistory.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function ChatHistory({
  currentMessages,
  //   pastChat,
  previousChat,
  //   setPastChat,
  menu,
  setMenu,
}) {
  console.log(currentMessages);
  const isMobile = useMediaQuery("(max-width:475px)");
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
                // pastChat={pastChat}
                // setPastChat={setPastChat}
              />
            </Grid>

            {/* MAIN CHAT */}
            <Grid
              size={12}
              style={{
                display: menu ? "none" : "block",
              }}
            >
              <PastChats
                previousChat={previousChat}
                menu={menu}
                setMenu={setMenu}
                currentMessages={currentMessages}
              />

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
              <Side_Panel
              //   pastChat={pastChat}
              //   setPastChat={setPastChat}
              />
            </Grid>
            <Grid size={10}>
              <PastChats
                previousChat={previousChat}
                currentMessages={currentMessages}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
