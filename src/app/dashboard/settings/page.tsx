'use client';

import DashboardHeader from '@/components/DashboardComponents/DashboardHeader/DashboardHeader';
import LoginSecurity from '@/components/DashboardComponents/SettingsPageComponents/LoginSecurity/LoginSecurity';
import Notifications from '@/components/DashboardComponents/SettingsPageComponents/Notifications/Notifications';
import PaymentMethods from '@/components/DashboardComponents/SettingsPageComponents/PaymentMethods/PaymentMethods';
import PersonalInformation from '@/components/DashboardComponents/SettingsPageComponents/PersonalInformation/PersonalInformation';
import { useState } from 'react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const user = {
        userInfo: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            address: "123 Tech Street, San Francisco, CA 94107",
        },
        paymentMethods: [
            { id: 1, type: 'visa', info: '4242', default: true },
            { id: 2, type: 'paypal', info: 'john@example.com', default: false }
        ],
        notifications: {
            email: true,
            sms: false,
            promotions: true,
            orderUpdates: true
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 md:pt-16 pt-28">
            {/* Dashboard Header */}
            <DashboardHeader dashboardHeaderData={{ heading: "Account Settings", subHeading: "Manage your account preferences" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Settings Navigation */}
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="font-medium text-gray-800 mb-4">Settings</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setActiveTab('personal')}
                                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'personal' ? 'bg-gray-100 text-[#f3982d] font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                                    >
                                        Personal Information
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('login')}
                                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'login' ? 'bg-gray-100 text-[#f3982d] font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                                    >Login & Security</button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('payments')}
                                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'payments' ? 'bg-gray-100 text-[#f3982d] font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                                    >Payment Methods</button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveTab('notifications')}
                                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'notifications' ? 'bg-gray-100 text-[#f3982d] font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                                    >Notifications</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Settings Content */}
                    <div className="md:w-3/4">
                        {/* Personal Information Tab */}
                        {activeTab === 'personal' && <PersonalInformation userInfo={user.userInfo} />}

                        {/* Login & Security Tab */}
                        {activeTab === 'login' && <LoginSecurity />}

                        {/* Payment Methods Tab */}
                        {activeTab === 'payments' && <PaymentMethods paymentMethods={user.paymentMethods} />}

                        {/* Notifications Tab */}
                        {activeTab === 'notifications' && <Notifications notifications={user.notifications} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;