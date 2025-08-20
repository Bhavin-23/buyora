import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNewData } from "../context/NewDataContext";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";
import Loading from "../assets/Loading4.webm";
import Pagination from "../component/Pagination";
import { useCart } from "../context/CartContext";

const getUniqueCategories = (items, key) => {
  if (!items) return [];
  return ["All", ...new Set(items.map((item) => item[key]))];
};

const Products2 = () => {
  const { data, fetchAllProduct } = useNewData();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const categoryList = getUniqueCategories(data, "category");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleResetFilters = () => {
    setSearch("");
    setCategory("All");
    setPriceRange([0, 5000]);
    setPage(1);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            {/* Sidebar Filter */}
            <div className="w-1/4 hidden md:block">
              <div className="bg-gray-900 text-white rounded-xl p-5 shadow-md shadow-yellow-500/20">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border-2 border-yellow-500 rounded px-3 py-2 w-full mb-4 bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400"
                />

                <label className="block mb-2 text-lg font-semibold text-yellow-500">
                  Category
                </label>
                <div className="mb-5 space-y-2">
                  {categoryList?.map((cat, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 cursor-pointer"
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

                <label className="block mb-2 text-lg font-semibold text-yellow-500">
                  Price Range
                </label>
                <label className="block mb-1 text-gray-300">
                  Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-yellow-500"
                />

                <button
                  onClick={handleResetFilters}
                  className="mt-5 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg w-full font-semibold shadow-md transition-all"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-3/4">
              {filteredData?.length > 0 ? (
                <>
                  <h2 className="text-yellow-500 text-2xl font-bold mb-8 tracking-wide text-center">
                    Explore Products
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {filteredData
                      .slice((page - 1) * 8, page * 8)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-transform duration-300 p-4 flex flex-col justify-between cursor-pointer"
                          onClick={() =>
                            navigate(`/products2/${product.id}`, {
                              state: { from: "product2" },
                            })
                          }
                        >
                          <div className="h-40 w-full flex justify-center items-center ">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="object-contain h-full max-w-[80%]"
                            />
                          </div>
                          <h3 className="text-sm font-medium text-gray-200 line-clamp-2 mt-3 min-h-[36px]">
                            {product.title}
                          </h3>
                          <p className="text-lg font-bold text-yellow-500 mt-1 mb-3">
                            ₹{product.price}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(product);
                            }}
                            className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black py-2 text-sm rounded-lg flex items-center justify-center gap-2 shadow-md transition-all"
                          >
                            <FontAwesomeIcon
                              icon={faCartShopping}
                              className="w-4 h-4"
                            />
                            Add to Cart
                          </button>
                        </div>
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center mt-8">
                    <Pagination
                      pageHandler={pageHandler}
                      page={page}
                      dynamicPage={dynamicPage}
                    />
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                  <Lottie animationData={notfound} className="w-[500px]" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products2;
