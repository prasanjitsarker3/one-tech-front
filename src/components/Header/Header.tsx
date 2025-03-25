import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { NavLinks } from "./NavLinks/NavLinks";
import { Input } from "../ui/input";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    return (
        <div className="py-4 border">
            <div className="container mx-auto px-4 gap-4 flex justify-between items-center">
                <div>
                    <Link href="/" >
                        <figure className="max-h-12">
                            <Image className="h-full w-full" src={logo} width={200} height={30} alt="Logo" />
                        </figure>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <NavLinks />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Input className="" type="text" placeholder="Search" />
                    <Link href="/" className="cursor-pointer"><FaCartPlus className="text-xl" /></Link>
                </div>

            </div>
        </div>
    );
};

export default Header;