import { FaLock } from 'react-icons/fa';

const LoginSecurity = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaLock className="mr-2 text-[#f3982d]" />
                Login & Security
            </h2>

            <div className="space-y-6">
                {/* Password Section */}
                <div className="border-b border-gray-200 pb-6">
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
                            <p className="mt-1 text-xs text-gray-500">Minimum 8 characters with at least one number and one special character</p>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm new password"
                                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-700">Add an extra layer of security to your account</p>
                            <p className="text-xs text-gray-500 mt-1">Currently disabled</p>
                        </div>
                        <button className="bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Enable 2FA
                        </button>
                    </div>
                </div>

                {/* Recent Login Activity */}
                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Login Activity</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="text-sm font-medium">San Francisco, CA</p>
                                <p className="text-xs text-gray-500">Chrome on macOS • Just now</p>
                            </div>
                            <p className="text-sm text-green-600">This is you</p>
                        </div>
                        <div className="flex items-center justify-between py-2 border-t border-gray-200">
                            <div>
                                <p className="text-sm font-medium">New York, NY</p>
                                <p className="text-xs text-gray-500">Safari on iPhone • 3 days ago</p>
                            </div>
                            <button className="text-sm text-red-600 hover:text-red-800">
                                Revoke access
                            </button>
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
            </div>
        </div>
    );
};

export default LoginSecurity;