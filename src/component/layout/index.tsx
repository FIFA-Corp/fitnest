import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
