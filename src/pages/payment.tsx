import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../components/userIDConfig";
import { useAuth } from "../context/authContext";             //by bas
import useUserData from "../context/authContext/userdata";    //by bas

const Payment: React.FC = () => {
  const location = useLocation();
  const { movieId, selectedSeats, totalPrice } = location.state || { movieId: "IDK", selectedSeats: [], totalPrice: 0 };
  const [loading, setLoading] = useState(false);

  const { userLoggedIn } = useAuth();                       //by bas
  const navigate = useNavigate();                           //by bas
  const { userData, error } = useUserData();                //by bas

  useEffect(() => {                                                                 //by bas
    if (userData) {                                                                     //by bas      
      // console.log("user data : ",Object.entries(userData));                          //by bas
      // console.log("credit :", userData)     
      console.log(movieId)
      console.log(selectedSeats)                                                         //by bas
                                        //by bas
      console.log(userData.customer_credit)                                                //by bas  
    }                                                                                         //by bas
    if (error) {                                                                        //by bas
      console.error("Error fetching user data:", error);                                //by bas
    }
  }, [userData,error])                                                            //by bas
  
  

  // console.log("user data: ",useUserData().userData);                      //by bas
  // console.log(typeof(userData))


  const handlePayment = async () => {
    if (!selectedSeats.length) {
      alert("Please select at least one seat.");
      return;
    }
    if (userData.customer_credit > totalPrice){
      setLoading(true);
      try {

        const process_value ={
          process_credit : userData.customer_credit - totalPrice
        }
        
        const response_process = await axios.put(`${baseURL}/customer/processCredit/`+userData.customer_id, process_value)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
        
        
        console.log(userData.customer_credit - totalPrice)

        const response = await axios.post(`${baseURL}/movie/booking/${movieId}/`, {
          bookedSeats: selectedSeats
        });
        console.log(response);
        
        const values = {
          customer_id : userData.customer_id,
          movie_id : movieId,
          booking_seat : selectedSeats.join(),
        }
        console.log(values)

        const response_book = await axios.post(`${baseURL}/booking/add/`, values)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
        console.log(response_book)


        if (response.data.Message === "Booking updated successfully") {
          alert("Payment successful!\nSeats: " + selectedSeats.join(", ") + "\nTotal: " + totalPrice + " THB");

          navigate("/home");                                      //by bas
        } else {
          alert("Booking failed: " + response.data.Message);
        }
      } catch (error) {
        console.error("Error processing payment:", error);
        alert("Payment failed! Please try again.");
      } finally {
        setLoading(false);
      }
    }                                                                          //by bas
    else{                                                                        //by bas
      alert("Payment failed! Your monkey not enough, Please try again.");    //by bas
      navigate("/home");                               //by bas
    }                                    //by bas
  };



  // const handlePayment = async () => {
  //   if (!selectedSeats.length) {
  //     alert("Please select at least one seat.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await axios.post(`${baseURL}/movie/booking/${movieId}/`, {
  //       bookedSeats: selectedSeats
  //     });
  //     console.log(response);

  //     if (response.data.Message === "Booking updated successfully") {
  //       alert("Payment successful!\nSeats: " + selectedSeats.join(", ") + "\nTotal: " + totalPrice + " THB");
  //     } else {
  //       alert("Booking failed: " + response.data.Message);
  //     }
  //   } catch (error) {
  //     console.error("Error processing payment:", error);
  //     alert("Payment failed! Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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