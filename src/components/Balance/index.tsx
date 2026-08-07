import { BalanceDTO } from "@/schemas/balanceSchema";
import currencyFormatter from "@/utils/currencyFormatter";
import { Text, View } from 'react-native';

export default function Index ({balance, expenses} : BalanceDTO  ) {

    const formattedBalance = currencyFormatter(balance);
    const formattedExpenses = currencyFormatter(expenses);

    const infoList = [
        { label: 'Saldo', value: formattedBalance },
        { label: 'Gastos', value: formattedExpenses }
    ]

    return (
        <View className="bg-white flex-row justify-around items-center w-[90%] mx-auto mt-[-50] p-5 rounded-lg z-90">
            
            {infoList.map((info, index) => (
                <View key={index}>
                    <Text className="text-lg">{info.label}</Text>
                    <View className="flex-row justify-center items-center gap-2">
                        <Text>R$</Text>
                        {
                            info.label === 'Gastos' ? (
                                <Text className="text-xl font-bold text-red-700">- {info.value}</Text>
                            ) : (
                                <Text className="text-xl font-bold text-green-700">{info.value}</Text>
                            )
                        }
                    </View>
                </View>
            ))}
        </View>
    );
}
