import BackButton from "@/components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

type SearchTextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
};

export default function SearchTextInput({ value, onChangeText, onClear } : SearchTextInputProps) {
    return (
        <View className="flex flex-row justify-between items-center bg-zinc-200 pe-4 rounded-full">
            <View className="flex flex-row gap-4">
                <BackButton />
                <TextInput placeholder="Digite o nome..." onChangeText={onChangeText} value={value}></TextInput>
            </View>
            <AntDesign name="close" size={22} onPress = { onClear } ></AntDesign>
        </View>
    )
}