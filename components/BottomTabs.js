import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import HomepageScreen from '../screens/HomepageScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
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
  );
};

export default BottomTabs;
