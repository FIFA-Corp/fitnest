import { AUTH_KEY } from "./local-storage";

// every time being called
export const getHeaders = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
  };
};
