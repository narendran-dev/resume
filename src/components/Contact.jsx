import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import {
  Button,
  Paper,
  Slide,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8isxyfd",
        "template_epahnel",
        form.current,
        "CRK4LKKwtgSygd69a"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            required
            fullWidth
            margin="dense"
            label="Name"
            name="user_name"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            margin="dense"
            label="Email"
            name="user_email"
            variant="outlined"
          />

          <Textarea
            label="Message"
            fullWidth
            margin="dense"
            placeholder="Message"
            rowsMin={3}
          />
          <SubmitButton type="submit" variant="contained">
            Submit
          </SubmitButton>
        </form>
      </FormContainer>
    </Slide>
  );
};

export default Contact;

const FormContainer = styled(Paper)({
  display: "flex",
  alignItems:'center',
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  padding: 10,
  fontSize: 16,
  zIndex:1
});

const SubmitButton = styled(Button)({
  marginTop: "2rem",
  cursor: "pointer",
  background: "rgb(249, 105, 14)",
  color: "white",
  border: "none",
});
const Textarea = styled(TextareaAutosize)({
  width: "100%",
  maxHeight: 100,
  marginTop: "0.5rem",
  minHeight: 100,
  padding: 7,
  outline: "none",
  borderRadius: 5,
  border: "1px solid rgb(220, 220, 220)",
  "&:focus": {
    border: "2px solid rgba(0, 206, 158, 1)",
  },
});
