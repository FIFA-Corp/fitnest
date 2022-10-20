import axios from "axios";

import { AUTH_KEY } from "../../libs/local-storage";

export const logout = async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/auth/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}` },
      }
    );
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error("Failed to logout");
  }
};
