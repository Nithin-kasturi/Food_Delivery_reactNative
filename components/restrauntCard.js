import { View, Text, TouchableOpacity,Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
export default function RestrauntCard({item}) {
    const navigation=useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Restraunt',{...item})}>
        <View className="rounded-3xl mr-6 bg-white shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
            <View className="px-3 pb-4 space-y-2">
            <Text className="font-bold pt-2 text-lg">{item.name}</Text> 
                <Text className="flex-row items-center space-x-1">
                    <Image className="w-4 h-4" source={require('../assets/images/fullStar.png')}/>
                    <Text className="text-xs">
                        <Text className="text-green-700">
                            {item.stars}
                        </Text>
                        <Text className="text-gray-700">
                            ({item.reviews} review ).<Text className="font-semibold">{item.category}</Text>
                       </Text>
                    </Text>
                </Text>
                <View className="flex-row pt-2 space-x-1 items-center">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs"> Nearby . {item.address}</Text>
            </View>
            </View>    
        </View>
    </TouchableWithoutFeedback>
  )
}