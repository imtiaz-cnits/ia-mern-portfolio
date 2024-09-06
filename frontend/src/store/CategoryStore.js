import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:3060/api/v1";
axios.defaults.withCredentials = true;

const CategoryStore = create((set) => ({
  error: null,
  isLoading: false,
  category: null,
  message: null,
  createBlogCategory: async (category_name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/BlogCategoryCreate`, {
        category_name,
      });
      set({ message: response.data.message, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error });
    }
  },
}));

export default CategoryStore;
