import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title , isSecureText, handleOnChangeText,handleValue,handlePlaceHolder}) => {
  return (
    <View style={styles.InputContainer}>
    
         <Text style={styles.InputTextBox}>{title}</Text>
       
         <TextInput 
      
         secureTextEntry={isSecureText}
         placeholder={handlePlaceHolder} 
         style={styles.TextInputStyle} 
       onChangeText={handleOnChangeText}
        value={handleValue}
         />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    InputContainer:{
        width:'80%',
        
      
    
    
      },

      TextInputStyle:{
        borderBottomWidth:0.5,
        width:'100%',
        height:50,
        borderRadius:10,
        marginVertical:2,
        textAlign:'center',
        color:'blue',
        fontWeight:'bold'
      },
      InputTextBox:{
        fontWeight:"bold",
    
    
    
    
      }

})