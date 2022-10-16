import BrandContainer from "../component/brand-container";
import CategoryContainer from "../component/category-container";
import ProductContainer from "../component/product-container";

export const Home = () => {
  return (
    <div>
      <CategoryContainer />
      <ProductContainer />
      <BrandContainer />
    </div>
  );
};
