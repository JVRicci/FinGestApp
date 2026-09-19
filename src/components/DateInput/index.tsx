import { useState } from "react"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"
import { DatePickerInput } from 'react-native-paper-dates'
import { SafeAreaView } from "react-native-safe-area-context"

interface IDateInput<T extends FieldValues> {
    label: string,
    name: FieldPath<T>
    control: Control<T>
    required?: boolean
}

export default function DateInput<T extends FieldValues>({ label, name, control, required}: IDateInput<T>){
    const [ selectedDate, setSelectedDate ] = useState<Date>()

    return (
        <SafeAreaView>  
            <Controller 
                name={name}
                control={control}
                rules={{ 
                    required: required
                }}

                render={({ field: { onChange }, fieldState: { error } }) => (
                    <DatePickerInput 
                        locale = "pt"
                        label = { label }
                        value = { selectedDate }
                        onChange = { d => {
                            setSelectedDate(d)
                            onChange(d)
                        }}
                        inputMode="start"
                        mode="outlined"
                        hasError = {!!error}
                    />
                )}
            />
        </SafeAreaView>
    )
}