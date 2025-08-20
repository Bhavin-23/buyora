import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      {/* Prev Button */}
      <button
        disabled={page === 1}
        className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-all ${
          page === 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-yellow-500 hover:bg-yellow-400 text-black"
        }`}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {getPages(page, dynamicPage)?.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          className={`cursor-pointer px-3 py-1 rounded-md transition-all ${
            item === page
              ? "bg-yellow-500 text-black font-bold shadow-md"
              : "text-gray-300 hover:text-yellow-400"
          }`}
        >
          {item}
        </span>
      ))}

      {/* Next Button */}
      <button
        disabled={page === dynamicPage}
        className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-all ${
          page === dynamicPage
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-yellow-500 hover:bg-yellow-400 text-black"
        }`}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
