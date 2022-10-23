import { useRecoilValue } from "recoil";
import { FourOfFOurComp } from "../component/404-comp";
import { LoadingUi } from "../component/loading";
import { CheckoutProductCard } from "../component/ui/card";
import { TransactionCard } from "../component/ui/card/transaction-card";
import { fetcher, uidState, useSWR } from "../libs";
import { CartType } from "../types";
import { TransactionType } from "../types/transaction-type";

export const Transaction = () => {
  const uid = useRecoilValue(uidState);
  const { data: transactions, error } = useSWR(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/checkout?$lookup=*&userId=${uid}&$sort[createdAt]=-1`,
    fetcher
  );

  if (error) {
    return <div>Error</div>;
  }

  if (!transactions) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <LoadingUi />
      </div>
    );
  }

  if (transactions?.length < 1) {
    return <FourOfFOurComp title="Belum ada transaksi" />;
  }

  return (
    <div className="flex flex-col items-center p-9">
      <div className="flex w-full max-w-7xl flex-col gap-5">
        <h1 className="text-center text-3xl font-semibold">Daftar Transaksi</h1>
        <div className="flex flex-col gap-4">
          {transactions.length > 0 &&
            transactions.map((transaction: TransactionType, index: number) => {
              return (
                <TransactionCard
                  transactions={transaction}
                  index={index + 1}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
