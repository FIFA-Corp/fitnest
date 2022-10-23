import { ReactNode, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { fetcher, uidState, useSWR } from "../../libs";
import { getHeaders } from "../../libs/headers";
import { LoadingUi } from "../loading";
import Cart from "./cart";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  const setUid = useSetRecoilState(uidState);

  const { data: user, error: userError } = useSWR(
    [
      `${import.meta.env.VITE_BACKEND_API_URL}/auth/user`,
      {
        headers: getHeaders(),
      },
    ],
    fetcher
  );

  useEffect(() => {
    if (user?._id) {
      setUid(user._id);
    }
  }, [user]);

  if (userError) {
    return <div>Error</div>;
  }

  if (!user) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <LoadingUi />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <Navbar />
      <Cart />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
