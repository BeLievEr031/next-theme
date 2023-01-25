import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPosts,
  getAllBreakingNews,
  searchPostApi,
  getPostByID,
  getPostBySlug,
  getPostByCategory,
  getMostViewPosts,
} from "../../http";

import { STATUS } from "./settingSlice";

const initialState = {
  data: [],
  breakingNew: [],
  singlePost: {},
  postsByCategory: [],
  mostViewPost: [],
  status: false,
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, actions) => {
      const { data } = actions.payload;
      state.data = data;
    },
    setStatus: (state, actions) => {
      state.status = actions.payload;
    },
    setBreakingNews: (state, actions) => {
      state.breakingNew = actions.payload;
    },
    setSinglePost: (state, actions) => {
      state.singlePost = actions.payload;
    },
    setPostByCategory: (state, actions) => {
      state.postsByCategory = actions.payload;
    },
    setMostViewPost: (state, actions) => {
      state.mostViewPost = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  setStatus,
  setBreakingNews,
  setSinglePost,
  setPostByCategory,
  setMostViewPost,
} = PostsSlice.actions;

export default PostsSlice.reducer;

// Thunks
export function fetchPosts(page = 1, limit = 25) {
  return async function fetchPostsThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await getAllPosts(page, limit);
      dispatch(setPosts(res.data));
      dispatch(setStatus(STATUS.SECCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}

// fetch all recent--> breaking News
export function fetchBreakingNews(limit) {
  return async function fetchBreakingNewsThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await getAllBreakingNews(limit);
      // console.log("🚀🚀🚀🚀", res.data);
      dispatch(setBreakingNews(res.data.data));
      dispatch(setStatus(STATUS.SECCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}

// search;
export function searchPost(data) {
  return async function searchPostThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await searchPostApi({ keyword: data });
      // console.log(res.data);
      dispatch(setPosts(res.data));
      dispatch(setStatus(STATUS.SECCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}

// search a posts by a category
export function searchPostByCategory(category) {
  return async function searchPostByCategoryThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      // alert(category)
      // console.log();

      const res = await getPostByCategory(category);
      // console.log("🚀🚀🚀🚀🚀🚀😜😜😜", res.data.data);
      // dispatch(setPostByCategory(res.data.data));
      // dispatch(setStatus(STATUS.SECCESS));
      return res.data.data;
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}

// get single post By ID
// export function getSinglePost(id) {
//   return async function getSinglePostThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await getPostByID(id);
//       console.log("🚀🚀🚀🚀🚀", res.data);
//       dispatch(setSinglePost(res.data));
//       dispatch(setStatus(STATUS.SECCESS));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.FAILED));
//     }
//   };
// }

// get single post By Slug
export function getSinglePost(slug) {
  return async function getSinglePostThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await getPostBySlug(slug);
      // console.log("🚀🚀🚀🚀🚀", res.data);
      dispatch(setSinglePost(res.data));
      dispatch(setStatus(STATUS.SECCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}

// get most viewed post
export function getMostViewPost() {
  return async function getMostViewPostThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await getMostViewPosts();
      // console.log("🚀🚀🚀🚀🚀", res.data);
      dispatch(setMostViewPost(res.data.data));
      dispatch(setStatus(STATUS.SECCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}
