import axios from "axios";
import {
  checkLocalStorageAvailable,
  STORAGE_KEY,
} from "../../libs/local-storage";

export const addToCart = async (
  productId: string,
  sizeQuantityId: string,
  quantity: number
) => {
  try {
    if (!checkLocalStorageAvailable()) {
      await addLocalStorage();
    }

    const cartStorageId = localStorage.getItem(STORAGE_KEY);

    const cart = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API_URL
      }/carts?$lookup=*&cartStorageId=${localStorage.getItem(
        STORAGE_KEY
      )}&productId=${productId}&sizeQuantityId=${sizeQuantityId}`
    );

    if (cart.data.length > 0) {
      const cartId = cart.data[0]._id;
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_API_URL}/carts/${cartId}`,
        {
          quantity: cart.data[0].quantity + quantity,
        }
      );
    } else {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/carts`,
        {
          isCheckout: 0,
          productId: [productId],
          sizeQuantityId: [sizeQuantityId],
          quantity,
          cartStorageId: [cartStorageId],
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const addLocalStorage = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_API_URL}/cartStorage`,
    {
      name: new Date().toString(),
    }
  );

  const cartStorageId = response.data._id;
  localStorage.setItem(STORAGE_KEY, cartStorageId);
};
