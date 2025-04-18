import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../store/categorySlice";
import { filterProductsByCategory } from "../store/searchSlice";
import ProductCard from "../Product Card/ProductCard";
import { Oval } from 'react-loader-spinner';
import Navbar2 from "../Navbar/Navbar2";
import NoProduct from '../../Images/noproduct.webp';

const Electronics = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.category.products);
  const filteredProducts = useSelector((state) => state.search.filteredProducts);
  const loading = useSelector((state) => state.category.status === "loading");
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    dispatch(fetchCategoryProducts("electronics"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterProductsByCategory({ products, category: "electronics" }));
  }, [dispatch, products, searchTerm]);

  return (
    <>
      <Navbar2 />
      <div className="p-4 bg-gray-100 flex flex-wrap justify-center">
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="text-center flex flex-col items-center justify-center h-full mt-10">
                <img src={NoProduct} alt="No Product Found" className="w-1/2 h-auto mb-4"/>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Electronics;
