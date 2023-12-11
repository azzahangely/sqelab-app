import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post('http://192.168.56.1:8000/login', user)
      .then((response) => {
        console.log(response);
        // Handle successful login, e.g., store token in AsyncStorage
        Alert.alert('Login successful', 'You have been logged in successfully');
        // You can navigate to another screen or perform other actions after successful login
        navigation.navigate('Main');
      })
      .catch((error) => {
        Alert.alert('Login Error', 'Invalid email or password');
        console.log('Login failed', error);
      });
  };

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-3xl font-semibold">Welcome</Text>
      <Text className="text-s mb-12 text-gray-500">Please enter your data to continue</Text>

      <View className="mb-4 w-11/12">
        <Text className="mb-1">Email</Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
          className="p-3 w-full"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View className="mb-4 w-11/12">
        <Text className="mb-1">Password</Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
          className="p-3 w-full"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={handleSignIn}
        className="bg-[#5093A6] py-4 px-6 rounded-md w-full mt-7"
      >
        <Text className="text-center text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
