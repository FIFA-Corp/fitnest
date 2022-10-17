interface BrandCategoryCardType {
  imageUrl: string;
  name: string;
}

export const BrandCategoryCard = ({
  imageUrl,
  name,
}: BrandCategoryCardType) => {
  return (
    <div className="flex w-full max-w-[240px] flex-col items-center gap-3 rounded-2xl p-2 shadow-lg">
      <img
        src={imageUrl}
        alt={`image ${name}`}
        className="aspect-square w-3/5 flex-grow object-contain object-center"
      />
      <h3 className="text-center text-2xl font-normal">{name}</h3>
    </div>
  );
};
