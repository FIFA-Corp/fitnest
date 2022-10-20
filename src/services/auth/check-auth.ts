import axios from "axios";
import { headers } from "../../libs/headers";

export const checkAuth = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/auth/user`, {
      headers,
    });
    return true;
  } catch (error) {
    return false;
  }
};
