"use client";
import Drawer from "@/components/common/AddToCartDrawer";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Drawer />
      <Footer />
    </div>
  );
};

export default layout;
