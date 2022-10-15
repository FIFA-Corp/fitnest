interface BrandCategoryCardType {
  imageUrl: string;
  name: string;
}

export const BrandCategoryCard = ({
  imageUrl,
  name,
}: BrandCategoryCardType) => {
  return (
    <div className="max-w-[240px] w-full flex flex-col p-2 border-[1px] border-custom-blush-pink items-center gap-3">
      <img
        src={imageUrl}
        alt={`image ${name}`}
        className="w-3/5 aspect-square object-contain object-center flex-grow"
      />
      <h3 className="font-normal text-2xl text-center">{name}</h3>
    </div>
  );
};
