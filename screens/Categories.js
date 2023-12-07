import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View className="bg-white flex-1 p-4 ">
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-[24px] font-bold">Categories</Text>
          <Text className="text-md mt-2">Find the service you want</Text>
        </View>

        {/* Search Button */}
        <TouchableOpacity className="bg-[#5697A9] rounded-full p-3">
        <Feather name="search" size={25} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Categories;
