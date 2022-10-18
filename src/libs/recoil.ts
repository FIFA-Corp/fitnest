import { atom } from "recoil";

export const showCartState = atom<boolean>({
  key: "ShowCartState",
  default: false,
});
