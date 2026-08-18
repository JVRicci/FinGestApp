import { BillsDTO } from "@/schemas/billsSchema";
import { IncomeDTO } from "@/schemas/incomeSchema";
import currencyFomatter from '@/utils/currencyFormatter';
import dateFormatter from '@/utils/dateFormatter';
import { useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index ({ data }: { data: (BillsDTO | IncomeDTO) }){
    const [visible, setVisible] = useState(false)
    
    const date: Date = 'dueDate' in data ? data.dueDate : data.receivedDate
    const formattedDate : string = dateFormatter(date)

    const movementValue: string =`${'type' in data ? "-" : ""} ${currencyFomatter(data.amount) }` 

    const movementTextColor: String = 'type' in data ? 'red-700' : 'green-700'

    return (
        <TouchableOpacity className="border-b border-slate-300 mt-10" onPress={() => setVisible(!visible)}>
            <Text className="text-xl font-bold">{data.description}</Text>
            <View className="flex-row justify-between mt-4 mb-2">
                <Text>{formattedDate}</Text>
                {
                    visible ?
                    <Text className={`text-${movementTextColor}`}> R$ {movementValue}</Text>
                    :
                    <View className=" bg-zinc-300 w-[20%] h-[75%] rounded-md"></View>
                }
            </View>
        </TouchableOpacity>
    );
}

