import Actions from '@/components/Actions';
import Balance from "@/components/Balance";
import Header from "@/components/Header";
import MovementList from '@/components/MovementList';
import { bills } from "@/data/bills";
import { incomes } from "@/data/incomes";
import { BillsDTO } from "@/schemas/billsDTO";
import { IncomeDTO } from "@/schemas/incomeDTO";
import movementsSorted from '@/utils/dateSort';
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

interface IActionButtonData {
    id: number;
    icon: string;
    label: string;
    buttonFunction: () => void;
}

export default function Home() {
    const [username, setUsername] = useState('João Vitor');
    const [balance, setBalance] = useState(1000)
    const [expenses, setExpenses] = useState(500)

    const totalMovements : (BillsDTO | IncomeDTO)[] = [...bills, ...incomes];

    const movementsOrd: (BillsDTO | IncomeDTO)[] = movementsSorted(totalMovements)

    const ActionData: IActionButtonData[] = [
        {
            id: 1,
            icon: "folder",
            label: "Entradas",
            buttonFunction: () => router.push("/entries"),
        },
        {
            id: 2,
            icon: "tag",
            label: "Compras",
            buttonFunction: () => console.log("Ok"),
        },
        {
            id: 3,
            icon: "wallet",
            label: "Carteira",
            buttonFunction: () => console.log("Ok"),
        },
    ];

    return (
        <View className="">
            <Header username={username} />
            <Balance balance={balance} expenses={expenses} />
            <Actions ActionData = {ActionData}/>

            <Text className="text-2xl font-bold mx-14 mt-14">Ultimas Movimentações</Text>
            <MovementList movements={movementsOrd.slice(0, 5)}/>
        </View>
    );
}
