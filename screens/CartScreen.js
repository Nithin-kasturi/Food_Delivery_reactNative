import { View, Text, TouchableOpacity,Image, ScrollView} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';
export default function CartScreen({item}) {
  const navigation=useNavigation();
  const restaurant=featured.restaurants[0];
  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
          <TouchableOpacity className="p-1 top-5 left-2 z-10 absolute rounded-full" style={{backgroundColor:'orange'}}
          onPress={()=>navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
          </TouchableOpacity>
      </View>
      <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
          
      </View>
      <View className="flex-row mt-2 px-4 items-center bg-orange-100">
        <Image source={require('../assets/images/bikeGuy.png')} className="h-20 w-20"/>
        <Text className="pl-4 flex-1">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
            <Text className="font-bold text-orange-600">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}} className="bg-white pt-5">
        {
          restaurant.dishes.map((dish,index)=>{
              return (
                <View key={index} className="flex-row items-center space-x-3 py-2 px-4 rounded-3xl mx-2 mb-3 shadow-md">
                    <Text className="font-bold text-orange-300">
                        2x
                    </Text>
                    <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                    <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                    <Text className="font-bold text-base">${dish.price}</Text>
                    <TouchableOpacity className="rounded-full" style={{backgroundColor:'orange'}}>
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                    </TouchableOpacity>
                </View>
              )
          })
        }
      </ScrollView>
      {/* {Total} */}
      <View className="rounded-3xl p-6 px-8 space-y-4 bg-orange-100" >
        <View className="flex-row justify-between">
            <Text className="text-gray-700">SubTotal</Text>
            <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">$20</Text>
        </View>
        <View>
          <TouchableOpacity className="bg-orange-400 p-3 rounded-full"
            onPress={()=>navigation.navigate("OrderPreparing")}
          >
              <Text className="text-white text-lg text-center">
                  Place Order
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}