import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const navigation = useNavigation();

  const userName = "John"; // Replace with user's name or fetch from user data

  // Mock data for newly added vouchers and menu options
  const newlyAddedVouchers = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 7,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 8,
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
  ];
  

  const menuOptions = [
    {
      id: 1,
      optionName: 'Option 1',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 2,
      optionName: 'Option 2',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 3,
      optionName: 'Option 3',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 4,
      optionName: 'Option 4',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 5,
      optionName: 'Option 5',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 6,
      optionName: 'Option 6',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 7,
      optionName: 'Option 7',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
    {
      id: 8,
      optionName: 'Option 8',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your actual image URL
    },
  ];
  
  const renderMenuOptions = () => {
    const rows = [];
    const columnCount = 4; // Number of columns
    const rowCount = Math.ceil(menuOptions.length / columnCount); // Number of rows

    for (let i = 0; i < rowCount; i++) {
      const rowItems = [];
      for (let j = 0; j < columnCount; j++) {
        const index = i * columnCount + j;
        if (index < menuOptions.length) {
          rowItems.push(
            <TouchableOpacity key={menuOptions[index].id} className="w-[23%]">
              {/* Menu Option Item */}
              <Image
                source={{ uri: menuOptions[index].imageUrl }}
                className="w-20 h-20 rounded-full mb-2"
              />
              <Text className="mt-2 text-center">{menuOptions[index].optionName}</Text>
            </TouchableOpacity>
          );
        } else {
          rowItems.push(<View key={`placeholder-${j}`} className="w-[23%]" />);
        }
      }
      rows.push(<View key={`row-${i}`} className="flex-row justify-between mb-2">{rowItems}</View>);
    }
    return rows;
  };
  return (
    <View className="bg-white flex-1 p-4 ">
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-[24px] font-bold">Hello, {userName}!</Text>
          <Text className="text-md mt-2">Find the service you want</Text>
        </View>

        {/* Search Button */}
        <TouchableOpacity className="bg-[#5697A9] rounded-full p-3">
        <Feather name="search" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Newly Added Voucher Carousel */}
      <FlatList
        horizontal
        data={newlyAddedVouchers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageUrl }}
            className="w-64 h-40 mr-4 rounded-md"
          />
        )}
      />

      <View className="flex-col">
        <Text className="mb-4 font-semibold text-[19px]">
        What are you looking for?
        </Text>
        {renderMenuOptions()}
        
      </View>

      <View className="bg-white flex-1 p-4">
      <TouchableOpacity
      onPress={() => navigation.navigate('Categories')}
      className="border border-gray-200 rounded-full p-4">
        <Text className="text-black text-center font-bold">All Services</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default HomeScreen;
