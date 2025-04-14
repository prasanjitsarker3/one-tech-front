import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLaptop } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <FaLaptop className="text-2xl text-[#f3982d]" />
                            <span className="text-xl font-bold">One Tech</span>
                        </div>
                        <p className="text-gray-300">
                            Your premier destination for high-performance laptops. We offer the latest models with expert support and competitive pricing.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon href="#" icon={<FaFacebook />} />
                            <SocialIcon href="#" icon={<FaTwitter />} />
                            <SocialIcon href="#" icon={<FaInstagram />} />
                            <SocialIcon href="#" icon={<FaLinkedin />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#f3982d]">Quick Links</h3>
                        <ul className="space-y-2">
                            <FooterLink href="/" text="Home" />
                            <FooterLink href="/products" text="All Laptops" />
                            <FooterLink href="/deals" text="Special Deals" />
                            <FooterLink href="/about" text="About Us" />
                            <FooterLink href="/contact" text="Contact" />
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#f3982d]">Customer Service</h3>
                        <ul className="space-y-2">
                            <FooterLink href="/shipping" text="Shipping Policy" />
                            <FooterLink href="/returns" text="Return Policy" />
                            <FooterLink href="/warranty" text="Warranty Info" />
                            <FooterLink href="/faq" text="FAQs" />
                            <FooterLink href="/support" text="Support Center" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#f3982d]">Contact Us</h3>
                        <address className="text-gray-300 not-italic">
                            <p>123 Tech Street</p>
                            <p>Khulna, KH 94107</p>
                            <p className="mt-2">Email: info@onetech.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </address>
                        <div className="pt-2">
                            <h4 className="font-medium text-[#f3982d]">Newsletter</h4>
                            <form className="mt-2 flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 text-white rounded-l focus:outline-none ring-1 ring-[#f3982d] w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-r transition-colors outline-1 outline-[#f3982d]"
                                >Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm">
                        &copy; {currentYear} One Tech. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <FooterLink href="/privacy" text="Privacy Policy" small />
                        <FooterLink href="/terms" text="Terms of Service" small />
                        <FooterLink href="/sitemap" text="Sitemap" small />
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper component for social icons
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link
        href={href}
        className="text-gray-300 hover:text-[#f3982d] transition-colors duration-300 text-xl"
        aria-label="Social media link"
    >
        {icon}
    </Link>
);

// Helper component for footer links
const FooterLink = ({ href, text, small = false }: { href: string; text: string; small?: boolean }) => (
    <li>
        <Link
            href={href}
            className={`${small ? 'text-sm' : 'text-base'} text-gray-300 hover:text-[#f3982d] transition-colors duration-300`}
        >
            {text}
        </Link>
    </li>
);

export default Footer;