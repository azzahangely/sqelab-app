import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Landing'); // Navigate to the Login page after 3 seconds
    }, 3000); // Duration in milliseconds (3 seconds)

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#FEFEFE', '#5093A6']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('../assets/SQELAB_Logo.png')}
      />
    </LinearGradient>
  );
};

export default SplashScreen;
