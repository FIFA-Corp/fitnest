import { ImageType } from "./imageType";

export type CategoryType = {
  _id: string;
  createdAt: string;
  image: ImageType[];
  name: string;
  updatedAt: string;
};
