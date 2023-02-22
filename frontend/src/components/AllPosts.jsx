import {
  Button,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdSearchOff } from "react-icons/md";

const AllPosts = ({ search }) => {
  const data = useSelector((state) => state.get.posts);
  const loading = useSelector((state) => state.get.loading);
  const [Id, setId] = useState("");

  const textAdjust = (id) => {
    if (id === Id) {
      setId("");
    } else {
      setId(id);
    }
  };
  return (
    <div className="all-posts">
      {loading ? (
        <Grid container className="loading-main">
          <CircularProgress />
        </Grid>
      ) : data?.length === 0 && search !== "" ? (
        <Grid container className="no-posts-message-box">
          <Grid item>
            <MdSearchOff color="rgb(209, 209, 209)" fontSize={"50px"} />
          </Grid>
          <Grid item>
            <Typography variant="h4">
              Sorry. No Results Found For "{search}"
            </Typography>
          </Grid>
          <img
            className="yellow-circle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Disc_Plain_yellow_dark.svg/252px-Disc_Plain_yellow_dark.svg.png"
            alt="lamp"
          />
          <img
            className="yellow-circle2"
            src="https://png.pngtree.com/png-clipart/20201029/ourlarge/pngtree-circle-clipart-purple-circle-png-image_2381944.jpg"
            alt="lamp"
          />
        </Grid>
      ) : data?.length === 0 ? (
        <Grid container className="no-posts-message-box">
          <Typography variant="h4">
            There are no posts. Please create one. The posts will show here
          </Typography>
          <img
            className="yellow-circle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Disc_Plain_yellow_dark.svg/252px-Disc_Plain_yellow_dark.svg.png"
            alt="lamp"
          />
          <img
            className="yellow-circle2"
            src="https://png.pngtree.com/png-clipart/20201029/ourlarge/pngtree-circle-clipart-purple-circle-png-image_2381944.jpg"
            alt="lamp"
          />
        </Grid>
      ) : (
        <Grid container gap={5} justifyContent="center">
          {data?.map((item) => {
            return (
              <Grid
                item
                className="post-card"
                key={item._id}
                style={
                  Id === item._id ? { height: "100%" } : { height: "170px" }
                }
              >
                <Grid item container>
                  <Grid item>
                    <FaUserAlt className="post-icon" />
                  </Grid>
                  <Grid item className="card-data">
                    <Typography className="capitalize bold pb-15">
                      {item.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>
                    <AiFillMessage className="post-icon" />
                  </Grid>
                  <Grid
                    item
                    className="card-data message-container"
                    style={
                      Id === item._id ? { height: "100%" } : { height: "40px" }
                    }
                  >
                    <Typography className="semi-bold">
                      {item.message}
                    </Typography>
                  </Grid>
                  <div>
                    {item.message.length > 150 ? (
                      <Button
                        className="read-btn"
                        variant="text"
                        onClick={(e) => textAdjust(item._id)}
                      >
                        {item._id === Id ? "Read Less.." : "Read More..."}
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </Grid>
              </Grid>
            );
          })}
          <img
            className="yellow-circle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Disc_Plain_yellow_dark.svg/252px-Disc_Plain_yellow_dark.svg.png"
            alt="lamp"
          />
          <img
            className="yellow-circle2"
            src="https://png.pngtree.com/png-clipart/20201029/ourlarge/pngtree-circle-clipart-purple-circle-png-image_2381944.jpg"
            alt="lamp"
          />
        </Grid>
      )}
    </div>
  );
};

export default AllPosts;
