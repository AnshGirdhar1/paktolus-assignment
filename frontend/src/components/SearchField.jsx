import React, { useRef } from "react";
import "../App.css";
import { Button, Grid, TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions";

const SearchField = ({ setSearch }) => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchRef.current.value);
    dispatch(getPosts(searchRef.current.value));
  };
  return (
    <form onSubmit={(e) => searchSubmit(e)}>
      <Grid container className="search-bar">
        <Grid item>
          <TextField
            className="border-20"
            inputProps={{
              style: {
                padding: "10px",
                background: "#f9f2ff",
                borderRadius: "20px !important",
              },
            }}
            inputRef={searchRef}
            placeholder="Search by username.."
          />
        </Grid>
        <Grid item>
          <Button
            className="search-btn"
            variant="contained"
            size="large"
            type="submit"
          >
            <BiSearch fontSize="25px" />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchField;
