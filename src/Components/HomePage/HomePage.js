import "./HomePage.css";
import Box from "@mui/material/Box";
export default function HomePage() {
  return (
    <Box className="home">
      <Box className="home-heading">
        <h2>How Can I Help You Today?</h2>
        <img src="/images/bot-logo.png" alt="home-logo" />
      </Box>
      <Box className="home-question-container">
        <Box className="home-question-row" sx={{ marginBottom: "1rem" }}>
          <Box className="home-question">
            <h3>Hi, what is the weather</h3>
            <p>Get immediate AI generated response</p>
          </Box>
          <Box className="home-question">
            <h3>Hi, what is my location</h3>
            <p>Get immediate AI generated response</p>
          </Box>
        </Box>
        <Box className="home-question-row" sx={{ marginTop: "1rem" }}>
          <Box className="home-question">
            <h3>Hi, what is the temperature</h3>
            <p>Get immediate AI generated response</p>
          </Box>
          <Box className="home-question last">
            <h3>Hi, how are you</h3>
            <p>Get immediate AI generated response</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
