import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Navigate replace={true} to={"/login"} />;
  }
  if (!user && !user.role == "admin") {
    return <Navigate replace={true} to={"/"} />;
  }
  return children;
}
