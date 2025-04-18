import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchProducts } from "./Components/store/productsSlice";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "./Components/store/cartSlice";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";
import About from "./Components/HomePage/About/About";
import UserProfile from "./Components/UserProfile/UserProfile";
import Checkout from "./Components/cart/Checkout";
const ProductsPage = lazy(() => import("./Components/Products/Show Products/ProductsPage"));
const ProductDetails = lazy(() => import("./Components/Products/Product Details/ProductDetails"));
const Men = lazy(() => import("./Components/Categories/Men"));
const Women = lazy(() => import("./Components/Categories/Women"));
const Electronics = lazy(() => import("./Components/Categories/Electronics"));
const Jewelery = lazy(() => import("./Components/Categories/Jewelery"));
const Cart = lazy(() => import("./Components/cart/Cart"));

function App() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.filteredItems);
  const loading = useSelector((state) => state.products.status === "loading");
  const shoppingCart = useSelector((state) => state.shoppingCart.items);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveCartToLocalStorage(shoppingCart));
  }, [dispatch, shoppingCart]);

  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductsPage products={filteredProducts} loading={loading} />
            }
          />
          <Route
            path="/product/details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/products/men's clothes" element={<Men />} />
          <Route path="/products/women's clothes" element={<Women />} />
          <Route path="/products/electronics" element={<Electronics />} />
          <Route path="/products/jewelery" element={<Jewelery />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/products/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:formattedUsername/profile" element={<UserProfile />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
