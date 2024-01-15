import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {
    const navigate=useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity onPress={()=>navigate.navigate('Cart')} className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg" style={{backgroundColor:'orange'}}>
            <View className="p-2 px-4 rounded-full" style={{backgroundColor:"black"}}>
            <Text className="font-extrabold text-white text-lg">3</Text>
            </View>
            <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
            <Text className="font-extrabold text-white text-lg">$45</Text>
        </TouchableOpacity>
    </View>
  )
}