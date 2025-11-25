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
  const replies = {
    hi: "Hello User. How can i assist you today?",
    "hi, what is the weather":
      "Sorry, i can't access your location. Need any other help?",
    "hi, what is my location":
      "Sorry, i can't access your location. Need any other help?",
    "hi, what is the temprature":
      "Sorry, i can't access your location but you can use google",
    "hi, how are you?":
      "I am fine, Thanks for asking. How are you? How can i assist you today",
    "can you explain RESTful APIs?":
      "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.",
  };
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
    const reply = replies[userInput.toLowerCase()];
    // const reply = replies[userInput];
    const userMessage = { sender: "You", message: userInput, time: time };
    const aiMessage = {
      sender: "Soul AI",
      message: reply ? reply : "Sorry, Did not understand your query!",
      time: time,
    };
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
          <input name="userInput" placeholder="Message Bot AI..." />
          <button type="submit">Ask</button>
          {/* <button onClick={() => handleSave()}>Save</button> */}
          <button type="button" onClick={() => setOpen(true)}>
            Save
          </button>
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
