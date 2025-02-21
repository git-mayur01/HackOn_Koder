import React, { useState } from 'react';




const TransactionForm = () => {
  // State to track form inputs
  const [amounts, setAmounts] = useState({
    Borrow: 0,
    Lend: 0,
    Withdraw: 0,
    Repay: 0,
  });

  // Temporary input state to store current values being typed
  const [inputs, setInputs] = useState({
    Borrow: '',
    Lend: '',
    Withdraw: '',
    Repay: '',
  });

  // Handle input change
  const handleInputChange = (action, value) => {
    setInputs({
      ...inputs,
      [action]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (action) => {
    const amount = parseFloat(inputs[action]);
    if (!isNaN(amount) && amount > 0) {
      setAmounts((prev) => ({
        ...prev,
        [action]: prev[action] + amount, // Add the submitted amount
      }));
      setInputs({ ...inputs, [action]: '' }); // Clear input after submission
    }
  };

  return (
    <div className="p-8 bg-[#1e293bf7]" >
        <div className='text-white flex align-middle justify-center flex-col text-center mt-5'>
         <h2 className="text-4xl font-bold mb-4  ">Welcome to Fiscal</h2>
         <p className="text-lg">Experience seamless web navigation and features inspired by Fiscal.</p>
         </div>
      {/* Form Section */}
      <h2 className="text-2xl font-bold text-center mb-8 mt-10 text-white">Transaction Form</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Borrow', 'Lend', 'Withdraw', 'Repay'].map((action) => (
          <div
            key={action}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">{action}</h3>
            <input
              type="number"
              placeholder={`Enter amount to ${action.toLowerCase()}`}
              value={inputs[action]}
              onChange={(e) => handleInputChange(action, e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => handleSubmit(action)}
            >
              Submit
            </button>
          </div>
        ))}
      </div>

      {/* Display Table Section */}
      <div className="mt-10 bg-[#1e293b] p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Transaction Summary</h2>
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="py-2 border-b border-gray-600">Action</th>
              <th className="py-2 border-b border-gray-600">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(amounts).map((action) => (
              <tr key={action}>
                <td className="py-2 text-center">{action}</td>
                <td className="py-2 text-center">{amounts[action]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionForm;
