import { FaAngleLeft } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";

import { fetcher, showCartState, uidState, useSWR } from "../../libs";
import { CartProductCard } from "../ui/card";
import { CartType } from "../../types";
import { useNavigate } from "react-router-dom";
import { LoadingUi } from "../loading";
import { FourOfFOurComp } from "../404-comp";

export default function Cart() {
  const navigate = useNavigate();
  const uid = useRecoilValue(uidState);
  const [isCartShow, setShowCart] = useRecoilState(showCartState);

  const { data: carts, error: cartsError } = useSWR(
    uid
      ? `${
          import.meta.env.VITE_BACKEND_API_URL
        }/carts?$lookup=*&userId=${uid}&isCheckout=0`
      : `${import.meta.env.VITE_BACKEND_API_URL}/carts?$lookup=*&isCheckout=0`,
    fetcher
  );

  const cartHiddenHandle = () => {
    setShowCart(false);
  };

  const handleCheckout = () => {
    setShowCart(false);
    if (uid) {
      navigate("/checkout");
    } else {
      navigate("/");
    }
  };

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
          {cartsError && <p>Gagal memuat produk di keranjang</p>}
          {!carts && <p>Memuat produk di keranjang...</p>}
          {carts?.length >= 0 ? (
            carts.map((cart: CartType, index: number) => {
              const {
                _id,
                quantity,
                sizeQuantityId: sizeQuantity,
                productId: product,
              } = cart;

              return (
                <CartProductCard
                  key={index}
                  cartId={_id}
                  imageUrl={product[0]?.image[0]?.url}
                  name={product[0]?.name}
                  price={product[0]?.price}
                  size={sizeQuantity[0]?.size}
                  quantity={quantity}
                />
              );
            })
          ) : (
            <FourOfFOurComp title="Belum ada produk yang dimasukan kedalam keranjang" />
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-4 px-12">
            <p className="font-semibold">Total Harga</p>
            <p className="font-bold">
              {carts?.length >= 0 &&
                Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(
                  carts.reduce((a: number, b: CartType) => {
                    return a + b?.quantity * b?.productId[0]?.price;
                  }, 0)
                )}
            </p>
          </div>

          <div className="flex w-full items-center justify-center bg-custom-blue-primary p-2">
            <button
              onClick={handleCheckout}
              className="w-[175px] max-w-xs rounded-2xl bg-custom-yellow py-2 text-2xl font-semibold"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
