import MovementList from "@/components/MovementList";
import Periods from "@/components/Periods";
import SearchTextInput from "@/components/SearchTextInput";
import { incomes } from "@/data/incomes";
import { BillsDTO } from "@/schemas/billsSchema";
import { IncomeDTO } from "@/schemas/incomeSchema";
import movementsSorted from '@/utils/dateSort';
import statusBarHeight from "@/utils/statusBarHeight";
import { router } from "expo-router";
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Entries() {
  const [ selected, setSelected ] = useState<string>("Tudo")
  const [ search, setSearch ] = useState<string>("");

  const periodList: string[] = [
    "Tudo", "30 dias", "15 dias", "7 dias", "Hoje"
  ]

  const handlePress = (data : string | null) : void => {
    setSelected(data ?? "Tudo")
  }

  const incomeList: IncomeDTO[] = [ ...incomes ]

  const filteredIncomeList = incomeList.filter((item) =>
    item.description
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  
  const movementsOrd: (BillsDTO | IncomeDTO)[] = movementsSorted(filteredIncomeList)
  

  const handleAddEntry = () => {
    router.push ("/entriesForm")
  }

  return (
    <View style={{ paddingTop: statusBarHeight() }} className="flex-1 relative w-full items-stretch">
      <View className="ps-10 pe-10 ">
        <SearchTextInput 
          value={search}
          onChangeText={setSearch}
          onClear={() => setSearch("")}
        />
      </View>

      <Text className="text-2xl font-bold mx-14 mt-14">Entradas</Text>

      <View>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            className="mt-10 ps-14 pe-4 gap-10">
              
            {periodList.map((data: string) =>{
              const isSelected : boolean = data === selected
              
              return <Periods key={data} data = {data} isSelected = {isSelected} handlePress = {handlePress}  />
            })}
        </ScrollView>

        <MovementList  movements={filteredIncomeList}/>
      </View>

      <TouchableOpacity className="absolute bottom-6 right-6 z-50 h-14 w-14 m-6 items-center justify-center rounded-full bg-purple-600 shadow-lg active:opacity-80"
        onPress={handleAddEntry}>
        <Text className="text-white text-6xl">+</Text>
      </TouchableOpacity>

    </View>
  );
}
