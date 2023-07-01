
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:null 
    },
    reducers:{
        updateUserDetails: (state,action)  => {
            state.userDetails = action.payload
        },
        logout : (state) => {
            state.userDetails = null
        }
    }
})

export const {updateUserDetails,logout} = userSlice.actions

export default userSlice.reducer 