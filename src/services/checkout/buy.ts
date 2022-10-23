import axios from "axios";
import { getHeaders } from "../../libs/headers";
import { FormCheckoutType } from "../../types";

export const buy = async (
  checkoutData: FormCheckoutType,
  cartsId: string[]
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/checkout`,
      {
        ...checkoutData,
        carts: cartsId,
      },
      {
        headers: getHeaders(),
      }
    );
    for (const cartId of cartsId) {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_API_URL}/carts/${cartId}`,
        {
          isCheckout: 1,
        },
        {
          headers: getHeaders(),
        }
      );
    }
    return response;
  } catch (error) {
    throw error;
  }
};
