import { useState } from "react"
import { DatePickerInput } from 'react-native-paper-dates'
import { SafeAreaView } from "react-native-safe-area-context"

interface IDateInput {
    label: string
}

export default function DateInput({ label }: IDateInput){
    const [ selectedDate, setSelectedDate ] = useState<Date | undefined>()

    return (
        <SafeAreaView>
            <DatePickerInput 
                locale = "pt"
                label = { label }
                value = { selectedDate }
                onChange = { d => setSelectedDate(d)}
                inputMode="start"
                mode="outlined"
            />
        </SafeAreaView>
    )
}