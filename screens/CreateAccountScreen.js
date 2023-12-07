import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('Homepage');
  };

  return (
    <View className="flex-1 justify-center items-center p-5">
      <Text className="text-3xl font-bold mb-6">Sign Up</Text>
      <View className="mb-4 w-11/12">
        <TextInput
          className="border border-gray-300 p-3 rounded-md w-full"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View className="mb-4 w-11/12">
        <TextInput
          className="border border-gray-300 p-3 rounded-md w-full"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View className="mb-4 w-11/12">
        <TextInput
          className="border border-gray-300 p-3 rounded-md w-full"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View className="mb-4 w-11/12">
        <TextInput
          className="border border-gray-300 p-3 rounded-md w-full"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View className="flex-row items-center mb-4">
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          className={`rounded-full border border-gray-400 h-4 w-4 mr-2 ${rememberMe ? 'bg-blue-500 border-blue-500' : 'bg-white'}`}
        />
        <Text>Remember me</Text>
      </View>
      <TouchableOpacity
        onPress={handleSignUp}
        className="bg-blue-500 py-3 px-6 rounded-md"
      >
        <Text className="text-center text-white">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
