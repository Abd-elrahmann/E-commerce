import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Product Card/ProductCard';
import { motion } from 'framer-motion';
import Navbar2 from '../../Navbar/Navbar2';
import { Oval } from 'react-loader-spinner'; // Import Oval loader component
import Footer from '../../HomePage/Footer/Footer';
import NoProduct from '../../../Images/noproduct.webp'

const ProductsPage = () => {
  const filteredProducts = useSelector((state) => state.search.filteredProducts);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.status === "loading");

  const displayedProducts = searchTerm ? filteredProducts : products;

  return (
    <>
      <Navbar2 />
      <div className="p-4 bg-gray-100 flex flex-col items-center">
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 max-w-screen-xl w-full">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="w-64"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="text-center flex flex-col items-center justify-center h-full mt-10">
                <img src={NoProduct} alt="No Product Found" className="w-1/2 h-auto mb-4"/>
                <p className="text-gray-500 ">Try searching for something else or explore our other categories.</p>
              </div>
            )}
          </div>
        )}
        {displayedProducts.length>0? (
        <Footer />

        ): ''}
      </div>
    </>
  );
};

export default ProductsPage;
