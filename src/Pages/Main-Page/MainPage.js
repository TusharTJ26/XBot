import Main_Chat from "../Main_Chat/Main_Chat";
import Side_Panel from "../Side_Panel/Side_Panel";
import "./MainPage.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ({
  menu,
  setMenu,
  //   pastChat,
  //   setPastChat,
  previousChat,
  setPreviousChat,
  messages,
  setMessages,
}) {
  const isMobile = useMediaQuery("(max-width:475px)");
  return (
    <div>
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
              <Main_Chat
                previousChat={previousChat}
                setPreviousChat={setPreviousChat}
                menu={menu}
                setMenu={setMenu}
                messages={messages}
                setMessages={setMessages}
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
              //   pastChat={pastChat} setPastChat={setPastChat}
              />
            </Grid>
            <Grid size={10}>
              <Main_Chat
                previousChat={previousChat}
                setPreviousChat={setPreviousChat}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
