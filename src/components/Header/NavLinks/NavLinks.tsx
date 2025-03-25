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

export function NavLinks() {

    const allMenus = [
        {
            id: 1,
            title: "Desktop",
            subMenus: [
                {
                    id: 1,
                    title: "Start PC",
                    slag: "/"
                },
                {
                    id: 2,
                    title: "Gaming PC",
                    slag: "/"
                },
                {
                    id: 3,
                    title: "Barnd PC",
                    slag: "/"
                },
            ]
        },
        {
            id: 2,
            title: "Laptop",
            subMenus: [
                {
                    id: 1,
                    title: "Asus",
                    slag: "/"
                },
                {
                    id: 2,
                    title: "Dell",
                    slag: "/"
                },
                {
                    id: 3,
                    title: "HP",
                    slag: "/"
                },
                {
                    id: 4,
                    title: "Lenavo",
                    slag: "/"
                },
            ]
        },
        {
            id: 3,
            title: "Computer",
            subMenus: [
                {
                    id: 1,
                    title: "Processor",
                    slag: "/"
                },
                {
                    id: 2,
                    title: "Motherboard",
                    slag: "/"
                },
                {
                    id: 3,
                    title: "Graphics Card",
                    slag: "/"
                },
                {
                    id: 4,
                    title: "SSD",
                    slag: "/"
                }
            ]
        },
    ]

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