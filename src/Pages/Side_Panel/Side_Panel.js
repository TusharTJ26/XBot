import "./Side_Panel.css";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
export default function Side_Panel({ menu, setMenu }) {
  const width = window.innerWidth;
  const navigate = useNavigate();
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
        <Box
          className="side-panel-edit"
          // onClick={() => navigate("/")}
        >
          <a href="/">
            <img src="/images/edit-icon.png" alt="edit" />
          </a>
        </Box>
      </Box>
      <Box className="past-conversation-section">
        <Box
          className="past-conversation"
          // onClick={() => navigate("/history")}
        >
          <a href="/history">Past conversation</a>
        </Box>
      </Box>
    </Box>
  );
}
