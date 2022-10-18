import { ProductType } from "./product-type";
import { SizeQuantityType } from "./size-quantity-type";

export type CartType = {
  _id: string;
  quantity: number;
  productId: ProductType[];
  sizeQuantityId: SizeQuantityType[];
};
