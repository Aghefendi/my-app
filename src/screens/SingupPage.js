  import { StyleSheet, Text, View,Image,SafeAreaView} from 'react-native'
  import React,{useState} from 'react'
  import {CustomTextInput,CustomButton} from '../Component'



  const SingupPage = () => {
    const {name , setName} =useState("")
    const {email,setEmail}=useState("")
    const {password, setPassword}=useState("")

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
      handleOnPress={()=>console.log(name," ",email," ",password)}
    
      
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
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  },

  TextInputContainer:{
    
    flex:2,
    width:'100%',
    alignItems:'center',
    paddingVertical:10,
    justifyContent:'flex-start'


  },
  ButtonContainer:{
    flex:3,
    width:'100%',
    alignItems:'center',

    
    
  }, 






  })