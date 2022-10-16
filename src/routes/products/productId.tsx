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
    <div className="flex gap-40 justify-center mx-auto my-10">
      <div>
        <img
          className="w-[400px] h-auto"
          src={product.image[0].url}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col gap-8 max-w-lg">
        <h1 className="text-xl font-inter font-semibold">{product.name}</h1>
        <h3 className="text-lg font inter font-medium">IDR {product.price}</h3>
        <AddToCartButton />
        <p>{product.description}</p>
      </div>
    </div>
  );
};
