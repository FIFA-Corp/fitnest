import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useSWRConfig } from "swr";
import { FourOfFOurComp } from "../component/404-comp";
import { LoadingUi } from "../component/loading";
import { CheckoutProductCard } from "../component/ui/card";
import { fetcher, uidState, useSWR } from "../libs";
import { buy } from "../services/checkout/buy";
import { CartType } from "../types";

export default function Checkout() {
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const uid = useRecoilValue(uidState);

  const { data: carts, error } = useSWR(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/carts?$lookup=*&userId=${uid}&isCheckout=0`,
    fetcher
  );

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (carts.length < 1) {
        throw new Error("Tidak Ada Product");
      }

      const cartsId = carts.map(({ _id }: CartType) => _id);

      const target = event.target as typeof event.target & {
        name: { value: string };
        address: { value: string };
        city: { value: string };
        province: { value: string };
        postalCode: { value: number };
        phone: { value: number };
      };

      const checkoutData = {
        name: target.name.value,
        address: target.address.value,
        city: target.city.value,
        province: target.province.value,
        postalCode: Number(target.postalCode.value),
        phone: Number(target.phone.value),
      };

      await buy(checkoutData, cartsId);
      mutate(
        `${
          import.meta.env.VITE_BACKEND_API_URL
        }/carts?$lookup=*&userId=${uid}&isCheckout=0`
      );
      navigate("/transaksi");
    } catch (error) {
      console.log(error);
      alert("terjadi kesalahan ketika melakukan Pembelian");
    }
  };

  if (error) {
    return <div>Error</div>;
  }

  if (!carts) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <LoadingUi />
      </div>
    );
  }

  if (carts?.length < 1) {
    return (
      <FourOfFOurComp title="Belum ada produk yang dimasukan kedalam keranjang" />
    );
  }

  const ongkir = 100000;

  const totalProducts =
    carts.reduce((a: number, b: CartType) => a + b?.quantity, 0) ?? 0;

  const totalPrice =
    carts.reduce(
      (a: number, b: CartType) => a + b?.quantity * b?.productId[0]?.price,
      0
    ) ?? 0;

  return (
    <div className="flex flex-col items-center p-9">
      <div className="flex w-full max-w-7xl flex-col gap-5">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <form onSubmit={handleOnSubmit} className="flex w-full flex-row gap-8">
          <div className="flex flex-[2] flex-col">
            <h2 className="mb-4 text-2xl font-semibold">Alamat Pengiriman</h2>
            <div className="m-0 flex border-collapse flex-row border-[1px] border-black/50 px-2 py-4">
              <label htmlFor="name" className="flex-1">
                Nama Penerima
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Nama Penerima"
                className="flex-1 outline-none"
              />
            </div>
            <div className="m-0  flex border-collapse flex-row border-[1px] border-black/50 px-2 py-4">
              <label htmlFor="address" className="flex-1">
                Alamat
              </label>
              <input
                required
                type="text"
                name="address"
                placeholder="Alamat"
                className="flex-1 outline-none"
              />
            </div>
            <div className="m-0  flex border-collapse flex-row border-[1px] border-black/50 px-2 py-4">
              <label htmlFor="city" className="flex-1">
                Kota
              </label>
              <input
                required
                type="text"
                name="city"
                placeholder="Kota"
                className="flex-1 outline-none"
              />
            </div>
            <div className="m-0  flex border-collapse flex-row border-[1px] border-black/50 px-2 py-4">
              <label htmlFor="province" className="flex-1">
                Provinsi
              </label>
              <input
                required
                type="text"
                name="province"
                placeholder="Provinsi"
                className="flex-1 outline-none"
              />
            </div>
            <div className="m-0  flex border-collapse flex-row border-[1px] border-black/50 px-2 py-4">
              <label htmlFor="postalCode" className="flex-1">
                Kode Pos
              </label>
              <input
                required
                type="number"
                name="postalCode"
                placeholder="Kode Pos"
                className="flex-1 outline-none"
              />
            </div>
            <div className="m-0  flex border-collapse flex-row border-[1px] border-black/50 px-2 py-4">
              <label htmlFor="phone" className="flex-1">
                Nomor HP
              </label>
              <input
                required
                type="number"
                name="phone"
                placeholder="Nomor HP"
                className="flex-1 outline-none"
              />
            </div>

            <div className="mt-10 flex flex-col gap-6">
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
                    <div className="flex flex-col gap-3" key={index}>
                      <h5 className="text-lg font-semibold">
                        Pesanan {index + 1}
                      </h5>
                      <CheckoutProductCard
                        cartId={_id}
                        imageUrl={product[0]?.image[0]?.url}
                        name={product[0]?.name}
                        price={product[0]?.price}
                        size={sizeQuantity[0]?.size}
                        quantity={quantity}
                        isCheckoutFinish={false}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="sticky top-24 m-0 mt-12 flex-1 border-collapse self-start border-[1px] border-black/50">
            <div className="border-collapse px-11 py-5">
              <h4 className="mb-2 text-2xl font-semibold">Ringkasan belanja</h4>
              <p className="text-lg font-semibold">
                Total Harga({totalProducts} produk)
              </p>
              <p className="text-lg font-bold">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(totalPrice)}
              </p>
              <p className="text-lg font-semibold">Ongkos kirim</p>
              <p className="text-lg font-bold">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(ongkir)}
              </p>
            </div>
            <div className="border-collapse border-[1px] border-t-black/50 px-11 py-5">
              <h4 className="mb-8 text-2xl font-semibold">Total Tagihan</h4>
              <p className="text-lg font-bold">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(totalPrice + ongkir)}
              </p>
              <button className="mt-1 w-full rounded-lg bg-custom-yellow py-3 text-center text-lg font-semibold">
                Lakukan Pembayaran
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
