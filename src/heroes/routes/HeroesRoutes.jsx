import { Navbar } from "../../ui/components";

import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage/>} />
          <Route path="hero" element={<HeroPage/>} />

          {/* Redirect to marvel */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
