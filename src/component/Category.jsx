import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data = [], fetchAllProduct } = getData() || {};

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchAllProduct();
    }
  }, [data, fetchAllProduct]);

  const getUniqueCategories = (items, key) => {
    if (!items) return [];
    return [...new Set(items.map((item) => item[key]))];
  };

  const categories = getUniqueCategories(data, "category");

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 bg-gray-950">
        <p className="text-yellow-400 text-lg">Loading Categories...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 py-8 shadow-inner shadow-yellow-600/20">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${category}`)}
            className="uppercase bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-yellow-400/40 transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
