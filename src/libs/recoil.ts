import { atom, selector } from "recoil";

export const showCartState = atom<boolean>({
  key: "ShowCartState",
  default: false,
});

export const uidState = atom<string>({
  key: "UidState",
  default: "",
});
