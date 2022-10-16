import { ProductCard } from "./ui/card";

export default function ProductContainer() {
  return (
    <div className="flex flex-wrap justify-between gap-7">
      {[0, 1, 2, 3, 4, 5].map((index) => {
        return (
          <ProductCard
            key={index}
            id="634a81fbdadc42808a40ec79"
            imageUrl="https://api.kontenbase.com/upload/file/storage/634845d740f5380221733632/RQSNNUwR/1645008282.jpg"
            name="ADIDAS PREDATOR EDGE.3 FG - GV9856 CORE BLACK/FTWWHT/VIVRED/NOIESS"
            price={1300000}
          />
        );
      })}
    </div>
  );
}
