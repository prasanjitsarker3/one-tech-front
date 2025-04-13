import Image from "next/image";
import { FaLock, FaShoppingCart, FaCreditCard, FaTruck } from "react-icons/fa";

const CheckoutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 pb-6">Checkout</h1>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="flex items-center text-[#f3982d]">
                            <div className="bg-[#f3982d] text-white p-2 rounded-full">
                                <FaShoppingCart />
                            </div>
                            <span className="ml-2 font-medium">Cart</span>
                        </div>
                        <div className="h-px w-16 bg-[#f3982d]"></div>
                        <div className="flex items-center text-[#f3982d]">
                            <div className="bg-[#f3982d] text-white p-2 rounded-full">
                                <FaCreditCard />
                            </div>
                            <span className="ml-2 font-medium">Payment</span>
                        </div>
                        <div className="h-px w-16 bg-gray-300"></div>
                        <div className="flex items-center text-gray-400">
                            <div className="bg-gray-300 text-white p-2 rounded-full">
                                <FaTruck />
                            </div>
                            <span className="ml-2 font-medium">Shipping</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Payment Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Information</h2>

                            <form className="space-y-6">
                                {/* Card Details */}
                                <div>
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        id="card-number"
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            id="expiry"
                                            placeholder="MM/YY"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                                            CVC
                                        </label>
                                        <input
                                            type="text"
                                            id="cvc"
                                            placeholder="123"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Name on Card */}
                                <div>
                                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name on Card
                                    </label>
                                    <input
                                        type="text"
                                        id="card-name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                    />
                                </div>

                                {/* Billing Address */}
                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-800 mb-4">Billing Address</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                            />
                                        </div>
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                                State/Province
                                            </label>
                                            <input
                                                type="text"
                                                id="state"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                            />
                                        </div>
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                                                ZIP/Postal Code
                                            </label>
                                            <input
                                                type="text"
                                                id="zip"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="save-info"
                                        name="save-info"
                                        type="checkbox"
                                        className="h-4 w-4 text-[#f3982d] focus:ring-[#f3982d] border-gray-300 rounded"
                                    />
                                    <label htmlFor="save-info" className="ml-2 block text-sm text-gray-700">
                                        Save this information for next time
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            {/* Product List */}
                            <div className="space-y-4 mb-6">
                                {/* product-1 */}
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden">
                                            <figure className="w-full h-full">
                                                <Image
                                                    src="https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                                                    alt="MacBook Pro"
                                                    className="h-full w-full object-cover"
                                                    width={500}
                                                    height={500}
                                                />
                                            </figure>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-800">MacBook Pro 14&quot;</h4>
                                            <p className="text-xs text-gray-500">Space Gray, 16GB RAM, 512GB SSD</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-800">$1,999.00</p>
                                        <p className="text-xs text-gray-500">Qty: 1</p>
                                    </div>
                                </div>

                            </div>

                            {/* Order Totals */}
                            <div className="border-t border-gray-200 pt-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Subtotal</span>
                                    <span className="text-sm font-medium">$3,798.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Shipping</span>
                                    <span className="text-sm font-medium">$0.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Tax</span>
                                    <span className="text-sm font-medium">$303.84</span>
                                </div>
                                <div className="flex justify-between pt-2 border-t border-gray-200">
                                    <span className="text-base font-bold text-gray-800">Total</span>
                                    <span className="text-base font-bold">$4,101.84</span>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mt-6">
                                <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-1">
                                    Promo Code
                                </label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="promo-code"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-0 outline-none"
                                    />
                                    <button
                                        type="button"
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-r-md transition-colors"
                                    >Apply</button>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button
                                type="button"
                                className="mt-6 w-full bg-[#f3982d] hover:bg-[#e08a27] text-white py-3 px-4 rounded-md font-medium flex items-center justify-center cursor-pointer transition-colors">
                                <FaLock className="mr-2" />Complete Order </button>

                            <p className="mt-3 text-xs text-gray-500 text-center">
                                Your personal data will be used to process your order and support your experience throughout this website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;