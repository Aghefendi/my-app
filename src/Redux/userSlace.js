import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";


export const login=createAsyncThunk('user/login',async({email,password})=>{

    try {

        const auth=getAuth();
        const userCreadition=await signInWithEmailAndPassword(auth,email,password)
        const user=userCreadition.user;
        const token=user.stsTokenManager.accessToken;


        const userData={
            token,
            user:user,



        }
        await AsyncStorage.setItem("userToken",token)
        return userData
        
    } catch (error) {
        console.log("userSlice ",error)
        throw error
        
    }


})

export const register=createAsyncThunk('/usr/register',async({email,password})=>{
try {

    const auth=getAuth()
    const userCreadition = await createUserWithEmailAndPassword(auth,email,password)

    const user=userCreadition.user
    const token=user.stsTokenManager.accessToken;

    await sendEmailVerification(user)
    await AsyncStorage.setItem("userToken",token)
    return token
    
} catch (error) {
    throw error
}



})


const initialState={
    isLoading:false,
    isAuth:false,
    token:null,
    user:null,
    error:null,


}
export const userSlace=createSlice({
name:'user',
initialState,
reducers:{

    setEmail:(state,action)=>{

      

        state.email=action.payload

 
    },
    setPassword:(state,action)=>{

        state.password=action.payload
    },
    setIsloading:(state,action)=>{

        state.isLoading=action.payload
    }



    


},
extraReducers:(builder)=>{
    builder
    .addCase(login.pending,(state)=>{
        state.isLoading=true;
        state.isAuth=false;

    })
    .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isAuth=true;
            state.user=action.payload.user;
            state.token=action.payload.token;

    })
    .addCase(login.rejected,(state)=>{
        state.isLoading=false;
        state.isAuth=false;
        state.error=action.error.message;

     

    })
    .addCase(register.pending,(state)=>{
        state.isLoading=true;
        state.isAuth=false;

        
    })  
    .addCase(register.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isAuth=true;
        state.token=action.payload.token;

        
    })   
    .addCase(register.rejected,(state)=>{
        state.isLoading=false;
        state.isAuth=false;
        state.error="Invalid email or password"

        
    })    

}



})

export  const{setEmail,setPassword,setIsloading} =userSlace.actions
export default userSlace.reducer;
