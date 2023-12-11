import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  
  const handleCreateAccount = () => {
    navigation.navigate('Create Account'); // Redirect user to CreateAccountScreen
  };

  const handleGoogleSignIn = () => {
    // Logic to handle Google Sign-in
    console.log('Continue with Google');
    // Implement Google Sign-in logic here
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FEFEFE', padding: 20 }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <Text className="text-3xl text-center font-bold mb-6 mt-8">Let’s Get Started</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={handleCreateAccount}
          style={{ backgroundColor: '#5093A6', width: 335, height: 50, borderRadius: 8, marginBottom: 10 }}
        >
          <Text style={{ color: '#fff', textAlign: 'center', lineHeight: 50 }}>Create a New Account</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginBottom: 8 }}>or continue with</Text>
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          style={{ backgroundColor: '#3A657E', width: 335, height: 50, borderRadius: 8 }}
        >
          <Text 
          style={{lineHeight: 50 }}
          className="text-white text-center leading-50">Google</Text>
        </TouchableOpacity>
      </View>
      <View  className="flex justify-end items-center flex-1 flex-row">
        <Text className="text-gray-600 mr-1">Already have an account?</Text>
        {/* Only make "Sign in" text touchable */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-[#5093A6] font-bold">Sign in</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default RegisterScreen;
