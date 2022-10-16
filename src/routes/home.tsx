import BrandContainer from "../component/brand-container";
import CategoryContainer from "../component/category-container";
import ProductContainer from "../component/product-container";

export const Home = () => {
  return (
    <div>
      <h1>Home page code here</h1>
      <CategoryContainer />
      <ProductContainer />
      <BrandContainer />
    </div>
  );
};
