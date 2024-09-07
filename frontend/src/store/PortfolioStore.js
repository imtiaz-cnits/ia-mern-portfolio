import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:3060/api/v1";
axios.defaults.withCredentials = true;

const PortfolioStore = create((set) => ({
  error: null,
  isLoading: false,
  portfolioList: null,
  message: null,
  createPortfolioRequest: async (
    title,
    sub_title,
    img1,
    img2,
    portfolioCategoryID,
    clientID,
    des
  ) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/PortfolioCreate`, {
        title,
        sub_title,
        img1,
        img2,
        portfolioCategoryID,
        clientID,
        des,
      });
      set({ message: response.data.message, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error });
    }
  },
  portfolioListRequest: async (latest) => {
    try {
      const response = await axios.get(`${API_URL}/PortfolioList`, {
        params: { latest }
      });
        set({ portfolioList: response.data["data"], error: null });
    } catch (error) {
      set({ error: error });
      console.log(error);
    }
  },
}));

export default PortfolioStore;
