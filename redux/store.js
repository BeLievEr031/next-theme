import { configureStore } from "@reduxjs/toolkit";
// import settingsSlice from "./slice​/settingsSlice";
import categorySlice from "./slice/categorySlice";
import postsSlice from "./slice/postsSlice";
// import sectionSlice from "./slice​/sectionSlice";
export const store = configureStore({
  reducer: {
    // settings: settingsSlice,
    category: categorySlice,
    posts: postsSlice,
    // sections: sectionSlice,
  },
});
