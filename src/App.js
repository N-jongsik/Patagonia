import React from "react";
import { Route, Routes } from "react-router-dom";
import MapComp from "./components/map/MapComp";
import LayoutComp from "./layout/LayoutComp";
import MainComp from "./components/home/MainComp";
import ShopComp from "./components/shop/ShopComp";
import DetailComp from "./components/detail/DetailComp";
import CartComp from "./components/cart/CartComp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<MainComp />} />
          <Route path="/shop" element={<ShopComp />} />
          <Route path="/detail" element={<DetailComp />} />
          <Route path="/cart" element={<CartComp />} />
          <Route path="/map" element={<MapComp />}>
            매장찾기
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
