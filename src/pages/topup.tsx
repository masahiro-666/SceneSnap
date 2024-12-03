import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../context/authContext";
import useUserData from "../context/authContext/userdata";
import { baseURL } from "../components/userIDConfig";
import axios from "axios";


function Topup() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { userData, loading, error } = useUserData();

  const [selectedAmount, setSelectedAmount] = useState(100); // Default amount
  const [customAmount, setCustomAmount] = useState(""); // For custom amount

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Reset custom amount when predefined is selected
  };

  const handleCustomAmountChange = (e) => {
    setSelectedAmount("SPECIFY");
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountToSubmit =
      selectedAmount === "SPECIFY" ? customAmount : selectedAmount;
    if (!amountToSubmit || isNaN(amountToSubmit) || amountToSubmit > 10000) {
      alert("Please enter a valid amount not exceeding 10,000 THB.");
      return;
    }
    alert(`Top-Up Successful! Amount: ${amountToSubmit} THB`);
  };

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/signin");
    }
  }, [userLoggedIn, navigate]);

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleTopup = async () => {
    console.log("am work!")
    console.log("amount:", (selectedAmount) + parseInt(userData.customer_credit))
    const process_value ={
        process_credit : (selectedAmount) + parseInt(userData.customer_credit)
      }
    const response_process = await axios.put(`${baseURL}/customer/processCredit/`+userData.customer_id, process_value )
        .then(res => {
          console.log(res)
          location.reload();
        })
        .catch(err => console.log(err))
  }

  return (
    <div className="app-container">
      <div className="max-md:hidden z-10">
        <Navbar />
      </div>

      <div className="page-container max-md:hidden">
        <div className="bg-white">
          <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
            {/* Title */}
            <h2 className="text-xl font-bold mb-2">Top Up Amount (THB)</h2>
            <p className="text-gray-500 text-sm mb-4">Total amount must not exceed 10,000 THB</p>

            {/* Amount Buttons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[100, 200, 300, 500, 1000].map((amount) => (
                <button
                  type="button"
                  key={amount}
                  onClick={() => handleAmountClick(amount)}
                  className={`py-2 px-4 border rounded-lg font-medium text-center ${
                    selectedAmount === amount
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 border-blue-500"
                  }`}
                >
                  {amount}
                </button>
              ))}
              {/* <button
                onClick={() => handleAmountClick("SPECIFY")}
                className={`py-2 px-4 border rounded-lg font-medium text-center ${
                  selectedAmount === "SPECIFY"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border-blue-500"
                }`}
              >
                SPECIFY
              </button> */}
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === "SPECIFY" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Custom Amount
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount (max 10,000 THB)"
                />
              </div>
            )}

            {/* Total Amount Display */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-6 text-center font-bold rounded-md mb-6">
              Total Amount:{" "}
              {selectedAmount === "SPECIFY" ? customAmount || 0 : selectedAmount} THB
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition"
              onClick={handleTopup}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="max-md:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default Topup;
