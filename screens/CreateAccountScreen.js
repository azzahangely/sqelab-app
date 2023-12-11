import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Don't forget to import axios

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    const user = {
      username: name, // Updated property name to match the backend
      email: email,
      password: password,
    };

    // send a POST request to the backend API to register the user
    axios
      .post('http://192.168.56.1:8000/register', user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered Successfully'
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        Alert.alert(
          'Registration Error',
          'An error occurred while registering'
        );
        console.log('Registration failed', error);
      });
  };

  const handleTemp = () => {
    navigation.navigate('Main');
  };

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-3xl mb-12 font-semibold">Sign Up</Text>
      <View className="mb-4 w-11/12">
        <Text className="mb-1">Name</Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
          className="p-3 w-full"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
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

      <View className="flex-row items-center mb-4">
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          className={`rounded-full border border-gray-400 h-4 w-4 mr-2 ${
            rememberMe ? 'bg-blue-500 border-blue-500' : 'bg-white'
          }`}
        />
        <Text>Remember me</Text>
      </View>
      <TouchableOpacity
        onPress={handleSignUp} // Updated function name
        className="bg-[#5093A6] py-4 px-6 rounded-md w-full mt-7"
      >
        <Text className="text-center text-white">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
