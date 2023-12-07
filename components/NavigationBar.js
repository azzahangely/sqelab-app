import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NavigationBar = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#5093A6', padding: 16 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: '#fff', fontSize: 18, marginRight: 16 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text style={{ color: '#fff', fontSize: 18, marginRight: 16 }}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={{ color: '#fff', fontSize: 18, marginRight: 16 }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Message')}>
        <Text style={{ color: '#fff', fontSize: 18, marginRight: 16 }}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
