import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "../pages/Home";
import { Loading } from "../pages/Loading";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
};
