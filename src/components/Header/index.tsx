import statusBarHeight from "@/utils/statusBarHeight";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Header(props: any) {
  return (
    <View className="bg-purple-600" style={{ paddingTop: statusBarHeight() }}>
      <Animated.View
        entering={FadeInDown.duration(800)}
        className="flex-row ps-10 pe-10 pb-24  justify-between items-center w-full"
      >
        <Text className="text-white text-2xl font-bold">{`Olá, ${props.username}`}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          className="bg-slate-400 rounded-full w-10 h-10 justify-center items-center"
        >
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
