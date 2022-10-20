import axios from "axios";
import { headers } from "../../libs/headers";
import { AUTH_KEY } from "../../libs/local-storage";

export const logout = async () => {
  await axios.post(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/logout`,
    {},
    {
      headers,
    }
  );
  localStorage.removeItem(AUTH_KEY);
};
