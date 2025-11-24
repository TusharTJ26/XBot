import HomePage from "../../Components/HomePage/HomePage";
import "./Main_Chat.css";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export default function Main_Chat({ menu, setMenu }) {
  const width = window.innerWidth;
  return (
    <Box className="chat-container">
      <Box className="main-heading">
        {width < 475 ? <MenuIcon onClick={() => setMenu(!menu)} /> : ""} Bot AI
      </Box>
      <Box className="container">
        <Box sx={{ width: "100%" }}>
          <HomePage />
        </Box>
        <Box className="chat-bar">
          <input />
          <button>Ask</button>
          <button>Save</button>
        </Box>
      </Box>
    </Box>
  );
}
