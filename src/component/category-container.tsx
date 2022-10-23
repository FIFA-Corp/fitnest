import { Link } from "react-router-dom";
import { CategoryType } from "../types/category-type";
import { fetcher, useSWR } from "./../libs";
import { LoadingUi } from "./loading";
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
    return <LoadingUi />;
  }

  return (
    <div className="w-full py-3 px-11">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-normal text-custom-black-primary">
          Kategori Pilihan
        </h2>
      </div>
      <div className="flex gap-3">
        {categories.map(({ _id, name, image }: CategoryType) => {
          return (
            <BrandCategoryCard
              key={_id}
              name={name}
              imageUrl={image[0]?.url}
              isBrand={false}
              id={_id}
            />
          );
        })}
      </div>
    </div>
  );
}
