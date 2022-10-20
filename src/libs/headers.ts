import { AUTH_KEY } from "./local-storage";

export const headers = {
  Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
};
