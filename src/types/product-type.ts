import { BrandType } from "./brand-type";
import { CategoryType } from "./category-type";
import { ImageType } from "./image-type";

export type ProductType = {
  _id: string;
  brandId: BrandType[];
  categoryId: CategoryType[];
  description: string;
  image: ImageType[];
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};
