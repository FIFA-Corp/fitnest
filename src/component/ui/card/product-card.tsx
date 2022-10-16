import { Link } from "react-router-dom";

interface ProductCardType {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export const ProductCard = ({ id, imageUrl, name, price }: ProductCardType) => {
  return (
    <Link
      to={`/products/${id}`}
      className="max-w-sm w-full rounded-2xl flex flex-col border-[1px] border-custom-blush-pink overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={`image ${name}`}
        className="w-full aspect-video object-contain object-center"
      />
      <div className="p-3 flex flex-col justify-between gap-6 bg-custom-yellow-secondary">
        <h3 className="font-normal text-2xl line-clamp-2">{name}</h3>
        <p className="mb-2">
          <span className="block font-bold text-2xl ">{`IDR ${price}`}</span>
          <span className="font-normal text-base">100 terjual</span>
        </p>
      </div>
    </Link>
  );
};
