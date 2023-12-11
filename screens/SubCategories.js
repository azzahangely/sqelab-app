import React from 'react';
import { View, Text, TouchableOpacity, SectionList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SubCategories = () => {
    const AllServices = [
        {
          title: 'Social Media Marketing',
          data: [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
          ],
        },
        {
          title: 'Section 2',
          data: [
            { id: 3, name: 'Category 3' },
            { id: 4, name: 'Category 4' },
          ],
        },
        // Add more sections and categories as needed
      ];
    
      const renderAllServices = ({ item }) => (
        <TouchableOpacity style={{ paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      );
    
      const renderSectionHeader = ({ section }) => (
        <View className="bg-transparent mt-3">
          <Text className="font-extrabold">{section.title}</Text>
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
            sections={AllServices}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderAllServices}
            renderSectionHeader={renderSectionHeader}
          />
        </View>
      );
    };

export default SubCategories;
