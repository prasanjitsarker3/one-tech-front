"use client"

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
        <NavigationMenu>
            <NavigationMenuList>
                {
                    allMenus.map(allMenu => <NavigationMenuItem key={allMenu.id}>
                        <NavigationMenuTrigger>{allMenu.title}</NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-80">
                            <ul className="bg-gray-100 p-4 rounded-md">
                                {
                                    allMenu?.subMenus?.map(subMenu => <li key={subMenu.id} className="border-b border-gray-200 text-sm font-medium mb-4"><Link href={subMenu.slag}>{subMenu.title}</Link></li>)
                                }
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>)
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavLinks;