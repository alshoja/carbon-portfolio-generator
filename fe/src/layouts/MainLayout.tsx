
import { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    <main className="my-5 main-container">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
