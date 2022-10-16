import { Link } from "react-router-dom";
import { BrandType } from "../types/brand-type";
import { fetcher, useSWR } from "./../libs";
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
    return <div>Loading</div>;
  }

  return (
    <div className="w-full py-3 px-11">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-normal text-2xl text-custom-black-primary">
          Brand Pilihan
        </h2>
        <Link to="/" className="text-custom-blue-secondary font-normal text-xl">
          Lihat Semua
        </Link>
      </div>
      <div className="flex gap-3">
        {categories.map(({ _id, name, image }: BrandType) => {
          return (
            <BrandCategoryCard key={_id} name={name} imageUrl={image[0]?.url} />
          );
        })}
      </div>
    </div>
  );
}
