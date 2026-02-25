import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Customer from "./Customer.jsx";
import Sellers from "./Sellers.jsx";
import Data from "./Data.jsx";
import DataLayout from "./DataLayout.jsx";
import Image from "./Image.jsx";
import ProductSearch from "./ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images" element={<Image />} />

        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="products/search" element={<ProductSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);