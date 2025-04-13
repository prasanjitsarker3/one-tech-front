"use client"

import Link from "next/link";
import { useState } from "react";
import { MenuType } from "./MobileMenuType";

const MobileMenu: React.FC<MenuType> = ({ links }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="block md:hidden">
            <div onClick={() => setIsActive(isActive => !isActive)} className="flex flex-col gap-2 justify-center items-center cursor-pointer">
                <span className={`${isActive && "rotate-45 origin-[25%]"} border bg-black border-black w-7 h-[2px] transition-all duration-500`}></span>
                <span className={`${isActive && "-rotate-45 origin-[25%]"} border bg-black border-black w-7 h-[2px] transition-all duration-500`}></span>
            </div>
            <div className={`${isActive ? "h-60 py-5 border-gray-400" : "h-0 py-0 border-transparent"} md:hidden flex flex-col gap-3 absolute w-full left-0 top-[104px] overflow-y-auto border-b bg-white z-50 transition-all duration-500`}>
                {
                    links.map(menu => menu?.subMenus ? menu?.subMenus.map(menu => menu.slag ? <Link className="font-bold text-gray-800 w-2/3 mx-auto" href={menu.slag} key={menu.id}>{menu.title}</Link> : null) : menu?.slag ? <Link className="font-bold text-gray-800 w-2/3 mx-auto" href={menu.slag} key={menu.id}>{menu.title}</Link> : null)
                }
            </div>
        </div>
    );
};

export default MobileMenu;