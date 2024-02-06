import React from "react";
import NavBar from "../features/navbar/Navbar";
import ProductForm from "../features/admin/components/ProductForm";

export default function AdminProductFormPage() {
  return (
    <div>
      <NavBar>
        <ProductForm />
      </NavBar>
    </div>
  );
}
