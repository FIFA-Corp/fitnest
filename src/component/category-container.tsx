import { Link } from "react-router-dom";
import { CategoryType } from "../types/categoryType";
import { fetcher, useSWR } from "./../libs";
import { BrandCategoryCard } from "./ui/card";

export default function CategoryContainer() {
  const { data: categories, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/categories?$lookup[_id]=*
  `,
    fetcher
  );

  if (error) {
    throw error;
  }

  if (!categories) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-full py-3 px-11 border-[1px] border-custom-blush-pink">
      <div className="flex justify-between items-center">
        <h2 className="font-normal text-2xl text-custom-black-primary">
          Kategori Pilihan
        </h2>
        <Link to="/" className="text-custom-blue-secondary font-normal text-xl">
          Lihat Semua
        </Link>
      </div>
      <div className="flex gap-3">
        {categories.map(({ _id, name, image }: CategoryType) => {
          return (
            <BrandCategoryCard key={_id} name={name} imageUrl={image[0]?.url} />
          );
        })}
      </div>
    </div>
  );
}
