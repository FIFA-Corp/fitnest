import { FaTrashAlt } from "react-icons/fa";

interface CartProductCardProps {
  name: string;
  imageUrl: string;
  price: number;
}

export const CartProductCard = ({
  name,
  imageUrl,
  price,
}: CartProductCardProps) => {
  return (
    <div className="grid w-full grid-cols-2 items-center rounded-2xl border-[1px] border-custom-black-primary py-4 px-7">
      <img
        src={imageUrl}
        alt={name}
        className="aspect-[1.2] object-contain object-center"
      />
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-end gap-2">
          <FaTrashAlt className="text-custom-black-primary/50" />
          <h2 className="w-full text-lg font-normal line-clamp-3">{name}</h2>
        </div>
        <h3 className="mb-2 text-lg font-bold">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(price)}
        </h3>
      </div>
    </div>
  );
};
