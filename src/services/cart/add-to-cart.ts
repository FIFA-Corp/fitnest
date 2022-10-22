import axios from "axios";
import { getHeaders } from "../../libs/headers";

export const addToCart = async (
  productId: string,
  sizeQuantityId: string,
  quantity: number,
  uid: string
) => {
  try {
    const cart = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API_URL
      }/carts?$lookup=*&productId=${productId}&sizeQuantityId=${sizeQuantityId}&userId=${uid}`
    );

    if (cart.data.length > 0) {
      const cartId = cart.data[0]._id;
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_API_URL}/carts/${cartId}`,
        {
          quantity: cart.data[0].quantity + quantity,
        },
        {
          headers: getHeaders(),
        }
      );
      if (response.status >= 300) {
        throw new Error("anauthorizerd");
      }
    } else {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/carts`,
        {
          isCheckout: 0,
          productId: [productId],
          sizeQuantityId: [sizeQuantityId],
          quantity,
        },
        {
          headers: getHeaders(),
        }
      );
      if (response.status >= 300) {
        throw new Error("anauthorizerd");
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
