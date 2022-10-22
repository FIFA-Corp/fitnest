import axios from "axios";
import { getHeaders } from "../../libs/headers";

export const deleteCart = async (cartId: string) => {
  await axios.delete(
    `${import.meta.env.VITE_BACKEND_API_URL}/carts/${cartId}`,
    {
      headers: getHeaders(),
    }
  );
};
