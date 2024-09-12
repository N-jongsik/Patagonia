import React from "react";
import { Route, Routes } from "react-router-dom";
import MapComp from "./components/map/MapComp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/map" element={<MapComp />}>
          매장찾기
        </Route>
      </Routes>
    </>
  );
}

export default App;
