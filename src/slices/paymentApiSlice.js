import { apiSlice } from './apiSlice';
const PAYMENT_URL = '/api/payment';

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (data) => ({
        url: `${PAYMENT_URL}/checkout`,
        method: 'POST',
        body: data,
        credentials: "include",
      }),
    }),
    paymentVerification: builder.mutation({
      query: (data) => ({
        url: `${PAYMENT_URL}/paymentverification`,
        method: 'POST',
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { 
  useCheckoutMutation,  
  usePaymentVerificationMutation,
} = paymentApiSlice;