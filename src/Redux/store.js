//konteyner => slice alanlarını tutacak
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlace";

export const store=configureStore({


    reducer:{
        user:userReducer


        
    }
})