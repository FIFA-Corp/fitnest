import axios from "axios";
import { getHeaders } from "../../libs/headers";

export const checkAuth = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/auth/user`, {
      headers: getHeaders(),
    });
    return true;
  } catch (error) {
    return false;
  }
};
