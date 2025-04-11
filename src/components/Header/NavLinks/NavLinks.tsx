"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLinksType } from "./NavLinksType";

const NavLinks: React.FC<NavLinksType> = ({ allMenus }) => {
  return (
    <NavigationMenu className=" bg-none cursor-pointer">
      <NavigationMenuList className=" cursor-pointer">
        {allMenus.map((allMenu) => (
          <NavigationMenuItem key={allMenu.id}>
            <NavigationMenuTrigger>{allMenu.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-80 cursor-pointer">
              <ul className=" p-4">
                {allMenu?.subMenus?.map((subMenu) => (
                  <li key={subMenu.id} className="text-sm font-medium mb-4">
                    <Link href={subMenu.slag}>{subMenu.title}</Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
