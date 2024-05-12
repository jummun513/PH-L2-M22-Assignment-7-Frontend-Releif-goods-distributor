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
      providesTags: ["supplies"],
    }),

    postSingleSupply: builder.mutation({
      query: (data) => ({
        url: "/create-supply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplies"],
    }),

    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supply/${id}`,
        method: "GET",
      }),
      providesTags: ["singleSupply"],
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
