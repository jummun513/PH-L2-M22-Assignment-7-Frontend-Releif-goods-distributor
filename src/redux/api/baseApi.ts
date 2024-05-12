import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_FETCH_BASE_URL}/api/v1`,
  }),
  tagTypes: ["supplies", "singleSupply"],
  endpoints: () => ({}),
});
