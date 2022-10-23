import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useSWRConfig } from "swr";
import { uidState } from "../../../libs";
import { deleteCart } from "../../../services";

interface CheckoutProductCardProps {
  cartId: string;
  name: string;
  imageUrl: string;
  price: number;
  size: string;
  quantity: number;
  isCheckoutFinish: boolean;
}

export const CheckoutProductCard = ({
  cartId,
  name,
  imageUrl,
  price,
  size,
  quantity,
  isCheckoutFinish,
}: CheckoutProductCardProps) => {
  const uid = useRecoilValue(uidState);
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    try {
      await deleteCart(cartId);

      const searchParams = new URLSearchParams();
      searchParams.append("$lookup", "*");
      searchParams.append("isCheckout", "0");
      searchParams.append("userId", uid);

      mutate(`${import.meta.env.VITE_BACKEND_API_URL}/carts?${searchParams}`);
    } catch (error) {
      navigate("/register");
    }
  };

  return (
    <div className="mb-2 grid w-full grid-cols-3 items-center rounded-2xl border-[1px] border-custom-black-primary py-4 px-7">
      <img
        src={imageUrl}
        alt={name}
        className="col-span-1 aspect-[1.2] w-full object-contain object-center"
      />
      <div className="col-span-2 flex h-full flex-col justify-between">
        <div className="flex flex-col items-end gap-2">
          {!isCheckoutFinish ? (
            <FaTrashAlt
              className="cursor-pointer text-custom-black-primary/50"
              onClick={handleDelete}
            />
          ) : (
            <div className="h-5" />
          )}
          <h2 className="w-full text-lg font-normal line-clamp-3">{name}</h2>
          <div className="mb-2 w-full">
            <p>Ukuran: {size}</p>
            <p>Kuantitas: {quantity}</p>
            <p>
              Harga satuan:{" "}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
          </div>
        </div>
      </div>
      <h3 className="col-span-3 text-right text-lg font-bold">
        <span className="font-normal">Subtotal:</span>{" "}
        {Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(price * quantity)}
      </h3>
    </div>
  );
};
