interface FourOfFourCompProps {
  title: string;
}

export const FourOfFOurComp = ({ title }: FourOfFourCompProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-3 py-24">
      <p className="w-full max-w-sm text-center text-lg font-semibold">
        {title}
      </p>
    </div>
  );
};
