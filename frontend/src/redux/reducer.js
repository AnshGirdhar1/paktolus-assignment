const {
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  CREATE_POSTS_LOADING,
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_ERROR,
} = require("./actionTypes");

const initialState = {
  get: {
    loading: false,
    error: false,
    posts: [],
  },
  create: {
    loading: false,
    error: false,
    success: false,
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        get: {
          ...state.get,
          loading: payload,
        },
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        get: {
          ...state.get,
          posts: payload,
        },
      };
    }
    case GET_POSTS_ERROR: {
      return {
        ...state,
        get: {
          ...state.get,
          error: payload,
        },
      };
    }
    case CREATE_POSTS_LOADING: {
      return {
        ...state,
        create: {
          ...state.create,
          loading: payload,
        },
      };
    }
    case CREATE_POSTS_SUCCESS: {
      return {
        ...state,
        create: {
          ...state.create,
          success: payload,
        },
      };
    }
    case CREATE_POSTS_ERROR: {
      return {
        ...state,
        create: {
          ...state.create,
          loading: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
