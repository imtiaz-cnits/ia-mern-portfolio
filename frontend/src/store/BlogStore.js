import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:3060/api/v1";
axios.defaults.withCredentials = true;

const BlogStore = create((set) => ({
    error: null,
    isLoading: false,
    blogList: null,
    blogDetails: null,
    message: null,
    createBlogRequest: async (
        title,
        des,
        img,
        blogCategoryID,
    ) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/BlogCreate`, {
                title,
                des,
                img,
                blogCategoryID
            });
            set({ message: response.data.message, isLoading: false, error: null });
        } catch (error) {
            set({ isLoading: false, error: error });
        }
    },
    blogListRequest: async (latest) => {
        try {
            const response = await axios.get(`${API_URL}/BlogList`, {
                params: { latest }
            });
            set({ blogList: response.data["data"], error: null });
        } catch (error) {
            set({ error: error });
            console.log(error);
        }
    },
    blogDetailsRequest: async (BlogID) => {
        try {
            const response = await axios.get(`${API_URL}/BlogDetails/${BlogID}`);
            set({ blogDetails: response.data["data"], error: null });
        } catch (error) {
            set({ error: error });
            console.log(error);
        }
    }
}));

export default BlogStore;
