import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";
import { Input } from "../ui/input";
import { FaCartPlus } from "react-icons/fa";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
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
        <div className="py-4 border">
            <div className="container mx-auto px-4 gap-4 flex justify-between items-center">
                <div>
                    <Link href="/" >
                        {/* <figure className="max-h-12">
                            <Image className="h-full w-full" src={logo} width={200} height={30} alt="Logo" />
                        </figure> */}
                        <h2 className="font-bold text-4xl">One Tech</h2>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <NavLinks allMenus={allMenus} />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Input className="" type="text" placeholder="Search" />
                    <Link href="/" className="cursor-pointer"><FaCartPlus className="text-xl" /></Link>
                </div>
                <MobileMenu links={allMenus} />
            </div>
        </div>
    );
};

export default Header;