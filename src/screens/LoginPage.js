import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image } from 'react-native';
import React, {useState} from 'react';

import Loading from './../Component/Loading';
import SingupPage from './SingupPage';

const LoginPage=({navigation})=> {

  const[name , setName] = useState("")
  const[lastname , setLastName]=useState("")
  const[result , setResult]=useState("")
  const [isLoading, setIsLoading] = useState(false)
  

  return (
    <View style={styles.container}>

    <Image 
      source={require('./../../assets/images/loginicon.png')}
      style={styles.image}/>


    <Text style={styles.welcome}>Welcome {result}</Text>

     <Text>Email</Text>

     <TextInput 
     inputMode="email"
     placeholder='Enter Email' 
     style={styles.TextInputStyle} 
     onChangeText={(value)=>setName(value)}
     value={name}
     />


     <Text>Password</Text>


     <TextInput 
     
     placeholder='Enter password'
     secureTextEntry={true}
      keyboardType="default"
    
     onChangeText={setLastName}
      style={styles.TextInputStyle}
      value={lastname}
      />

      <Pressable 
      onPress={()=>setIsLoading(true)}   //console log yerine icerisine ne set ediyorsak onu yazıyoruz setResult()
      style={({pressed})=> [{
      backgroundColor:pressed? "gray" :'blue'

      },styles.butonStyles ]}>
      <Text style={styles.butonText}>Login</Text>
      </Pressable>

      <Pressable 
      onPress={()=>navigation.navigate('SignUp')}   
      style={({pressed})=> [{
      backgroundColor:pressed? "gray" :'lightgray'

      },styles.SignupButton ]}>
      <Text style={styles.butonText}>Sign Up</Text>
      </Pressable>

     {/* <View style={styles.subContainer}> 
      <Text style={styles.textStyle}>Text Text </Text>
      </View> */}

      {isLoading? <Loading name="Beybi"  changeIsLoading={()=>setIsLoading(false)}/> : null}
       
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
    height:100


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
  TextInputStyle:{
    borderWidth:1,
    width:'90%',
    height:'10%',
    borderRadius:10,
    marginVertical:2,
    textAlign:'center',
    color:'blue',
    fontWeight:'bold'
  },

  butonStyles:{
    borderWidth:1,
    width:'90%',
    alignItems:'center',
    marginVertical:10,
    height:'10%',
    justifyContent:'center' ,
   // backgroundColor:'lightblue',
    borderRadius:10
  },
  butonText:{
    fontWeight:'bold',
    color:'white',




  },
  welcome:{
    fontWeight:'bold',
    fontSize:25,
  


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
  }
});
