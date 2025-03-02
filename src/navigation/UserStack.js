//kullanıcı giriş yaptıktan sonra gösterilen

import React from 'react'
import { HomePage,ProfilePage } from '../screens'
import { createNativeStackNavigator, createStaticNavigation } from '@react-navigation/native-stack'
const Stack=createNativeStackNavigator();

const UserStack = () => {
  return (
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown:false}}>
            
            <Stack.Screen name='Home' component={HomePage}/>
            <Stack.Screen name='Profile' component={ProfilePage}/>


        </Stack.Navigator>
  )
}

export default UserStack

