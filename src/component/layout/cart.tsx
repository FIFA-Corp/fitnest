import { FaAngleLeft } from "react-icons/fa";
import { CartProductCard } from "../ui/card";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetcher, showCartState, uidState, useSWR } from "../../libs";
import { CartType } from "../../types";

export default function Cart() {
  const [isCartShow, setShowCart] = useRecoilState(showCartState);
  const uid = useRecoilValue(uidState);

  const { data: carts, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/carts?$lookup=*&&userId=${uid}`,
    fetcher
  );

  const cartHiddenHandle = () => {
    setShowCart(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  if (error) {
    throw error;
  }

  if (!carts) {
    return <div>Loading</div>;
  }

  const totalPrice =
    carts.reduce(
      (a: number, b: CartType) => a + b.quantity * b.productId[0].price,
      0
    ) ?? 0;

  return (
    <div
      className={`fixed z-10 h-screen w-screen justify-end backdrop-blur-md ${
        isCartShow ? "flex" : "hidden"
      }`}
      onClick={cartHiddenHandle}
    >
      <div
        className="flex h-full w-full max-w-xl flex-col bg-custom-white"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex w-full items-center justify-between bg-custom-blue-primary py-3 px-6">
          <button
            className="rounded-2xl bg-custom-yellow p-2"
            onClick={cartHiddenHandle}
          >
            <FaAngleLeft size={25} />
          </button>
          <h1 className="text-2xl font-semibold">Keranjang Saya</h1>
          <div></div>
        </div>
        <div className="mt-3 flex flex-1 flex-col gap-3 overflow-y-auto px-10">
          {carts.map(
            (
              {
                _id,
                quantity,
                sizeQuantityId: sizeQuantity,
                productId: product,
              }: CartType,
              index: number
            ) => {
              return (
                <CartProductCard
                  key={index}
                  cartId={_id}
                  imageUrl={product[0].image[0]?.url}
                  name={product[0].name}
                  price={product[0].price}
                  size={sizeQuantity[0].size}
                  quantity={quantity}
                />
              );
            }
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-4 px-12">
            <p className="font-semibold">Total Harga</p>
            <p className="font-bold">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(totalPrice)}
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
