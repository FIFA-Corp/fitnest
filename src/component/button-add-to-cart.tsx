import { FaCartPlus } from "react-icons/fa";

export default function AddToCartButton() {
  return (
    <button className="bg-custom-yellow flex items-center rounded-xl p-2 text-lg font-medium gap-4 min-w-fit outline outline-1">
      Tambahkan Ke Keranjang <FaCartPlus />
    </button>
  );
}
