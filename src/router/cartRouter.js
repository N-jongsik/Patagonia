import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const loading = <div>loading...</div>;
const CartAdd = lazy(() => import("../components/detail/DetailComp"));
const CartRead = lazy(() => import("../components/cart/CartComp"));
const ShoptoDetail = lazy(() => import("../components/shop/ShopComp"));

const cartRounter = () => {
  return [
    {
      path: "cart/add",
      element: (
        <Suspense fallback={loading}>
          <CartAdd />
        </Suspense>
      ),
    },
    {
      path: "cart/list",
      element: (
        <Suspense fallback={loading}>
          <CartRead />
        </Suspense>
      ),
    },
    {
      path: "shop/detail/:gno",
      element: (
        <Suspense fallback={loading}>
          <ShoptoDetail />
        </Suspense>
      ),
    },
  ];
};

export default cartRounter;
