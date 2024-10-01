import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    paymentId: "",
    paymentLinkId: "",
    paymentStatus: "",
    signature: "",
  });

  const getQueryParams = (queryString) => {
    return new URLSearchParams(queryString);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search); // Get query params from URL


    const razorpayPaymentId = queryParams.get("razorpay_payment_id");
    const razorpayPaymentLinkId = queryParams.get("razorpay_payment_link_id");
    const razorpayPaymentStatus = queryParams.get("razorpay_payment_link_status");
    const razorpaySignature = queryParams.get("razorpay_signature");

    // Store the extracted details in state
    setPaymentData({
      paymentId: razorpayPaymentId,
      paymentLinkId: razorpayPaymentLinkId,
      paymentStatus: razorpayPaymentStatus,
      signature: razorpaySignature,
    });

    // Handle payment verification or status update here
    if (razorpayPaymentStatus === "paid") {
      // You can make an API call here to verify the payment with the backend
      console.log("Payment successful!");
    } else {
      console.log("Payment failed or pending.");
    }
  }, [location.search]); // Dependency to re-run effect when the URL changes

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the homepage or previous route
  };

  return (
    <div className="container">
      <h2>Payment Status</h2>
      <p>Payment ID: {paymentData.paymentId}</p>
      <p>Payment Link ID: {paymentData.paymentLinkId}</p>
      <p>Payment Status: {paymentData.paymentStatus}</p>
      <p>Signature: {paymentData.signature}</p>

      {paymentData.paymentStatus === "paid" ? (
        <div className="success">Payment Successful!</div>
      ) : (
        <div className="error">Payment Failed or Pending</div>
      )}

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PaymentStatus;
