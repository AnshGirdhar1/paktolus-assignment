// import logo from "./logo.svg";
import "./App.css";
import SearchField from "./components/SearchField";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions";
import AllPosts from "./components/AllPosts";
import CreateModal from "./components/CreateModal";
import SubmitNameModal from "./components/SubmitNameModal";

function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [search, setSearch] = useState("");
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("postUser"))
  );

  useEffect(() => {
    if (name === null) {
      setOpen(true);
    }
    dispatch(getPosts());
  }, []);

  const nameSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setName({ postUser: nameRef.current.value });
    localStorage.setItem(
      "postUser",
      JSON.stringify({ postUser: nameRef.current.value })
    );
  };

  const closeCreateModal = () => {
    setOpenCreateModal(false);
  };

  const createModalOpen = () => {
    if (name === null) {
      alert("Please Fill your name first to continue creating post");
      setOpen(true);
      return;
    }
    setOpenCreateModal(true);
  };

  return (
    <div className="App">
      <Grid container className="top-header">
        <SearchField setSearch={setSearch} />
        <Grid item className="header-create">
          <Typography variant="h6">Hi {name?.postUser}</Typography>
          <Button
            className="capitalize"
            variant="contained"
            size="large"
            onClick={createModalOpen}
          >
            Create
          </Button>
          <Button
            className="capitalize"
            variant="contained"
            size="large"
            onClick={() => setOpen(true)}
          >
            Change User
          </Button>
        </Grid>
      </Grid>
      <AllPosts search={search} />
      <SubmitNameModal
        open={open}
        setOpen={setOpen}
        nameSubmit={nameSubmit}
        nameRef={nameRef}
      />
      <CreateModal
        open={openCreateModal}
        close={closeCreateModal}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
