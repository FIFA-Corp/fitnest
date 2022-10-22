import { Link } from "react-router-dom";

interface BrandCategoryCardType {
  imageUrl: string;
  name: string;
  isBrand: Boolean;
  id: string;
}

export const BrandCategoryCard = ({
  imageUrl,
  name,
  isBrand,
  id,
}: BrandCategoryCardType) => {
  return (
    <Link
      to={isBrand ? `/products?brand=${id}` : `/products?category=${id}`}
      className="flex w-full max-w-[240px] cursor-pointer flex-col items-center gap-3 rounded-2xl p-2 shadow-lg"
    >
      <img
        src={imageUrl}
        alt={`image ${name}`}
        className="aspect-square w-3/5 flex-grow object-contain object-center"
      />
      <h3 className="text-center text-2xl font-normal">{name}</h3>
    </Link>
  );
};
