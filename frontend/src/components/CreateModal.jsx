import {
  Button,
  Dialog,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createPosts } from "../redux/actions";

const CreateModal = ({ open, close, setOpen }) => {
  const messageRef = useRef(null);
  const dispatch = useDispatch();

  const submitMessage = (e) => {
    e.preventDefault();
    close();
    dispatch(
      createPosts({
        name: JSON.parse(localStorage.getItem("postUser")).postUser,
        message: messageRef.current.value,
      })
    );
  };
  return (
    <Dialog open={open} onClose={close} maxWidth="lg">
      <Grid container className="create-modal">
        <Grid item>
          <form onSubmit={(e) => submitMessage(e)}>
            <Grid item>
              <Grid container className="modal-heading-container">
                <Grid item>
                  <Typography variant="h5" className="bold">
                    Create Post
                  </Typography>
                </Grid>
                <Grid item>
                  <MdClose
                    color="#4637a9"
                    fontSize="25px"
                    cursor="pointer"
                    onClick={close}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <FormLabel className="bold">Message</FormLabel>
              </Grid>
              <Grid item>
                <TextField
                  className="text-message"
                  multiline
                  minRows={5}
                  maxRows={5}
                  inputRef={messageRef}
                  inputProps={{ style: { width: "300px" } }}
                  required
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className="submit-btn"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateModal;
