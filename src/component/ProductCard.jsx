import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      className="bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-transform duration-300 flex flex-col justify-between cursor-pointer"
      style={{ height: "100%" }}
    >
      {/* Product Image */}
      <div
        className="flex justify-center items-center mb-3"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-40 object-contain"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-sm font-medium text-gray-200 line-clamp-2 h-10">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-lg font-bold text-yellow-500 mb-3">
        ${product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg w-full flex items-center justify-center gap-2 shadow-md transition-all"
      >
        <FontAwesomeIcon icon={faCartShopping} className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
