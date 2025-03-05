import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image } from 'react-native';
import React from 'react';
import {Loading,CustomTextInput,CustomButton} from '../Component'
import {useSelector,useDispatch} from 'react-redux'
import { setEmail,setPassword,setIsloading } from '../Redux/userSlace';




const LoginPage=({navigation})=> {

  

  
  const {email,password,isLoading}=useSelector((state)=>state.user)
  const dispatch=useDispatch()


  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome </Text>
    <Image 
      source={require('./../../assets/images/loginicon.png')}
      style={styles.image}/>


    <CustomTextInput
    title="Email"
    isSecureText={false}
    handleOnChangeText={(text)=>dispatch(setEmail(text))}
    handleValue={email}
    handlePlaceHolder="Enter Your Email"
    />
     <CustomTextInput
    title="Password"
    isSecureText={true}
    handleOnChangeText={(password)=>useDispatch(setPassword(password))}
    handleValue={password}
    handlePlaceHolder="Enter Your Password"
    
    />

    <CustomButton
    ButtonText="Login"
    setWidth="80%"
    handleOnPress={()=>dispatch(setIsloading(true))}
    
    />

<CustomButton
    ButtonText="Sign Up"
    setWidth="30%"
    handleOnPress={()=>navigation.navigate("SignUp")}
    
    />
   

     {/* <View style={styles.subContainer}> 
      <Text style={styles.textStyle}>Text Text </Text>
      </View> */}

      {isLoading? <Loading name="Beybi"  changeIsLoading={()=>dispatch(setIsloading(false))}/> : null}
       
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image:{
    width:100,
    height:100,
    marginBottom:20


  },
/*  subContainer:{
    backgroundColor:'black',
    width:'25%',
    height:'25%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    borderWidth:10,
    borderColor:'green',
    margin:'10%'

  },

  textStyle:{
    color:'white',
    fontSize:15,
    fontWeight:'900'
    
  }, */

   
 
  welcome:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:30
  


  },
  SignupButton:{
    borderWidth:1,
    width:'50%',
    alignItems:'center',
    marginVertical:10,
    height:'10%',
    justifyContent:'center' ,
   // backgroundColor:'lightblue',
    borderRadius:10
  },
  
});
