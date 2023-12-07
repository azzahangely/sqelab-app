import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleRoleSelection = (role) => {
    navigation.navigate('Register'); // Navigate to RegisterScreen
    console.log('Selected role:', role);
  };


  return (
    <LinearGradient
      colors={['#FEFEFE', '#5093A6']}
      style={{ flex: 1 }}
    >
      <View className="flex-1 justify-center items-center">
        <Image
          source={require('../assets/login_img.png')}
          className="mb-8"
        />
        <View className="w-11/12 bg-white rounded-[20px] shadow-md p-8">
          <Text className="text-2xl font-bold mb-6 text-center text-black">Seize The Opportunity </Text>
          <Text className="mb-6 text-center text-[#8F959E]">Empowering Tomorrow's Innovators, One Connection at a Time </Text>
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity
              onPress={() => handleRoleSelection('UMKM')}
              className="flex-1 bg-[#F5F6FA] py-3 rounded-md mr-2"
            >
              <Text 
              style={{ color: '#8F959E' }} 
              className="text-center">UMKM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRoleSelection('STUDENT')}
              className="flex-1 bg-[#5093A6] py-3 rounded-md ml-2"
            >
              <Text className="text-center text-white">STUDENT</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleRoleSelection('SKIP')}
            className="bg-gray-200 py-3 rounded-md"
          >
            <Text 
            style={{ color: '#8F959E' }} 
            className="text-center">SKIP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LandingScreen;
