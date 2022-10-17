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
      className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl  drop-shadow-lg"
    >
      <img
        src={imageUrl}
        alt={`image ${name}`}
        className="aspect-video w-full object-contain object-center"
      />
      <div className="flex flex-col justify-between gap-6 bg-neutral-100 p-3">
        <h3 className="text-md font-bold line-clamp-2">{name}</h3>
        <p className="mb-2">
          <span className="flex flex-col text-sm font-medium ">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(price)}
          </span>
          {/* <span className="text-xs font-light text-slate-600">100 terjual</span> */}
        </p>
      </div>
    </Link>
  );
};
