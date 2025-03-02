import { StyleSheet, Text, View ,ActivityIndicator, Pressable} from 'react-native'   //rnfes => component yapısı
import React from 'react'

const Loading = ({changeIsLoading,name}) => {   //iki tane kullanımı var props yazarak veya isimlerini vererek
  return (
    <View style={styles.container}>
      <Pressable
      onPress={()=> changeIsLoading()}
      style={[{},styles.CloseButtonContainer]}>
        <Text style={styles.CloseButton}>X</Text>
      </Pressable>
      <ActivityIndicator size={'large'} color={'blue'}/>
      <Text style={styles.Text}>{name} Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container:{
    height:'100%',  // flex1 ile ekranın tamamını kapla aynı hiyarerjide oldugu için diger tarafta kendini itiyor pozsition vermek
    position:'absolute', //ayrı bolume gitti ayrı bir katman gibi oldu
    backgroundColor:'tomato',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },

  Text:{
    fontWeight:'bold',
    fontSize:16,
    color:'white',
    marginTop:'20'



  },
  CloseButtonContainer:{
    backgroundColor:'black',
    width:50,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:50,
    right:10


  },

  CloseButton:{
    color:'white',
    fontWeight:'bold',
    fontSize:16


  }




})