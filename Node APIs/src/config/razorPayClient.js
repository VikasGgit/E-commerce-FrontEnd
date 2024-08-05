import Razorpay from "razorpay";

const keySecret= '3hv8cETKRuXnxcUEBlqLA1bJ'

const key_id='rzp_test_v521ErjMrzxocB'
export const razorpay = new Razorpay({
  key_id: key_id,
  key_secret: keySecret,
});