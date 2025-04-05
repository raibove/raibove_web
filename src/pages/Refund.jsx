import React from 'react';

const NoRefundsPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Refunds Policy</h1>
      <p className="text-sm text-gray-700 mb-6">Our Refunds Policy was last updated on 25/03/2025.</p>
      <p className="text-gray-700 mb-4">Thank you for shopping at Raibove. The following terms are applicable for any products that you have purchased from us.</p>
      
      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Eligibility for Refunds</h2>
      <p className="text-gray-700 mb-4">Please note that we do not offer refunds under any circumstances. All sales are final once the payment is processed.</p>
      
      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Non-Refundable Cases</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>If you change your mind after purchasing a subscription or service.</li>
        <li>If you fail to use the service during the subscription period.</li>
        <li>If the issue is caused by third-party software or tools not affiliated with our platform.</li>
        <li>If the service has been delivered as promised and is functioning correctly.</li>
      </ul>
      
      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Exceptions</h2>
      <p className="text-gray-700 mb-6">Unfortunately, we are unable to make any exceptions to this policy.</p>

      <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
      <p className="text-gray-700">If you have any questions or concerns about this No Refunds Policy, please reach out to us:</p>
      <p className="text-blue-500 underline">Email: shwetakale144@gmail.com</p>
    </div>
  );
}

export default NoRefundsPolicy;
