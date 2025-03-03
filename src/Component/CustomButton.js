import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ButtonText,setWidth,handleOnPress}) => {
  return (
    <Pressable 
          onPress={handleOnPress}   //console log yerine icerisine ne set ediyorsak onu yazıyoruz setResult()
          style={({pressed})=> [{
          backgroundColor:pressed? "gray" :'blue',width:{setWidth}
    
          },styles.butonStyles ]}>
          <Text style={styles.butonText}>{ButtonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({


    butonText:{
        fontWeight:'bold',
        color:'white',
        marginBottom:10
    
    
    
    
      },
      butonStyles:{
        borderWidth:1,
        width:'90%',
        alignItems:'center',
        marginVertical:10,
        height:'10%',
        justifyContent:'center' ,
       // backgroundColor:'lightblue',
        borderRadius:10,
        marginTop:20
      }

})