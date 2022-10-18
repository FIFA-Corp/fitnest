import { ReactNode } from "react";
import Cart from "./cart";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Cart />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
