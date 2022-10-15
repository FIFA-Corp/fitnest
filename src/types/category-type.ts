import { ImageType } from "./image-type";

export type CategoryType = {
  _id: string;
  createdAt: string;
  image: ImageType[];
  name: string;
  updatedAt: string;
};
