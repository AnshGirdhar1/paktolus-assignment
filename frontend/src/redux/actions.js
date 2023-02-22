import {
  CREATE_POSTS_ERROR,
  CREATE_POSTS_LOADING,
  CREATE_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getPosts = (search) => async (dispatch) => {
  dispatch({
    type: GET_POSTS_LOADING,
    payload: true,
  });
  try {
    let res;
    if (search) {
      res = await axios.get(`http://localhost:7000/posts?name=${search}`);
    } else {
      res = await axios.get("http://localhost:7000/posts");
    }
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data.posts,
    });
  } catch (e) {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_POSTS_LOADING,
      payload: false,
    });
  }
};

export const createPosts = (body) => async (dispatch) => {
  dispatch({
    type: CREATE_POSTS_LOADING,
    payload: true,
  });
  try {
    await axios.post("http://localhost:7000/posts", body);
    dispatch({
      type: CREATE_POSTS_SUCCESS,
      payload: true,
    });
    dispatch(getPosts());
  } catch (e) {
    dispatch({
      type: CREATE_POSTS_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: CREATE_POSTS_LOADING,
      payload: false,
    });
  }
};
