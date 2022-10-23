import { useRecoilValue } from "recoil";
import { fetcher, uidState, useSWR } from "../../../libs";
import { CartType } from "../../../types";
import { TransactionType } from "../../../types/transaction-type";
import { LoadingUi } from "../../loading";
import { CheckoutProductCard } from "./checkout-product-card";

interface TransactionCardProps {
  transactions: TransactionType;
  index: number;
}

export const TransactionCard = ({
  transactions,
  index,
}: TransactionCardProps) => {
  const uid = useRecoilValue(uidState);

  const { data: carts, error } = useSWR(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/carts?$lookup=*&userId=${uid}&isCheckout=1&checkoutId=${
      transactions._id
    }`,
    fetcher
  );

  if (error) {
    return <div>Error</div>;
  }

  if (!carts) {
    return <LoadingUi />;
  }

  const ongkir = 100000;

  const totalPrice =
    carts.reduce(
      (a: number, b: CartType) => a + b?.quantity * b?.productId[0]?.price,
      0
    ) ?? 0;

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-semibold">Transaksi {index}</h2>
      <div className="m-0 flex w-full flex-row gap-8 p-0">
        <div className="flex flex-[2] flex-col">
          {carts.length > 0 && (
            <div className="mt-10 flex flex-col gap-6">
              {carts.map(
                ({
                  _id,
                  quantity,
                  sizeQuantityId: sizeQuantity,
                  productId: product,
                }: CartType) => {
                  return (
                    <CheckoutProductCard
                      key={_id}
                      cartId={_id}
                      imageUrl={product[0]?.image[0]?.url}
                      name={product[0]?.name}
                      price={product[0]?.price}
                      size={sizeQuantity[0]?.size}
                      quantity={quantity}
                      isCheckoutFinish={true}
                    />
                  );
                }
              )}
            </div>
          )}
        </div>
        <div className="sticky top-20 m-0 mt-10 flex-1 border-collapse self-start rounded-lg border-[1px] border-black/50 p-6">
          <h3 className="text-lg font-semibold">Detail Transaksi</h3>
          <div className="mt-3 flex flex-col gap-2">
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Nama Lengkap: </span>
              {transactions.name}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Alamat :</span>
              {transactions.address}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Kota: </span>
              {transactions.city}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Provinsi: </span>
              {transactions.province}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Kode Pos: </span>
              {transactions.postalCode}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Nomar HP: </span>
              {transactions.phone}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Total Harga: </span>
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(totalPrice)}
            </h3>
            <h3 className="col-span-3 text-base font-bold">
              <span className="font-normal">Ongkos Kirim: </span>
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(ongkir)}
            </h3>

            <h3 className="col-span-3 text-lg font-bold">
              <span className="font-normal">Total Transaksi: </span>
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(totalPrice + ongkir)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
