import { Link } from "react-router-dom";
import { fetcher, useSWR } from "../libs";
import { ProductType } from "../types";
import { ProductCard } from "./ui/card";

export default function ProductContainer() {
  const { data: products, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products?$lookup=*&$limit=6
  `,
    fetcher
  );

  if (error) {
    throw error;
  }

  if (!products) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-full py-3 px-11 border-[1px] border-custom-blush-pink">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-normal text-2xl text-custom-black-primary">
          Product Pilihan
        </h2>
        <Link to="/" className="text-custom-blue-secondary font-normal text-xl">
          Lihat Semua
        </Link>
      </div>
      <div className="flex flex-wrap justify-between gap-7">
        {products.map(({ _id, image, name, price }: ProductType) => {
          return (
            <ProductCard
              key={_id}
              id={_id}
              imageUrl={image[0]?.url}
              name={name}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
}
