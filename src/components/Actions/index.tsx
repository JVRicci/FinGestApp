import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn } from "react-native-reanimated";

export default function Index (){

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true)
        }, 400)

        return () => clearTimeout(timer)
    }, [])

    const buttonData: { id: number; icon: string; label: string; buttonFunction: () => void }[] = [
        {
            id: 1,
            icon: "folder",
            label: "Entradas",
            buttonFunction: () => console.log("Ok")
        },
        {
            id: 2,
            icon: "tag",
            label: "Compras",
            buttonFunction: () => console.log("Ok")
        },
        {
            id: 3,
            icon: "wallet",
            label: "Carteira",
            buttonFunction: () => console.log("Ok")
        },
        {
            id: 4,
            icon: "barcode",
            label: "Boleto",
            buttonFunction: () => console.log("Ok")
        },
    ]

    return (
        <ScrollView className='mt-10 ps-14 pe-14' horizontal={true} showsHorizontalScrollIndicator={false}>
            {buttonData.map((item) => (
                <Animated.View 
                    key={item.id}
                    entering={FadeIn.duration(300)}
                    >

                    <TouchableOpacity  onPress={item.buttonFunction} className='items-center mr-10'>
                        <View 
                        className='bg-slate-200 p-6 rounded-full'>
                            {
                                loaded ?
                                    <AntDesign 
                                        name={item.icon as any}
                                        size={26}
                                        color="#000"
                                    />
                                :
                                    <View className="w-6 h-6 bg-slate-400 rounded-full" />
                            }
                        </View>
                        <Text className='font-bold'>{item.label}</Text>
                    </TouchableOpacity>
                </Animated.View>
            ))}

        </ScrollView>
    );
}

