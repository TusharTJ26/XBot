import { useState } from "react";
import "./InputBar.css";
import Box from "@mui/material/Box";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
export default function InputBar({
  messages,
  setMessages,
  previousChat,
  setPreviousChat,
  setStart,
  disabled,
}) {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleMessage = (e) => {
    if (disabled) return;
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    e.preventDefault();
    const userInput = e.target.userInput.value;
    if (userInput.trim() == "") {
      return;
    }
    setStart(false);
    const userMessage = { sender: "You", message: userInput, time: time };
    const aiMessage = { sender: "Soul AI", message: "Chala ja", time: time };
    setMessages([...messages, userMessage, aiMessage]);
    // e.target.userInput.value = "";
  };
  const handleSave = () => {
    if (disabled) return;

    // setPreviousChat([...previousChat, messages]);
    // localStorage.setItem("chats", JSON.stringify(previousChat));

    // to use with form
    setPreviousChat((prev) => {
      const updated = [...prev, messages]; // messages is still correct here
      localStorage.setItem("chats", JSON.stringify(updated));
      return updated;
    });
    setMessages([]);
  };
  return (
    <Box>
      <form onSubmit={handleMessage} style={{ width: "100%" }}>
        <Box className="chat-bar">
          <input name="userInput" />
          <button type="submit">Ask</button>
          {/* <button onClick={() => handleSave()}>Save</button> */}
          <button onClick={() => setOpen(true)}>Save</button>
        </Box>
      </form>
      {open ? (
        <FeedbackForm
          open={open}
          feedbackMessage={feedbackMessage}
          setFeedbackMessage={setFeedbackMessage}
          setOpen={setOpen}
          handleSave={handleSave}
          handleClose={() => setOpen(false)}
        />
      ) : (
        ""
      )}
    </Box>
  );
}
