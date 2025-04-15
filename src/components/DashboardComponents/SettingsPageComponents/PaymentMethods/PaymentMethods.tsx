import { FaCreditCard, FaEdit, FaTrash } from 'react-icons/fa';
import { PaymentMethodsType } from './PaymentMethodsType';

const PaymentMethods: React.FC<PaymentMethodsType> = ({ paymentMethods }) => {

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCreditCard className="mr-2 text-[#f3982d]" />
                Payment Methods
            </h2>

            <div className="space-y-6">
                {/* Existing Payment Methods */}
                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Saved Payment Methods</h3>
                    {paymentMethods.length > 0 ? (
                        <div className="space-y-4">
                            {paymentMethods.map((method) => (
                                <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div className="flex items-center">
                                        {method.type === 'visa' && (
                                            <div className="w-10 h-6 bg-blue-50 flex items-center justify-center rounded mr-3">
                                                <span className="text-xs font-bold text-blue-800">VISA</span>
                                            </div>
                                        )}
                                        {method.type === 'paypal' && (
                                            <div className="w-10 h-6 bg-yellow-50 flex items-center justify-center rounded mr-3">
                                                <span className="text-xs font-bold text-blue-600">PP</span>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm font-medium">
                                                {method.type === 'visa' ? `•••• •••• •••• ${method.info}` : method.info}
                                            </p>
                                            {method.default && (
                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                                    Default
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        {!method.default && (
                                            <button className="text-sm text-[#f3982d] hover:text-[#e08a27]">
                                                <FaEdit />
                                            </button>
                                        )}
                                        {!method.default && (
                                            <button className="text-sm text-red-600 hover:text-red-800">
                                                <FaTrash />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 bg-gray-50 rounded-lg">
                            <FaCreditCard className="mx-auto text-3xl text-gray-400 mb-3" />
                            <p className="text-gray-600">No saved payment methods</p>
                        </div>
                    )}
                </div>

                {/* Add New Payment Method */}
                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Add New Payment Method</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-[#f3982d] transition-colors">
                            <FaCreditCard className="mr-2 text-[#f3982d]" />
                            <span>Credit/Debit Card</span>
                        </button>
                        <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-[#f3982d] transition-colors">
                            <div className="w-6 h-6 bg-yellow-50 flex items-center justify-center rounded mr-2">
                                <span className="text-xs font-bold text-blue-600">PP</span>
                            </div>
                            <span>PayPal</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;