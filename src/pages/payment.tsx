import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../components/userIDConfig";

const Payment: React.FC = () => {
  const location = useLocation();
  const { movieId, selectedSeats, totalPrice } = location.state || { movieId: "IDK", selectedSeats: [], totalPrice: 0 };
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!selectedSeats.length) {
      alert("Please select at least one seat.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/movie/booking/${movieId}/`, {
        bookedSeats: selectedSeats
      });
      console.log(response);

      if (response.data.Message === "Booking updated successfully") {
        alert("Payment successful!\nSeats: " + selectedSeats.join(", ") + "\nTotal: " + totalPrice + " THB");
      } else {
        alert("Booking failed: " + response.data.Message);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-20">
      <div className="bg-white max-w-2xl mx-auto p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Payment</h1>
        <div className="text-gray-700 space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Movie ID:</h2>
            <p>{movieId}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Selected Seats:</h2>
            <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "No seats selected."}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Total Price:</h2>
            <p>{totalPrice} THB</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handlePayment}
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-zinc-800"
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm Payment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;