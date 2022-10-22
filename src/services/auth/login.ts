import axios from "axios";

import { AUTH_KEY } from "../../libs/local-storage";
import { LoginType } from "../../types";

export const login = async (loginData: LoginType) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/auth/login`,
      loginData
    );

    const token = res?.data?.token;

    localStorage.setItem(AUTH_KEY, token);

    return token;
  } catch (error) {
    throw error;
  }
};
