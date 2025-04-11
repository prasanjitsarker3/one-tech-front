import type React from "react";
export interface CategoryCardType {
  categoryData: {
    id: number;
    categoryUrl: string;
    svg: React.ReactNode;
    title: string;
  };
}
