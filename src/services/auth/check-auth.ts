import axios from "axios";
import { AUTH_KEY } from "../../libs/local-storage";

export const checkAuth = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/auth/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
