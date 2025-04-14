
import Link from 'next/link';
import {
    FaUser,
    FaShoppingBag,
    FaHeart,
    FaCog,
    FaHistory,
    FaBoxOpen,
    FaCheckCircle,
    FaTruck,
    FaTimesCircle
} from 'react-icons/fa';

const DashboardPage = () => {
    
    const user = {
        name: "John Doe",
        email: "john@example.com",
        joinedDate: "January 15, 2023"
    };

    const orders = [
        { id: "#LPT-78945", date: "2023-10-15", status: "Delivered", total: "$1,299.00", items: ["MacBook Air M1"] },
        { id: "#LPT-78231", date: "2023-09-28", status: "Shipped", total: "$2,499.00", items: ["MacBook Pro 14"] },
        { id: "#LPT-77654", date: "2023-08-10", status: "Cancelled", total: "$1,799.00", items: ["Dell XPS 15"] }
    ];

    const wishlist = [
        { id: 1, name: "Asus ROG Zephyrus", price: "$1,899.00" },
        { id: 2, name: "HP Spectre x360", price: "$1,299.00" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 md:pt-16 pt-28">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold">My Account</h1>
                    <p className="text-gray-300 mt-1">Welcome back, {user.name}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Dashboard Sidebar */}
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-[#f3982d] flex items-center justify-center text-white">
                                        <FaUser className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{user.name}</h3>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                            <nav className="p-4">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 text-[#f3982d] font-medium"
                                >
                                    <FaUser className="text-gray-500" />
                                    <span>My Profile</span>
                                </Link>
                                <Link
                                    href="/dashboard/orders"
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700"
                                >
                                    <FaShoppingBag className="text-gray-500" />
                                    <span>My Orders</span>
                                </Link>
                                <Link
                                    href="/dashboard/wishlist"
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700"
                                >
                                    <FaHeart className="text-gray-500" />
                                    <span>Wishlist</span>
                                </Link>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700"
                                >
                                    <FaCog className="text-gray-500" />
                                    <span>Account Settings</span>
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Dashboard Main Content */}
                    <div className="md:w-3/4">
                        {/* Profile Overview */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaUser className="mr-2 text-[#f3982d]" />
                                Profile Overview
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                                    <p className="mt-1 text-gray-800">{user.name}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                                    <p className="mt-1 text-gray-800">{user.email}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                                    <p className="mt-1 text-gray-800">{user.joinedDate}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Password</h3>
                                    <p className="mt-1 text-gray-800">••••••••</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md font-medium transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaHistory className="mr-2 text-[#f3982d]" />
                                Recent Orders
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
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
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {order.items.map((item, i) => (
                                                        <div key={i}>{item}</div>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 text-right">
                                <Link
                                    href="/dashboard/orders"
                                    className="text-[#f3982d] hover:text-[#e08a27] text-sm font-medium"
                                >
                                    View All Orders →
                                </Link>
                            </div>
                        </div>

                        {/* Wishlist */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaHeart className="mr-2 text-[#f3982d]" />
                                Your Wishlist
                            </h2>

                            {wishlist.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {wishlist.map((item) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between">
                                                <h3 className="font-medium">{item.name}</h3>
                                                <span className="text-[#f3982d] font-medium">{item.price}</span>
                                            </div>
                                            <div className="mt-4 flex space-x-2">
                                                <button className="flex-1 bg-[#f3982d] hover:bg-[#e08a27] text-white py-2 px-4 rounded text-sm font-medium transition-colors">
                                                    Add to Cart
                                                </button>
                                                <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded text-sm font-medium transition-colors">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <FaBoxOpen className="mx-auto text-4xl text-gray-400 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">Your wishlist is empty</h3>
                                    <p className="mt-1 text-gray-500">Save your favorite laptops here for easy access</p>
                                    <Link
                                        href="/products"
                                        className="mt-4 inline-block bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md font-medium transition-colors"
                                    >
                                        Browse Laptops
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

export default DashboardPage;