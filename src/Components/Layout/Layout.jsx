import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { useFirestore } from "../hooks/useFirestore.js";

export default function Layout() {
  useFirestore();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
