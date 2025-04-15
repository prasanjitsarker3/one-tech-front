import { FaBell } from "react-icons/fa";
import { NotificationsType } from "./NotificationsType";


const Notifications: React.FC<NotificationsType> = ({ notifications }) => {

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaBell className="mr-2 text-[#f3982d]" />
                Notification Preferences
            </h2>

            <div className="space-y-6">
                {/* Email Notifications */}
                <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-800">Account notifications</p>
                                <p className="text-xs text-gray-500">Important updates about your account</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={notifications.email} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f3982d]"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-800">Order updates</p>
                                <p className="text-xs text-gray-500">Shipping notifications and order status</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={notifications.orderUpdates} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f3982d]"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-800">Promotions & offers</p>
                                <p className="text-xs text-gray-500">Discounts and special offers</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={notifications.promotions} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f3982d]"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* SMS Notifications */}
                <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">SMS Notifications</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-800">Order updates via SMS</p>
                            <p className="text-xs text-gray-500">Shipping notifications and order status</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked={notifications.sms} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f3982d]"></div>
                        </label>
                    </div>
                </div>

                {/* Push Notifications */}
                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Push Notifications</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-800">Enable push notifications</p>
                            <p className="text-xs text-gray-500">Get real-time updates on your device</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f3982d]"></div>
                        </label>
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
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notifications;