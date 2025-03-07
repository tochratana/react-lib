import { apiSlice } from "../../api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get All
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    // Get single product by ID
    
  }),
});

export const { useGetAllProductsQuery } = productApiSlice;
