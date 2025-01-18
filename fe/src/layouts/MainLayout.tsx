import Footer from "../components/Footer";
import Header from "../components/Header";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    <main className="my-5 main-container">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
