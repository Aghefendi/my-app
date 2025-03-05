import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    email:null,
    password:null,
    isLoading:false,


}
export const userSlace=createSlice({
name:'user',
initialState,
reducers:{

    setEmail:(state,action)=>{

      

        state.email=action.payload.toLowerCase()

 
    },
    setPassword:(state,action)=>{

        state.password=action.payload
    },
    setIsloading:(state,action)=>{

        state.isLoading=action.payload
    }


}
})

export  const{setEmail,setPassword,setIsloading} =userSlace.actions
export default userSlace.reducer;
