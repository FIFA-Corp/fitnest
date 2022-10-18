import { FaCartPlus } from "react-icons/fa";

interface AddToCartButtonProps {
  onClick: Function;
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className="text-md flex max-w-fit items-center gap-4 rounded-xl bg-custom-yellow p-2 font-medium outline outline-1"
    >
      Tambahkan Ke Keranjang <FaCartPlus />
    </button>
  );
}
