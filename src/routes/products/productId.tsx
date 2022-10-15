import { useParams } from "react-router-dom";

export const ProductId = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>detail page code here</h1>
      <p>productId : {productId}</p>
    </div>
  );
};
