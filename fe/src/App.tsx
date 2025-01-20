import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const PortFolioList = lazy(() => import("./pages/PortfolioList"));

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="check/credit" element={<PortFolioList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
