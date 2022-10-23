import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetcher, showCartState, uidState, useSWR } from "../../libs";
import AddToCartButton from "../../component/button-add-to-cart";
import { useState } from "react";
import type { ProductType } from "../../types";
import { addToCart } from "../../services";
import { useSWRConfig } from "swr";
import { FaHome, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { LoadingUi } from "../../component/loading";

export const ProductIdRoute = () => {
  const uid = useRecoilValue(uidState);
  const navigate = useNavigate();
  const { productId } = useParams();
  const setShowCart = useSetRecoilState(showCartState);
  const { mutate } = useSWRConfig();
  const { data: product, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${productId}?$lookup=*`,
    fetcher
  );

  const [sizeIndexChoose, setSizeIndexChoose] = useState<number>(0);

  if (error) return <div>Failed To Load Product: {productId}</div>;
  if (!product) return <LoadingUi />;

  const { name, image, price, description, sizeQuantity }: ProductType =
    product;

  const handleAddToCart = async () => {
    try {
      if (!uid) {
        navigate(`/register?productId=${productId}`);
      }
      const response = await addToCart(
        productId!,
        sizeQuantity[sizeIndexChoose]._id,
        1,
        uid
      );
      setShowCart(true);
      document.body.classList.add("overflow-y-hidden");
      mutate(
        `${
          import.meta.env.VITE_BACKEND_API_URL
        }/carts?$lookup=*&userId=${uid}&isCheckout=0`
      );
    } catch (error) {
      navigate(`/register?productId=${productId}`);
    }
  };

  return (
    <>
      <div className="flex justify-between p-5">
        <Link
          to="/products"
          className="flex items-center gap-2 rounded-xl p-2  text-custom-blue-primary "
        >
          <FaRegArrowAltCircleLeft />
          Ke Semua Produk
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 rounded-xl p-2  text-custom-blue-primary"
        >
          <FaHome />
          Ke Beranda
        </Link>
      </div>
      <div className="mx-auto my-10 flex justify-center gap-40">
        <div>
          <img className="h-auto w-[400px]" src={image[0]?.url} alt={name} />
        </div>
        <div className="flex max-w-lg flex-col gap-8">
          <h1 className="font-inter text-xl font-semibold">{name}</h1>
          <h3 className="font inter text-lg font-medium">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(price)}
          </h3>
          <div>
            <div className="flex gap-2">
              {sizeQuantity.map(({ size }, index: number) => {
                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-xl border-[1px] border-custom-black-primary py-2 px-5 ${
                      index === sizeIndexChoose
                        ? "bg-custom-black-primary text-custom-white"
                        : "bg-custom-white text-custom-black-primary"
                    }`}
                    onClick={() => setSizeIndexChoose(index)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <p className="mt-2 text-sm">
              Stok:{" "}
              {Intl.NumberFormat("id-ID", {
                minimumFractionDigits: 0,
              }).format(sizeQuantity[sizeIndexChoose].quantity)}
            </p>
          </div>
          <AddToCartButton onClick={handleAddToCart} />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
