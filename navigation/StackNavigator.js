import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterScreen from '../screens/RegisterScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LandingScreen from '../screens/LandingScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import HomepageScreen from '../screens/Homepage';
import Categories from '../screens/Categories';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Create Account" component={CreateAccountScreen} />
      <Stack.Screen name="Homepage" component={HomepageScreen} />
      <Stack.Screen name="Categories" component={Categories} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})