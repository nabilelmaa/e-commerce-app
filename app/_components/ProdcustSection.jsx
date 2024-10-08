"use client";
import React, { useState, useEffect } from "react";
import ProductList from "../_components/ProductList";
import ProductsAPI from "../_utils/ProductsAPI";
import { FaCircleArrowDown } from "react-icons/fa6";
import BreadCrumb from "./BreadCrumb";
import Pagination from "./Pagination";
import Form from "./Form";

function ProdcustSection() {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    getLatestProducts_();
  }, []);

  
  const getLatestProducts_ = () => {
    ProductsAPI.getLatestProducts().then((response) => {
      setProducts(response.data.data);
    });
  };

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className="pt-4 pb-4">
        <BreadCrumb />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[24px] flex-1 text-gray-700">
            Explore our popular products!
          </p>

          <FaCircleArrowDown className="mx-2 animate-blink" />
          <div className="flex-1 text-right" lang="ar">
            <p className="font-semibold text-[24px] flex-1 text-gray-700">
              !استكشف منتجاتنا الشهيرة
            </p>
          </div>
        </div>
        <div className="pt-4">
          <ProductList products={currentProducts} />
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default ProdcustSection;
