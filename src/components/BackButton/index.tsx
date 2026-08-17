import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function BackButton() {
  const handleBack = () => {
    router.back();
  };
  return (
    <TouchableOpacity
      onPress={handleBack}
      className="w-14 h-14 justify-center items-center rounded-full border border-zinc-300"
    >
      <Feather name="arrow-left" size={24} color="#000" />
    </TouchableOpacity>
  );
}
