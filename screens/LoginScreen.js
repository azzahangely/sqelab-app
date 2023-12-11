import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    //send a post req to backend
    axios
    .post("http://localhost:8000/register", user)
    .then((response) => {
      console.log(response);
      Alert.alert(
        "Registration successful",
        "You have been registered Successfully"
      );
      setName("");
      setEmail("");
      setPassword("");
    })
    .catch((error) => {
      Alert.alert(
        "Registration Error",
        "An error occurred while registering"
      );
      console.log("registration failed", error);
    });
};

const handleTemp = () => {
  navigation.navigate('Main'); 

};

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-3xl font-semibold">Welcome</Text>
      <Text className="text-s mb-12 text-gray-500">Please enter your data to continue</Text>

      <View className="mb-4 w-11/12">
        <Text className="mb-1">Email</Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} // Override Tailwind styles for underline effect
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
          style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} // Override Tailwind styles for underline effect
          className="p-3 w-full"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View className="flex-row items-center mb-4 mt-12">
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          className={`rounded-full border border-gray-400 h-4 w-4 mr-2 ${rememberMe ? 'bg-blue-500 border-blue-500' : 'bg-white'}`}
        />
        <Text>Remember me</Text>
      </View>
      
      <Text className="mt-[60px] text-gray-400 text-center">
      By connecting your account confirm that you agree with our Term and Condition
      </Text>
      <TouchableOpacity
        onPress={handleTemp}
        className="bg-[#5093A6] py-4 px-6 rounded-md w-full mt-7"
      >
        <Text className="text-center text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
