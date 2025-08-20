import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange,
}) => {
  const { categoryList = [] } = getData() || {};
  const safePriceRange =
    Array.isArray(priceRange) && priceRange.length === 2 ? priceRange : [0, 1000];

  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow-lg shadow-yellow-500/20 h-max hidden md:block w-[300px]">
      {/* Search box */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-800 p-2 rounded-md border border-gray-700 text-gray-100 w-full focus:outline-none focus:border-yellow-500"
        placeholder="Search Products..."
      />

      {/* Category filter */}
      <h2 className="mt-5 font-semibold text-lg text-yellow-500 tracking-wide">
        Category
      </h2>
      <div className="flex flex-col gap-2 mt-3">
        {categoryList?.map((cat, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-yellow-400"
          >
            <input
              type="radio"
              name="category"
              value={cat}
              checked={category === cat}
              onChange={handleCategoryChange}
              className="accent-yellow-500"
            />
            <span className="uppercase">{cat}</span>
          </label>
        ))}
      </div>

      {/* Price range */}
      <h2 className="mt-5 font-semibold text-lg text-yellow-500 tracking-wide">
        Price Range
      </h2>
      <div className="flex flex-col gap-2 text-gray-300">
        <label>Price: ${safePriceRange[0]} - ${safePriceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={safePriceRange[1]}
          onChange={(e) =>
            setPriceRange([safePriceRange[0], Number(e.target.value)])
          }
          className="w-full accent-yellow-500"
        />
      </div>

      {/* Reset button */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setPriceRange([0, 1000]);
        }}
        className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-md px-3 py-2 mt-6 w-full font-semibold shadow-md transition-all"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterSection;
