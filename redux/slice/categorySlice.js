import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../http";

import { STATUS } from "./settingSlice";

const initialState = {
  data: [],
  status: false,
};

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, actions) => {
      const { data } = actions.payload;
      state.data = data;
    },
    setStatus: (state, actions) => {
      state.status = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, setStatus } = CategorySlice.actions;

export default CategorySlice.reducer;

// Thunks
export function fetchCategories(page = 1, limit = 10, order = 1) {
  return async function fetchCategoriesThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await getAllCategories(page, limit, order);
      dispatch(setCategories(res.data));
      // console.log("🚀🚀🚀🚀🚀🚀", res.data);
      dispatch(setStatus(STATUS.SECCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.FAILED));
    }
  };
}

// search
// export function searchPost(data) {
//   return async function searchPostThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await searchPostApi({ keyword: data });
//       dispatch(setPosts(res.data));
//       dispatch(setStatus(STATUS.SECCESS));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.FAILED));
//     }
//   };
// }

// get single post
// export function getSinglePost(id) {
//   return async function getSinglePostThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await getPost(id);
//       dispatch(setSinglePost(res.data));
//       dispatch(setStatus(STATUS.SECCESS));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUS.FAILED));
//     }
//   };
// }
