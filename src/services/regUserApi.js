// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const regUserApi = createApi({
  reducerPath: 'regUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/reg-user' }),
  endpoints: (builder) => ({
    regUserByName: builder.mutation({
      query: (user) => ({
      url:``,
      method:"POST",
      body:{...user}
      }),
    }),
    userLogin: builder.query({
       query : (user) => {
        return {
            url:`?username=${user.username}&password=${user.password}`
        }
       }
    })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegUserByNameMutation, useLazyUserLoginQuery} = regUserApi