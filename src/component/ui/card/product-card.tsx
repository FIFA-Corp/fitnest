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
      className="max-w-sm w-full flex flex-col drop-shadow-lg rounded-2xl  overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={`image ${name}`}
        className="w-full aspect-video object-contain object-center"
      />
      <div className="p-3 flex flex-col justify-between gap-6 bg-neutral-100">
        <h3 className="font-bold text-md line-clamp-2">{name}</h3>
        <p className="mb-2">
          <span className="flex flex-col font-medium text-sm ">{`IDR ${price}`}</span>
          <span className="text-slate-600 font-light text-xs">100 terjual</span>
        </p>
      </div>
    </Link>
  );
};
