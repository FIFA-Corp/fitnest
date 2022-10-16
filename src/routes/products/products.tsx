import { Link } from "react-router-dom";
import { fetcher, useSWR } from "../../libs";

import { ProductCard } from "../../component/ui/card";
import { ProductType } from "../../types";

export const Products = () => {
  const { data: products, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products?$lookup=*`,
    fetcher
  );

  if (error) return <div>Failed To Load Products</div>;
  if (!products) return <div>Loading Product...</div>;

  return (
    <div className="w-full bg-slate-50">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-normal text-sm text-custom-black-primary">
          Semua Produk
        </h2>
        <Link to="/" className="text-custom-blue-secondary font-normal text-sm">
          Kembali Ke Home
        </Link>
      </div>
      <div className="grid grid-cols-6 justify-center gap-6 px-5">
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
};
