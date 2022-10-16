import BrandContainer from "../component/brand-container";
import CategoryContainer from "../component/category-container";
import ProductContainer from "../component/product-container";

export const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <CategoryContainer />
      <ProductContainer />
      <BrandContainer />
    </div>
  );
};
