import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => {
  const appVersion = '1.0.1'; // Replace this with your actual app version

  return (
    <View style={{ backgroundColor: '#E5E5E5', width: '100%', padding: 10 }}>
      <Text style={{ textAlign: 'center', color: '#333' }}>App Version: {appVersion}</Text>
    </View>
  );
};

export default Footer;
