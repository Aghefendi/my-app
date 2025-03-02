import React from 'react'
import LoginPage  from './src/screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import SingupPage from './src/screens/SingupPage'
import { createNativeStackNavigator, createStaticNavigation } from '@react-navigation/native-stack'
import RootNavigation from './src/navigation/RootNavigation'

const Stack = createNativeStackNavigator();

const App = () => {
  
  
  return  <RootNavigation/>
    
   
  
}

export default App
