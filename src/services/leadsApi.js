// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/leads' }),
  endpoints: (builder) => ({
    addEveryLead: builder.mutation({
      query: (user) => ({
        url:``,
        method:"POST",
        body:{...user}
      }),
    }),
    showLeadsByName: builder.query({
      query: () => ``,
    }),
    deleteLeadById: builder.mutation({
      query : (id) => ({
         url:`/${id}`,
         method:"DELETE"
      })
    }),
    editLeadById: builder.mutation({
      query : (user) => ({
         url:`/${user.id}`,
         method:`PUT`,
         body:{...user}
      })
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddEveryLeadMutation,useShowLeadsByNameQuery,useDeleteLeadByIdMutation , useEditLeadByIdMutation } =leadsApi