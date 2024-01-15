import { View, Text, SafeAreaView, StatusBar ,TextInput, ScrollView} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';
export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-slate-50">
      <StatusBar barStyle="dark-content"/>
      {/* Search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-3 pt-1">
        <View className="flex-row flex-1 p-3 items-center rounded-full border border-gray-300">
        <Icon.Search height="25" width="25" stroke="gray" />
        <TextInput placeholder='Resturants' className="ml-2 flex-1"/>
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>        
        </View>
        </View>
        <View className="p-3 rounded-full" style={{backgroundColor:'orange'}}>
            <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
        </View>
      </View>
      {/* main content Area */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:20,
      }}
      >
        <Categories/>
        {/* Featured */}
        <View className="mt-5">
            {
            [featured,featured,featured].map((item,index)=>{
                return (
                    <FeaturedRow
                        key={index}
                        title={item.title}
                        restaurants={item.restaurants}
                        description={item.description}
                    />
                    )
            })
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}