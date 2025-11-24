import "./FeedbackForm.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export default function FeedbackForm({
  open,
  setOpen,
  handleSave,
  handleClose,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    // p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="feedback-container">
          <Box className="feedback-header">
            <Box>
              <img src="/images/bulb.png" />
              Provide Additional Feedback
            </Box>
            <Box
              className="feedback-close"
              onClick={() => {
                handleClose();
              }}
            >
              X
            </Box>
          </Box>
          <Box className="feedback-text">
            <input type="text" />
          </Box>
          <Box className="feedback-submit">
            <button
              type="button"
              onClick={() => {
                handleSave();
                handleClose();
              }}
            >
              Submit
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
