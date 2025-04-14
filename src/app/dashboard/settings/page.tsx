import Link from 'next/link';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const SettingsPage = () => {
    
    const user = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Street, San Francisco, CA 94107",
        paymentMethods: ["Visa ending in 4242", "PayPal (john@example.com)"]
    };

    return (
        <div className="min-h-screen bg-gray-50 md:pt-16 pt-28">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Account Settings</h1>
                            <p className="text-gray-300 mt-1">Manage your account preferences</p>
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
                    {/* Settings Navigation */}
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="font-medium text-gray-800 mb-4">Settings</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded bg-gray-100 text-[#f3982d] font-medium">
                                        Personal Information
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Login & Security
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Payment Methods
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Address Book
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                                        Notifications
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Settings Content */}
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaUser className="mr-2 text-[#f3982d]" />
                                Personal Information
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            defaultValue="John"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            defaultValue="Doe"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            defaultValue={user.email}
                                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        defaultValue={user.phone}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                    />
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-800 mb-4">Password</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaLock className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="password"
                                                    id="currentPassword"
                                                    placeholder="Enter current password"
                                                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaLock className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="password"
                                                    id="newPassword"
                                                    placeholder="Enter new password"
                                                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="button"
                                        className="mr-3 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md font-medium transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;