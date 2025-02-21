const Home = () => (
    <div className="flex align-middle justify-center flex-col text-center p-8 bg-[#0b1623f0] min-h-80">
      <h2 className="text-3xl font-bold mb-2 text-white">Borrow / Lend</h2>
      <p className="text-[#60A5FA]">
        Supply assets to earn yield and borrow against collateral.{' '}
        <span className="underline cursor-pointer">How it works</span>
      </p>
  
      {/* Modern Form Section */}
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
              className="w-full p-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Home;
  