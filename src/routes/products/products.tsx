import { Link, useSearchParams } from "react-router-dom";
import { fetcher, useSWR } from "../../libs";

import { ProductCard } from "../../component/ui/card";
import { ProductType } from "../../types";
import { FaHome } from "react-icons/fa";

export const Products = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");

  const { data: products, error } = useSWR(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/products?$lookup=*&name[$contains]=${search ?? ""}${
      category ? `&categoryId=${category}` : ""
    }${brand ? `&brandId=${brand}` : ""}`,
    fetcher
  );

  if (error) return <div>Failed To Load Products</div>;
  if (!products) return <div>Loading Product...</div>;

  return (
    <div className="w-full bg-slate-50">
      <div className="flex items-center justify-between p-5">
        <h2 className="rounded-xl p-2 text-sm font-normal ">Semua Produk</h2>
        <Link
          to="/"
          className="ouline flex items-center gap-2 rounded-xl p-2 text-custom-blue-primary  outline-1"
        >
          <FaHome />
          Ke Beranda
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
