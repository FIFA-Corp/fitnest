import axios from "axios";

export const deleteCart = async (cartId: string) => {
  await axios.delete(`${import.meta.env.VITE_BACKEND_API_URL}/carts/${cartId}`);
};
