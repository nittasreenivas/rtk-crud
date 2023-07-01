
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { leadsApi } from "../services/leadsApi";
import { regUserApi } from "../services/regUserApi";
import userReducer from "../features/User/userSlice"
const store = configureStore({
    reducer:{
        [leadsApi.reducerPath]: leadsApi.reducer,
        [regUserApi.reducerPath]: regUserApi.reducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
         leadsApi.middleware,
         regUserApi.middleware
         ),
})
setupListeners(store.dispatch)
export default store