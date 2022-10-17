import BrandContainer from "../component/brand-container";
import CategoryContainer from "../component/category-container";
import ProductContainer from "../component/product-container";

export const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <BrandContainer />
      <ProductContainer />
      <CategoryContainer />
      <div
        className="cursor-pointer bg-custom-yellow py-2 text-center"
        onClick={() => {
          document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        Kembali Keatas
      </div>
    </div>
  );
};
