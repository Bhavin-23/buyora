import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../component/Filtersection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../component/ProductCard";
import Pagination from "../component/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";

const Products = () => {
  const { data, fetchAllProduct } = getData();

  // Filters & Pagination states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  const fakestoreData = data?.filter((item) => item.source === "fakestore");

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const filteredData = fakestoreData?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar filters */}
            <div className="lg:w-1/4 w-full lg:block">
              <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md shadow-yellow-500/20 lg:h-[70vh]">
                <FilterSection
                  search={search}
                  setSearch={setSearch}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  category={category}
                  setCategory={setCategory}
                  handleCategoryChange={handleCategoryChange}
                />
              </div>
            </div>

            {/* Products grid */}
            {filteredData?.length > 0 ? (
              <div className="flex flex-col justify-center items-center flex-grow w-full">
                <h2 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-4 sm:mb-5 tracking-wide text-center">
                  Explore Products
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-7 mt-4 w-full">
                  {filteredData
                    .slice((page - 1) * 8, page * 8)
                    .map((product, index) => (
                      <ProductCard
                        key={product.id || index}
                        product={product}
                      />
                    ))}
                </div>

                <div className="mt-6">
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center w-full mt-10">
                <Lottie
                  animationData={notfound}
                  className="w-[250px] sm:w-[400px] md:w-[500px]"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
            <video muted autoPlay loop className="w-40 sm:w-60 md:w-80">
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
