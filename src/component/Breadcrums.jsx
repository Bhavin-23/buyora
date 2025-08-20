import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <h1 className="text-lg md:text-xl font-medium text-gray-300">
        <span
          className="cursor-pointer hover:text-yellow-500 transition"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        <span className="text-gray-500 mx-1">/</span>
        <span
          className="cursor-pointer hover:text-yellow-500 transition"
          onClick={() => navigate("/products")}
        >
          Products
        </span>{" "}
        <span className="text-gray-500 mx-1">/</span>
        <span className="text-yellow-500">{title}</span>
      </h1>
    </div>
  );
};

export default Breadcrums;
