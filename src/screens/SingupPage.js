  import { StyleSheet, Text, View,Image,SafeAreaView} from 'react-native'
  import React,{useState} from 'react'
  import {CustomTextInput,CustomButton, Loading} from '../Component'
  import { useDispatch,useSelector } from 'react-redux'
  import { register } from '../Redux/userSlace'



  const SingupPage = () => {
    const {name , setName} =useState("")
    const {email,setEmail}=useState("")
    const {password, setPassword}=useState("")

    const dispact=useDispatch();
    const {isLoading}=useSelector(state=>state.user)
    const handleRegister=()=>{

      dispact(register({email,password}))
    }

    if(isLoading){

      return <Loading/>
    }
    return (
   
      
      <SafeAreaView style={styles.container} >
       
      <View style={styles.ImageContainer}>
        <Image 
        style={styles.Image}
        source={require('./../../assets/images/register.png')}/>
        <Text style={styles.SingUp}>Sing Up </Text>
      </View>
      <View style={styles.TextInputContainer}>
        <CustomTextInput
        title='Name'
        isSecureText={false}
        handleOnChangeText={setName}
        handleValue={name}
        handlePlaceHolder='Enter Your Name'

        
        />

      <CustomTextInput
        title='Email'
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceHolder='Enter Your Email'

        
      />
      <CustomTextInput
        title='Password'
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceHolder='Enter your password'

        
      />
      </View>
      <View style={styles.ButtonContainer}>
      <CustomButton ButtonText="Sing Up"
      
      setWidth='100%'
      handleOnPress={handleRegister}
    
      
      />
      </View>
   
      </SafeAreaView>
      
      
    
    
    )
  }

  export default SingupPage

  const styles = StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'yellow'


  },
  Image:{
  width:100,
  height:100,
  marginBottom:20,



  },
  SingUp:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:20


  },
  ImageContainer:{
    flex:2,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:50
  },

  TextInputContainer:{
    
    flex:2,
    width:'100%',
    alignItems:'center',
    paddingVertical:10,
    justifyContent:'center'


  },
  ButtonContainer:{
    flex:2,
    width:'100%',
    alignItems:'center',

    
    
  }, 






  })