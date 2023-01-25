import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // tenant_token: "63aa96bbf8c7885944e885e9",
  },
});

// list all endpoints

// setting endpoints
export const getSetting = () => api.get("/settings");
export const getAllCategories = (page = 1, limit = 10, order = -1) =>
  api.get(`/categories?page=${page}&limit=${limit}&order=${order}`);
export const searchPostApi = (data) => api.post("/posts/search", data);

// post endpoints
export const getAllPosts = (page, limit) =>
  api.get(`/posts?page=${page}&limit=${limit}`);

export const getAllBreakingNews = (limit) =>
  api.get(`/posts/breaking?limit=${limit}`);
export const getPostByID = (id) => api.get(`/posts/${id}`);
export const getPostBySlug = (slug) => api.get(`/post/${slug}`);
export const getPostByCategory = (category) =>
  api.get(`/post/search/${category}`);

export const getMostViewPosts = () => api.get(`/posts/mostview`);

// fetching sections
export const getMostRecentSection = (keyword) =>
  api.get(`/sections/search/${keyword}`);

// Interceptor for handling 401 errors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true;
      return api.request(originalRequest);
    }

    throw error;
  }
);

export default api;
