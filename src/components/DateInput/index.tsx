import { useState } from "react"
import { Control, Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import { DatePickerInput } from 'react-native-paper-dates'
import { SafeAreaView } from "react-native-safe-area-context"

function isValidDateText(value: string): boolean {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        return false
    }

    const [day, month, year] = value.split('/').map(Number)
    const date = new Date(year, month - 1, day)

    return date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
}

interface IDateInput<T extends FieldValues> {
    label: string,
    name: FieldPath<T>
    control: Control<T>
    rules?:  ControllerProps<T>['rules']
}

export default function DateInput<T extends FieldValues>({ label, name, control, rules}: IDateInput<T>){
    const [hasInvalidFormat, setHasInvalidFormat] = useState(false);

    return (
        <SafeAreaView>  
            <Controller 
                name={name}
                control={control}
                rules={ rules}

                render={({
                    field,
                    fieldState
                }) => (
                    <DatePickerInput 
                        locale = "pt"
                        label = { label }
                        value={field.value}
                        onChange={(date) => {
                            field.onChange(date)
                            setHasInvalidFormat(false)
                        }}

                        onChangeText={(text) => {
                            const isValid = isValidDateText(text ?? '')
                            setHasInvalidFormat(!isValid)

                            if (!isValid) {
                                field.onChange(undefined)
                            }
                        }}

                        onValidationError={(error) => {
                            if (error) {
                                setHasInvalidFormat(true)
                                field.onChange(undefined)
                            }
                        }}
                        
                        inputMode="start"
                        mode="outlined"
                        hasError = {!!fieldState.error || hasInvalidFormat}
                    />
                )}
            />
        </SafeAreaView>
    )
}