import React, { useEffect, useState } from "react";
import Breadcrums from "../component/Breadcrums";
import Loading from "../assets/Loading4.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id || !id.includes("-")) return;
        const [prefix, pid] = id.split("-");
        let response;

        if (prefix === "fs") {
          response = await axios.get(`https://fakestoreapi.com/products/${pid}`);
        } else if (prefix === "ps") {
          response = await axios.get(`https://dummyjson.com/products/${pid}`);
        }
        if (response?.data) {
          const prod = response.data;
          setProduct({
            id: id,
            title: prod.title,
            description: prod.description,
            category: prod.category,
            price: prod.price,
            image: prod.image || (prod.images ? prod.images[0] : ""),
          });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <video autoPlay muted loop>
          <source src={Loading} type="video/mp4" />
        </video>
      </div>
    );
  }

  const originalPrice = Math.round(product.price * 1.2);

  return (
    <div className="px-4 pb-4 mt-0 md:px-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <Breadcrums title={product.title} />

      <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full bg-gray-800 p-4 rounded-2xl shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full object-contain max-h-[450px] mx-auto"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <h1 className="md:text-3xl text-xl font-bold">{product.title}</h1>

          <div className="uppercase text-yellow-500 tracking-wider">
            {product.category}
          </div>

          <p className="text-2xl font-bold text-yellow-500">
            ${product.price}
            <span className="line-through text-gray-400 ml-3 text-lg">
              ${originalPrice}
            </span>
          </p>

          <p className="text-gray-300 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-300">Quantity:</label>
            <input
              type="number"
              min={1}
              value={1}
              readOnly
              className="w-20 border border-gray-600 bg-gray-800 rounded-lg px-3 py-1 text-white"
            />
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 flex items-center gap-2 px-6 py-3 text-lg bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
            <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
