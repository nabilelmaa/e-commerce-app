// ProductDetails.jsx
import React from "react";
import Image from "next/image";

function ProductDetails({ product }) {
  return (
    <div className="modal-box bg-white">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">Product Details</h3>
      <div>
        <h1 className="text-gray-700">
            {product?.attributes?.category}
        </h1>
        <h2 className="direction-rtl text-right" lang="ar">
          {product?.attributes?.description}
        </h2>
        <div className="flex justify-center">
          {product.attributes.product_details.data.map((detail, index) => {
            const imageUrl = detail.attributes.url;
            if (imageUrl) {
              return (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`product-detail-${index}`}
                  width={250}
                  height={250}
                  className="border rounded-t-lg h-[170px] object-cover"
                />
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center border rounded-t-lg h-[170px] bg-gray-300"
                >
                  No image available!
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
