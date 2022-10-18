import { BrandType } from "./brand-type";
import { CategoryType } from "./category-type";
import { ImageType } from "./image-type";
import { SizeQuantityType } from "./size-quantity-type";

export type ProductType = {
  _id: string;
  brandId: BrandType[];
  categoryId: CategoryType[];
  description: string;
  image: ImageType[];
  name: string;
  price: number;
  sizeQuantity: SizeQuantityType[];
  createdAt: string;
  updatedAt: string;
};
