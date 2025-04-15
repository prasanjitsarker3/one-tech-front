import { FaEnvelope, FaUser } from "react-icons/fa";
import { PersonalInformationType } from "./PersonalInformationType";

const PersonalInformation: React.FC<PersonalInformationType> = ({ userInfo }) => {

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUser className="mr-2 text-[#f3982d]" />
                Personal Information
            </h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            defaultValue="John"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            defaultValue="Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            defaultValue={userInfo.email}
                            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        defaultValue={userInfo.phone}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#f3982d] focus:border-[#f3982d] outline-none"
                    />
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="button"
                        className="mr-3 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50"
                    >Cancel</button>
                    <button
                        type="submit"
                        className="bg-[#f3982d] hover:bg-[#e08a27] text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInformation;