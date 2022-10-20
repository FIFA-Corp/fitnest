import axios from "axios";
import { useEffect } from "react";
import Banner from "../component/banner";
import BrandContainer from "../component/brand-container";
import CategoryContainer from "../component/category-container";
import ProductContainer from "../component/product-container";
import { AUTH_KEY } from "../libs/local-storage";

export const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/auth/user`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
            },
          }
        );
        console.log({ res });
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <Banner />
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
