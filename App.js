import React from 'react'
import LoginPage  from './src/screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import SingupPage from './src/screens/SingupPage'
import { createNativeStackNavigator, createStaticNavigation } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
     <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen component={LoginPage} name="Login"/>

      <Stack.Screen component={SingupPage} name="SignUp"/>
      

      </Stack.Navigator>

    </NavigationContainer>
   
  )
}

export default App
