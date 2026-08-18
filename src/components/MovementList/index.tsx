import Movements from "@/components/Movements";
import { BillsDTO } from "@/schemas/billsSchema";
import { IncomeDTO } from "@/schemas/incomeSchema";
import { FlatList } from 'react-native';

interface IMovementList {
    movements: (BillsDTO | IncomeDTO)[]
}

export default function MovementList ({movements}: IMovementList) {
    return (
        <FlatList 
            className= "mx-14" 
            data={movements}
            keyExtractor={(item: BillsDTO | IncomeDTO) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}: {item: BillsDTO | IncomeDTO}) => (
                <Movements data={item}/>
            )}
        />
    );
}
