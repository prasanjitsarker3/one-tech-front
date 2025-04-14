import Link from 'next/link';
import { FaShoppingBag, FaCheckCircle, FaTruck, FaTimesCircle, FaChevronLeft } from 'react-icons/fa';

const OrdersPage = () => {
    
    const orders = [
        {
            id: "#LPT-78945",
            date: "2023-10-15",
            status: "Delivered",
            total: "$1,299.00",
            items: [
                { name: "MacBook Air M1", price: "$999.00", qty: 1, image: "/images/macbook-air.jpg" },
                { name: "USB-C Adapter", price: "$49.00", qty: 2, image: "/images/adapter.jpg" }
            ],
            shippingAddress: "123 Tech Street, San Francisco, CA 94107",
            paymentMethod: "Visa ending in 4242"
        },
        {
            id: "#LPT-78231",
            date: "2023-09-28",
            status: "Shipped",
            total: "$2,499.00",
            items: [
                { name: "MacBook Pro 14", price: "$2,499.00", qty: 1, image: "/images/macbook-pro.jpg" }
            ],
            shippingAddress: "123 Tech Street, San Francisco, CA 94107",
            paymentMethod: "PayPal (john@example.com)"
        },
        {
            id: "#LPT-77654",
            date: "2023-08-10",
            status: "Cancelled",
            total: "$1,799.00",
            items: [
                { name: "Dell XPS 15", price: "$1,799.00", qty: 1, image: "/images/dell-xps.jpg" }
            ],
            shippingAddress: "123 Tech Street, San Francisco, CA 94107",
            paymentMethod: "Mastercard ending in 5555"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 md:pt-16 pt-28">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">My Orders</h1>
                            <p className="text-gray-300 mt-1">View your order history</p>
                        </div>
                        <Link
                            href="/dashboard"
                            className="flex items-center text-sm text-[#f3982d] hover:text-[#e08a27]"
                        >
                            <FaChevronLeft className="mr-1" /> Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="font-medium text-gray-800 mb-4">Order Filters</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded bg-gray-100 text-[#f3982d] font-medium">
                                        All Orders
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Completed
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Processing
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Cancelled
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Orders Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {orders.map((order) => (
                                            <tr key={order.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#f3982d]">
                                                    <Link href={`/dashboard/orders/${order.id}`}>{order.id}</Link>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    {order.status === "Delivered" && (
                                                        <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            <FaCheckCircle className="mr-1" /> Delivered
                                                        </span>
                                                    )}
                                                    {order.status === "Shipped" && (
                                                        <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                            <FaTruck className="mr-1" /> Shipped
                                                        </span>
                                                    )}
                                                    {order.status === "Cancelled" && (
                                                        <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            <FaTimesCircle className="mr-1" /> Cancelled
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <Link
                                                        href={`/dashboard/orders/${order.id}`}
                                                        className="text-[#f3982d] hover:text-[#e08a27] font-medium"
                                                    >
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Empty State */}
                            {orders.length === 0 && (
                                <div className="text-center py-12">
                                    <FaShoppingBag className="mx-auto text-4xl text-gray-400 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">No orders yet</h3>
                                    <p className="mt-1 text-gray-500">Your order history will appear here</p>
                                    <Link
                                        href="/products"
                                        className="mt-4 inline-block bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md font-medium transition-colors"
                                    >
                                        Shop Laptops
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;