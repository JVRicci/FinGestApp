import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IActionButtonData {
    id: number;
    icon: string;
    label: string;
    buttonFunction: () => void;
}

export default function Index({ActionData} :{ ActionData :  IActionButtonData[]} ) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView
      className="mt-10 ps-14 pe-14"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {ActionData.map((item) => (
        <Animated.View key={item.id} entering={FadeIn.duration(300)}>
          <TouchableOpacity
            onPress={item.buttonFunction}
            className="items-center mr-10"
          >
            <View className="bg-slate-200 p-6 rounded-full">
              {loaded ? (
                <AntDesign name={item.icon as any} size={26} color="#000" />
              ) : (
                <View className="w-6 h-6 bg-slate-400 rounded-full" />
              )}
            </View>
            <Text className="font-bold">{item.label}</Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
}
