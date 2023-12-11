import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterScreen from '../screens/RegisterScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LandingScreen from '../screens/LandingScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import HomepageScreen from '../screens/HomepageScreen';
import Categories from '../screens/Categories';
import SubCategories from '../screens/SubCategories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTabs(){
      return (
        <Tab.Navigator>
          <Tab.Screen
          name="Home"
          component={HomepageScreen}
          options={
            {
              tabBarLabel: "Home",
              tabBarLabelStyle:{color:"#008E97"},
              headerShown:false,
              tabBarIcon:({focused}) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              )
            }

          }
          />
          
          <Tab.Screen
          name="Cart"
          component={HomepageScreen}
          options={
            {
              tabBarLabel: "Cart",
              tabBarLabelStyle:{color:"#008E97"},
              headerShown:false,
              tabBarIcon:({focused}) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              )
            }

          }
          />
          
          <Tab.Screen
          name="Profile"
          component={HomepageScreen}
          options={
            {
              tabBarLabel: "Profile",
              tabBarLabelStyle:{color:"#008E97"},
              headerShown:false,
              tabBarIcon:({focused}) =>
              focused ? (
                <Ionicons name="ios-person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              )
            }
          }
          /> 
        </Tab.Navigator>
      )
    }

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Create Account" component={CreateAccountScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="All Services" component={SubCategories} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})