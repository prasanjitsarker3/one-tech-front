import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryF = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = (getState() as RootState).auth.accessToken;
  //     if (token) {
  //       headers.set("authorization", `${token}`);
  //     }
  //     return headers;
  //   },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryF,
  tagTypes: ["category", "product"],
  endpoints: () => ({}),
});
