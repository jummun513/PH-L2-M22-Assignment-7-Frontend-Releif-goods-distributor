/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
    }),

    postSingleSupply: builder.mutation({
      query: (data) => ({
        url: "/create-supply",
        method: "POST",
        body: data,
      }),
    }),

    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supply/${id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetAllSuppliesQuery,
  usePostSingleSupplyMutation,
  useGetSingleSupplyQuery,
} = supplyApi;
