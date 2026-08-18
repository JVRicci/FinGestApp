import Actions from '@/components/Actions';
import Balance from "@/components/Balance";
import Header from "@/components/Header";
import MovementList from '@/components/MovementList';
import { bills } from "@/data/bills";
import { incomes } from "@/data/incomes";
import { BillsDTO } from "@/schemas/billsSchema";
import { IncomeDTO } from "@/schemas/incomeSchema";
import movementsSorted from '@/utils/dateSort';
import { useState } from "react";
import { Text, View } from "react-native";


export default function Home() {
    const [username, setUsername] = useState('João Vitor');
    const [balance, setBalance] = useState(1000)
    const [expenses, setExpenses] = useState(500)

    const totalMovements : (BillsDTO | IncomeDTO)[] = [...bills, ...incomes];

    const movementsOrd: (BillsDTO | IncomeDTO)[] = movementsSorted(totalMovements)

    return (
        <View className="">
            <Header username={username} />
            <Balance balance={balance} expenses={expenses} />
            <Actions />

            <Text className="text-2xl font-bold mx-14 mt-14">Ultimas Movimentações</Text>
            <MovementList movements={movementsOrd.slice(0, 5)}/>
        </View>
    );
}
