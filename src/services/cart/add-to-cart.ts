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

    console.log(response);
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
