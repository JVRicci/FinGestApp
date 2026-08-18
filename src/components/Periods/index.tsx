import { Text, TouchableOpacity } from "react-native";

interface PeriodItemProps  {
    data : string,
    isSelected: boolean,
    handlePress: (data: string | null) => any
}

export default function PeriodItem ( {data, isSelected, handlePress}: PeriodItemProps) {

    return (
        <TouchableOpacity 
            key= {data}
            className={`flex justify-center items-center w-20 h-10 ${ isSelected ? "bg-purple-600 rounded-3xl" : ""}`}
            onPress={() => handlePress(data)}
            >
                <Text className={`${ isSelected ? 'text-white text-lg' : ""}`}>
                    {data}
                </Text>
                
        </TouchableOpacity>
    )
}