import { ImageType } from "./image-type";

export type BrandType = {
  _id: string;
  createdAt: string;
  description?: string;
  image: ImageType[];
  name: string;
  updatedAt: string;
};
