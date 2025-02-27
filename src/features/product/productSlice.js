import {apiSlice} from "../../api/apiSlice"

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApiSlice;
