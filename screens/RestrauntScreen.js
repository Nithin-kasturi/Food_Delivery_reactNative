import { View, Text,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import DishRow from '../components/DishRow';
import CartIcon from '../components/cartIcon';
export default function RestrauntScreen() {
    const {params}=useRoute();
    const navigate=useNavigation();
    let item=params;
    return (
    <View>
        <CartIcon/>
    <ScrollView>
        <View className="relative">
            <Image className="h-72 w-full" source={item.image}/>
        <TouchableOpacity
        className="absolute top-13 left-4 bg-gray-50 p-2 rounded-full shadow"
        onPress={()=>navigate.goBack()}
        >
            <Icon.ArrowLeft strokeWidth={3} stroke={"orange"} />
        </TouchableOpacity>
        </View>
        <View style={{borderBottomLeftRadius:40,borderBottomRightRadius:40}}
        className="bg-white -mt-12 pt-6">
            <View className="px-5">
                <Text className="text-3xl font-bold">{item.name}</Text>
                <View className="flex-row my-1 space-x-2">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-xs">
                        <Text className="text-green-700">
                            {item.stars}
                        </Text>
                        <Text className="text-gray-700">
                            ({item.reviews} review ).<Text className="font-semibold">{item.category}</Text>
                       </Text>
                    </Text>
                    <View className="flex-row  space-x-1 items-center">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs"> Nearby . {item.address}</Text>
                    </View>
                </View>
                <Text className="text-gray-500 mt-2">{item.description}</Text>
            </View>
            <View className="bg-white pb-[80]">
                <Text className="px-4 py-4 text-2xl font-bold">MENU</Text>
                {
                    item.dishes.map((dish,index)=>
                        <DishRow item={{...dish}} key={index}/>
                    )
                }
            </View>
        </View>
    </ScrollView>
    </View>  )
}