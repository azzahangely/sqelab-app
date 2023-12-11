import React from 'react';
import { View, Text, TouchableOpacity, SectionList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Categories = () => {
  // Sample data for categories organized in sections
  const categories = [
    {
      title: 'Social Media Marketing',
      data: [
        { id: 1, name: 'Management' },
        { id: 2, name: 'Content Creation' },
        { id: 3, name: 'Community Engagement' }
      ]
    },
    {
      title: 'Brand Identity',
      data: [
        { id: 4, name: 'Logo Design' },
        { id: 5, name: 'Business Card Design' },
        { id: 6, name: 'Social Media Graphics' }
      ]
    },
    {
      title: 'Web & App Design',
      data: [
        { id: 7, name: 'Website Design' },
        { id: 8, name: 'App Design' },
        { id: 9, name: 'UI Design' }
      ]
    },
    {
      title: 'Illustration',
      data: [
        { id: 10, name: 'Digital Illustration' },
        { id: 11, name: 'Cartoons & Comics' },
        { id: 12, name: 'Basic Artwork' }
      ]
    },
    {
      title: 'Architecture & Design',
      data: [
        { id: 13, name: 'Interior Design' },
        { id: 14, name: 'Landscape Design' },
        { id: 15, name: 'Basic Building Design' }
      ]
    },
    {
      title: 'Print Materials',
      data: [
        { id: 16, name: 'Flyer Design' },
        { id: 17, name: 'Brochure Design' },
        { id: 18, name: 'Poster Design' }
      ]
    },
    {
      title: 'Other Designs',
      data: [
        { id: 19, name: 'Packaging Design' },
        { id: 20, name: 'Invitation Design' },
        { id: 21, name: 'Custom Graphics' }
      ]
    },
    {
      title: 'Help',
      data: [
        { id: 22, name: 'Assistance' }
      ]
    }
  ];
  

  const renderCategories = ({ item }) => (
    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}>
      <Text>{item.name}</Text>
      <Feather name="chevron-right" size={20} color="#888" />
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }) => (
    <View className="bg-transparent mt-6">
      <Text className="font-bold text-[#216274]">{section.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Categories</Text>
          <Text style={{ fontSize: 16, marginTop: 8 }}>Find the service you want</Text>
        </View>

        {/* Search Button */}
        <TouchableOpacity style={{ backgroundColor: '#5697A9', borderRadius: 999, padding: 12 }}>
          <Feather name="search" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* SectionList of Categories */}
      <SectionList
        sections={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategories}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default Categories;
