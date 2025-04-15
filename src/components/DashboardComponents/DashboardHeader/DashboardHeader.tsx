import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { DashboardHeaderType } from "./DashboardHeaderType";

const DashboardHeader: React.FC<DashboardHeaderType> = ({ dashboardHeaderData }) => {
    return (
        <div className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">{dashboardHeaderData.heading}</h1>
                        <p className="text-gray-300 mt-1">{dashboardHeaderData.subHeading}</p>
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
    );
};

export default DashboardHeader;