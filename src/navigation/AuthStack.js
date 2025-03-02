//giriş yapmadan önce kullanacagı login yapmadan

import React from 'react'
import { LoginPage,SingupPage } from '../screens'
import { createNativeStackNavigator, createStaticNavigation } from '@react-navigation/native-stack'
const Stack=createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{headerShown:false}}>
      
        
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name="SignUp" component={SingupPage} />
        
    </Stack.Navigator>
  )
}

export default AuthStack

