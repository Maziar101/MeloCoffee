import React, { useEffect } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProductCategory from "./Pages/Product-Category";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import PageNotFound from "./Pages/404";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-category" element={<ProductCategory />} />
        <Route path="/login-register" element={<LoginRegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
