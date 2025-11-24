import "./Side_Panel.css";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
export default function Side_Panel({ menu, setMenu, pastChat, setPastChat }) {
  const width = window.innerWidth;
  return (
    <Box className="side-panel">
      <Box className="side-panel-nav">
        <Box className="side-panel-icon">
          {width < 475 ? (
            <MenuIcon onClick={() => setMenu(!menu)} />
          ) : (
            <img src="/images/bot-logo.png" alt="logo" />
          )}
        </Box>
        <Box className="side-panel-text">New Chat</Box>
        <Box className="side-panel-edit" onClick={() => setPastChat(false)}>
          <img src="/images/edit-icon.png" alt="edit" />
        </Box>
      </Box>
      <Box className="past-conversation-section">
        <Box className="past-conversation" onClick={() => setPastChat(true)}>
          Past conversation
        </Box>
      </Box>
    </Box>
  );
}
