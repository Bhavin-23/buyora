import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

const ProductRouter = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/" />;
};

export default ProductRouter;
