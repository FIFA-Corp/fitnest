import { Link } from "react-router-dom";
import { fetcher, useSWR } from "../libs";
import { ProductType } from "../types";
import { LoadingUi } from "./loading";
import { ProductCard } from "./ui/card";

export default function ProductContainer() {
  const { data: products, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products?$lookup=*&$limit=4
  `,
    fetcher
  );

  if (error) {
    throw error;
  }

  if (!products) {
    return <LoadingUi />;
  }

  return (
    <div className="w-full py-3 px-11">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-normal text-custom-black-primary">
          Produk Pilihan
        </h2>
        <Link
          to="/products/"
          className="text-xl font-normal text-custom-blue-secondary"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="flex justify-between gap-7">
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
