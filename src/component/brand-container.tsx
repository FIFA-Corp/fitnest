import { Link } from "react-router-dom";
import { BrandType } from "../types/brand-type";
import { fetcher, useSWR } from "./../libs";
import { LoadingUi } from "./loading";
import { BrandCategoryCard } from "./ui/card";

export default function BrandContainer() {
  const { data: categories, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/brands?$lookup[_id]=*
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
          Brand Pilihan
        </h2>
        <Link to="/" className="text-xl font-normal text-custom-blue-secondary">
          Lihat Semua
        </Link>
      </div>
      <div className="flex gap-3">
        {categories.map(({ _id, name, image }: BrandType) => {
          return (
            <BrandCategoryCard
              key={_id}
              name={name}
              imageUrl={image[0]?.url}
              isBrand={true}
              id={_id}
            />
          );
        })}
      </div>
    </div>
  );
}
