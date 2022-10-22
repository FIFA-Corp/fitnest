import axios from "axios";
import { AUTH_KEY } from "../../libs/local-storage";
import { RegisterType } from "../../types";

export const register = async (registerData: RegisterType) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/auth/register`,
      registerData
    );
    localStorage.setItem(AUTH_KEY, res.data.token);
    return res;
  } catch (error) {
    throw error;
  }
};
