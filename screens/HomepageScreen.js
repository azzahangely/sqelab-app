import React from 'react';
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
  FlatList,
  Image,
  ScrollView,
  SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const HomepageScreen = () => {
  const navigation = useNavigation();

  const userName = "John"; // Replace with user's name or fetch from user data

  // Mock data for newly added vouchers and menu options
  const newlyAddedVouchers = [
    {
      id: 1,
      imageUrl: require('../assets/Voc1.png'), // Replace with your actual image URL
    },
    {
      id: 2,
      imageUrl: require('../assets/Voc5.png'), // Replace with your actual image URL
    },
    {
      id: 3,
      imageUrl: require('../assets/Voc3.png'), // Replace with your actual image URL
    },
    {
      id: 4,
      imageUrl: require('../assets/Voc6.png'), // Replace with your actual image URL
    }
  ];
  

  const menuOptions = [
    {
      id: 1,
      optionName: 'Social Media Marketing',
      imageUrl: require('../assets/Social-media-marketing.png'), // Replace with your actual image URL
    },
    {
      id: 2,
      optionName: 'Brand Identity',
      imageUrl: require('../assets/Brand-identity.png'), // Replace with your actual image URL
    },
    {
      id: 3,
      optionName: 'Web & App Design',
      imageUrl: require('../assets/WebApp-design.png'), // Replace with your actual image URL
    },
    {
      id: 4,
      optionName: 'Illustration',
      imageUrl: require('../assets/Illustration.png'), // Replace with your actual image URL
    },
    {
      id: 5,
      optionName: 'Architecture & Design',
      imageUrl: require('../assets/ArchDesign.png'), // Replace with your actual image URL
    },
    {
      id: 6,
      optionName: 'Print Materials',
      imageUrl: require('../assets/Print.png'), // Replace with your actual image URL
    },
    {
      id: 7,
      optionName: 'Other Designs',
      imageUrl: require('../assets/Others.png'), // Replace with your actual image URL
    },
    {
      id: 8,
      optionName: 'Help',
      imageUrl: require('../assets/help.png'), // Replace with your actual image URL
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
                source={menuOptions[index].imageUrl}
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
    <SafeAreaView className="flex-1 ">
      <ScrollView className="flex-grow-1 bg-white">
            <View className="bg-white flex-1 p-4 ">
      <View className="justify-between items-start mb-4">
        <View className="px-4">
          <Text className="text-[24px] font-bold ">Hello, {userName}!</Text>
          <Text className="text-md mt-2">Find the service you want</Text>
        </View>
        <View className="bg-gray-300 rounded-full flex-row items-center px-4 mt-4 mb-2">
              <Feather name="search" size={20} color="#888" style={{ marginRight: 8 }} />
              <TextInput placeholder="Search..." style={{ flex: 1, paddingVertical: 8 }} />
        </View>
      </View>
      
      <FlatList
        horizontal
        data={newlyAddedVouchers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={item.imageUrl}
            className="w-64 h-[150px] mr-4 rounded-md"
          />
        )}
      />

      <View className="flex-col">
        <Text className="mt-8 mb-4 font-semibold text-[19px]">
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
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomepageScreen;
