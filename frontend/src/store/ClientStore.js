import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:3060/api/v1";
axios.defaults.withCredentials = true;

const ClientStore = create((set) => ({
  error: null,
  isLoading: false,
  client: null,
  message: null,
  createClient: async (client_name, client_img, client_logo, company) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/ClientCreate`, {
        client_name,
        client_img,
        client_logo,
        company,
      });
      set({ message: response.data.message, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error });
    }
  },
}));

export default ClientStore;
