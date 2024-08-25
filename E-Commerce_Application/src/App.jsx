//import logo from "./logo.svg";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Store";
import Post from "./Post";
import RootLayout from "./RootLayout";
import Dashboard from "./Dashboard";
import Cartes from "./Cartes";
import "./App.css";
import Navbarpanel from "./Navbarpanel";
import ProductDetails from "./ProductDetails";
import { products as initialProducts } from "./products";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productSlice";
import Orders from "./Orders";
import Authform from "./Authform";
import { Routes, Route } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(initialProducts)); // Load products into Redux store
  }, [dispatch]);

  /*return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="cartes" element={<Cartes />} />
                <Route path="/ProductDetails/:id" element={<ProductDetails />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );*/

  return (
    <Routes>
      <Route path="/" element={<Authform />} />
      <Route path="RootLayout" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="Cartes" element={<Cartes />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="ProductDetails/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
/*  <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cartes" element={<Cartes />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="ProductDetails/:id" element={<ProductDetails />} />
      </Route>
    </Routes>*/
/* <Routes>
      <Route path="/" element={<Authform />} />
      <Route path="/RootLayout" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cartes" element={<Cartes />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="ProductDetails/:id" element={<ProductDetails />} />
      </Route>
    </Routes>*/
