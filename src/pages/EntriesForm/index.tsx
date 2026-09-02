import BackButton from "@/components/BackButton"
import statusBarHeight from "@/utils/statusBarHeight"
import { Text, TextInput, View } from "react-native"

export default function EntriesForm () {
    return (
        <View style={{ paddingTop: statusBarHeight() }}>
            <View className="flex flex-row items-center gap-6 ps-8">
                <BackButton />
                <Text className="text-2xl text-bold ">Adicionar receita</Text>
            </View>

            <TextInput className="border rounded-full ps-16 w-96"></TextInput>
        </View>
    )
}
