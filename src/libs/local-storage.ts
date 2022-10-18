export const STORAGE_KEY = "cart-storage";

export const checkLocalStorageAvailable = () => {
  const cartStorage = localStorage.getItem(STORAGE_KEY);

  if (cartStorage) {
    return true;
  }

  return false;
};
