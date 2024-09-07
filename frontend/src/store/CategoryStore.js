import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:3060/api/v1";
axios.defaults.withCredentials = true;

const CategoryStore = create((set) => ({
  error: null,
  isLoading: false,
  categoryList: null,
  message: null,
  createPortfolioCategory: async (category_name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/PortfolioCategoryCreate`, {
        category_name,
      });
      set({ message: response.data.message, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error });
    }
  },
  portfolioCategoryRequest: async () => {
    try {
      const response = await axios.get(`${API_URL}/PortfolioCategoryList`);
      set({ categoryList: response.data["data"], error: null });
    } catch (error) {
      set({ error: error });
    }
  },
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
  blogCategoryRequest: async () => {
    try {
      const response = await axios.get(`${API_URL}/BlogCategoryList`);
      set({ categoryList: response.data["data"], error: null });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default CategoryStore;
