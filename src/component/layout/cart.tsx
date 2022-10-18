import { FaAngleLeft } from "react-icons/fa";
import { CartProductCard } from "../ui/card";

export default function Cart() {
  return (
    <div className="fixed z-10 flex h-screen w-screen justify-end backdrop-blur-md">
      <div className="flex h-full w-full max-w-xl flex-col bg-custom-white">
        <div className="flex w-full items-center justify-between bg-custom-blue-primary py-3 px-6">
          <button className="rounded-2xl bg-custom-yellow p-2">
            <FaAngleLeft size={25} />
          </button>
          <h1 className="text-2xl font-semibold">Keranjang Saya</h1>
          <div></div>
        </div>
        <div className="mt-3 flex flex-1 flex-col gap-3 overflow-y-auto px-10">
          <CartProductCard
            imageUrl="https://api.kontenbase.com/upload/file/storage/634845d740f5380221733632/VlnAuRXO/1663152158.jpg"
            name="ORTUSEIGHT JOGOSALA SHIVER WHITE/GREY/LIME"
            price={399000}
          />
          <CartProductCard
            imageUrl="https://api.kontenbase.com/upload/file/storage/634845d740f5380221733632/VlnAuRXO/1663152158.jpg"
            name="ORTUSEIGHT JOGOSALA SHIVER WHITE/GREY/LIME"
            price={399000}
          />
          <CartProductCard
            imageUrl="https://api.kontenbase.com/upload/file/storage/634845d740f5380221733632/VlnAuRXO/1663152158.jpg"
            name="ORTUSEIGHT JOGOSALA SHIVER WHITE/GREY/LIME"
            price={399000}
          />
          <CartProductCard
            imageUrl="https://api.kontenbase.com/upload/file/storage/634845d740f5380221733632/VlnAuRXO/1663152158.jpg"
            name="ORTUSEIGHT JOGOSALA SHIVER WHITE/GREY/LIME"
            price={399000}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-4 px-12">
            <p className="font-semibold">Total Harga</p>
            <p className="font-bold">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(1275000)}
            </p>
          </div>
          <div className="flex w-full items-center justify-center bg-custom-blue-primary p-2">
            <button className="w-[175px] max-w-xs rounded-2xl bg-custom-yellow py-2 text-2xl font-semibold">
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
