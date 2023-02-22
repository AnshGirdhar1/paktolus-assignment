import { Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";

const SubmitNameModal = ({ open, setOpen, nameSubmit, nameRef }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="dialog-main">
      <Grid
        container
        className="dialog"
        direction="column"
        justifyContent="center"
      >
        <Grid item className="dialog-title">
          <Typography variant="h5" className="bold">
            Please tell us your good name
          </Typography>
        </Grid>
        <form onSubmit={nameSubmit}>
          <Grid item container className="dialog-input" direction="column">
            <TextField
              inputProps={{ style: { padding: "10px" } }}
              inputRef={nameRef}
              required
            />
            <Button variant="contained" type="submit" className="submit-btn">
              Submit
            </Button>
            <MdClose
              className="icon-with-position"
              onClick={() => setOpen(false)}
            />
          </Grid>
        </form>
      </Grid>
    </Dialog>
  );
};

export default SubmitNameModal;
