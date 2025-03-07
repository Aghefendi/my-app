//konteyner => slice alanlarını tutacak
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlace";
import {thunk} from 'redux-thunk'

export const store=configureStore({


    reducer:{
        user:userReducer


        
    },
    middleware:(getDefaultMiddlware)=>getDefaultMiddlware({serializableCheck:false})
})