import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useSWRConfig } from "swr";
import { uidState } from "../../../libs";
import { STORAGE_KEY } from "../../../libs/local-storage";
import { deleteCart } from "../../../services";

interface CartProductCardProps {
  cartId: string;
  name: string;
  imageUrl: string;
  price: number;
  size: string;
  quantity: number;
}

export const CartProductCard = ({
  cartId,
  name,
  imageUrl,
  price,
  size,
  quantity,
}: CartProductCardProps) => {
  const uid = useRecoilValue(uidState);
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    try {
      await deleteCart(cartId);
      mutate(
        `${
          import.meta.env.VITE_BACKEND_API_URL
        }/carts?$lookup=*&userId=${uid}&isCheckout=0`
      );
    } catch (error) {
      navigate("/register");
    }
  };

  return (
    <div className="grid w-full grid-cols-2 items-center rounded-2xl border-[1px] border-custom-black-primary py-4 px-7">
      <img
        src={imageUrl}
        alt={name}
        className="aspect-[1.2] object-contain object-center"
      />
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-end gap-2">
          <FaTrashAlt
            className="cursor-pointer text-custom-black-primary/50"
            onClick={handleDelete}
          />
          <h2 className="w-full text-lg font-normal line-clamp-3">{name}</h2>
          <div className="mb-2 w-full">
            <p>size: {size}</p>
            <p>quantity: {quantity}</p>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-bold">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(price * quantity)}
        </h3>
      </div>
    </div>
  );
};
