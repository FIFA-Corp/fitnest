import { AUTH_KEY } from "./local-storage";

// once
export const headers = {
  Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
};

// every time being called
export const getHeaders = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
  };
};
