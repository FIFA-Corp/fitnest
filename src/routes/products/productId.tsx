import { useParams } from "react-router-dom";
import { fetcher, useSWR } from "../../libs";
import AddToCartButton from "../../component/button-add-to-cart";

export const ProductIdRoute = () => {
  const { productId } = useParams();
  const { data: product, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${productId}?$lookup=*`,
    fetcher
  );

  if (error) return <div>Failed To Load Product: {productId}</div>;
  if (!product) return <div>Loading Product...</div>;

  return (
    <div className="mx-auto my-10 flex justify-center gap-40">
      <div>
        <img
          className="h-auto w-[400px]"
          src={product.image[0].url}
          alt={product.name}
        />
      </div>
      <div className="flex max-w-lg flex-col gap-8">
        <h1 className="font-inter text-xl font-semibold">{product.name}</h1>
        <h3 className="font inter text-lg font-medium">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(product.price)}
        </h3>
        <AddToCartButton />
        <p>{product.description}</p>
      </div>
    </div>
  );
};
