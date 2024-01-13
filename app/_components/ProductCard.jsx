import React from "react";
import Image from "next/image";
import { CgDetailsMore } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import ProductDetails from "../product-details/[product-id]/page";

function ProductCard({ product }) {
  const modalId = `product-detail-modal-${product.id}`;

  const isBannerLoaded = product?.attributes?.banner?.data?.attributes?.url;
  const isTitleLoaded = product?.attributes?.title;
  const isPriceLoaded = product?.attributes?.price;
  console.log(product);

  return (
    <div className="p-1 rounded-lg hover:border hover:shadow-md max-w-[250px] cursor-pointer hover:ring ring-indigo-50">
      {isBannerLoaded ? (
        <Image
          src={product.attributes.banner.data.attributes.url}
          alt="banner"
          width={250}
          height={170}
          className="border rounded-t-lg h-[170px] object-cover"
        />
      ) : (
        // <div className="flex justify-center items-center max-w-[250px] h-[170px] bg-slate-200 rounded-t-lg animate-pulse"></div>

        <div className="skeleton h-32 w-full"></div>
      )}

      <div className="pt-2 max-w-[250px] bg-gray-100">
        {isTitleLoaded ? (
          <h2 className="text-[12px] font-semibold line-clamp-1">
            {product.attributes.title}
          </h2>
        ) : (
          <div className="h-4 bg-slate-200 rounded animate-pulse mb-2"></div>
        )}

        {isPriceLoaded ? (
          <h2 className="font-bold">
            <span className="text-[12px]">DH </span>
            {product.attributes.price}
          </h2>
        ) : (
          <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
        )}

        <div className="flex flex-col justify-between items-center max-w-[250px] rounded-md space-y-2">
          <button
            className="flex items-center justify-start w-full flex-grow h-8 py-0.5 px-1 text-gray-100 bg-gray-400 border-none hover:bg-gray-500 rounded-md transition-colors duration-200 ease-in-out"
            onClick={() => document.getElementById(modalId).showModal()}
          >
            <CgDetailsMore className="text-white" />
            <span className="ml-2">Details</span>
          </button>
          <button className="flex items-center justify-start w-full flex-grow h-8 py-0.5 px-1 text-gray-100 bg-gray-500 border-none hover:bg-gray-600 rounded-md transition-colors duration-200 ease-in-out">
            <BsCart4 className="text-white mr-2" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <dialog id={modalId} className="modal">
        <ProductDetails product={product} />
      </dialog>
    </div>
  );
}

export default ProductCard;

// import React from "react";
// import Image from "next/image";
// import { CgDetailsMore } from "react-icons/cg";
// import { BsCart4 } from "react-icons/bs";
// import ProductDetails from "../product-details/[product-id]/page";

// function CartItem({ product }) {
//   const modalId = `product-detail-modal-${product.id}`;

//   return (
//     <div className="p-1 rounded-lg hover:border hover:shadow-md max-w-[250px] cursor-pointer hover:ring ring-indigo-50">
//       {product?.attributes?.banner?.data?.attributes?.url ? (
//         <Image
//           src={product.attributes.banner.data.attributes.url}
//           alt="banner"
//           width={250}
//           height={170}
//           className="border rounded-t-lg h-[170px] object-cover"
//         />
//       ) : (
//         <div className="flex justify-center items-center max-w-[250px] h-[170px] bg-slate-200 rounded-t-lg animate-pulse">
//           <span className="text-gray-400">Loading...</span>
//         </div>
//       )}
//       <div className="pt-2 max-w-[250px] bg-gray-100">
//         <h2 className="text-[12px] font-semibold line-clamp-1">
//           {product?.attributes?.title}
//         </h2>
//         <h2 className="font-bold">
//           <span className="text-[12px]">DH </span>
//           {product?.attributes?.price}
//         </h2>
//         <div className="flex justify-between items-center max-w-[250px] rounded-md">
//           <button
//             className="btn flex-1 h-8 py-0.5 px-1 text-gray-100 bg-blue-800 border-none hover:bg-blue-700"
//             onClick={() => document.getElementById(modalId).showModal()}
//           >
//             <CgDetailsMore className="text-white" />
//             <span className="flex-grow text-center">Details</span>
//           </button>
//           <button className="btn flex-1 h-8 py-0.5 px-1 text-gray-100 bg-blue-600 border-none hover:bg-blue-700">
//             <span className="flex-grow text-center">Add to cart</span>
//             <BsCart4 className="text-white" />
//           </button>
//         </div>
//       </div>
//       <dialog id={modalId} className="modal">
//         <ProductDetails product={product} />
//       </dialog>
//     </div>
//   );
// }

// export default CartItem;

//--------------------

// import React from "react";
// import Image from "next/image";
// import { CgDetailsMore } from "react-icons/cg";
// import { BsCart4 } from "react-icons/bs";

// function ProductCart({ product }) {
//   const modalId = `product-detail-modal-${product.id}`;
//   return (
//     <div className="p-1 rounded-lg hover:border hover:shadow-md max-w-[250px] cursor-pointehover:ring ring-indigo-50">
//       <Image
//         src={product?.attributes?.banner?.data?.attributes?.url}
//         alt="banner"
//         width={250}
//         height={250}
//         className="border rounded-t-lg h-[170px] object-cover"
//       />
//       <div className="pt-2 max-w-[250px] bg-gray-100">
//         <h2 className="text-[12px] font-semibold line-clamp-1">
//           {product?.attributes?.title}
//         </h2>
//         <h2 className="font-bold">
//           <span className="text-[12px]">DH </span>
//           {product?.attributes?.price}
//         </h2>
//         <div className="flex justify-between items-center max-w-[250px] rounded-md">
//           <button
//             className="btn flex-1 h-8 py-0.5 px-1 text-gray-100 bg-blue-800 border-none hover:bg-blue-700"
//             onClick={() => document.getElementById(modalId).showModal()}
//           >
//             <CgDetailsMore className="text-white" />
//             <span className="flex-grow text-center">Details</span>
//           </button>
//           <button className="btn flex-1 h-8 py-0.5 px-1 text-gray-100 bg-blue-600 border-none hover:bg-blue-700">
//             <span className="flex-grow text-center">Add to cart</span>
//             <BsCart4 className="text-white" />
//           </button>

//           <dialog id={modalId} className="modal">
//             <div className="modal-box bg-white">
//               <form method="dialog">
//                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                   ✕
//                 </button>
//               </form>
//               <h3 className="font-bold text-lg">Product Details</h3>

//               <div>
//                 <h2 className="direction-rtl text-right" lang="ar">
//                   {product?.attributes?.description}
//                 </h2>
//                 <div className="flex justify-center">
//                   {product.attributes.product_details.data.map(
//                     (detail, index) => {
//                       const imageUrl = detail.attributes.url;
//                       if (imageUrl) {
//                         return (
//                           <Image
//                             key={index}
//                             src={imageUrl}
//                             alt={`product-detail-${index}`}
//                             width={250}
//                             height={250}
//                             className="border rounded-t-lg h-[170px] object-cover"
//                           />
//                         );
//                       } else {
//                         return (
//                           <div
//                             key={index}
//                             className="flex justify-center items-center border rounded-t-lg h-[170px] bg-gray-300"
//                           >
//                             No image available!
//                           </div>
//                         );
//                       }
//                     }
//                   )}
//                 </div>
//               </div>
//             </div>
//           </dialog>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCart;

// CartItem.jsx
