import CategoryDisplay from "@/components/HomeComponents/CategoryDisplay";
import CategoryNavigation from "@/components/HomeComponents/CategoryLaptop";
import FeatureProduct from "@/components/HomeComponents/FeatureProduct";
import Banner from "@/components/HomeComponents/MainBanner";
import ProductCollection from "@/components/HomeComponents/ProductCollection";
import SubscriptionOffer from "@/components/HomeComponents/SubscriptionOffer";
import Testimonials from "@/components/HomeComponents/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <FeatureProduct />
      <CategoryNavigation />
      <ProductCollection />
      <CategoryDisplay />
      <Testimonials />
      <SubscriptionOffer />
    </div>
  );
};

export default page;
