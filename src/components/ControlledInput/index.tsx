import formatCurrency from "@/utils/currencyFormatter";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

interface IControlledInputProps<T extends FieldValues> {
    control: Control<T>;
    name: string;
    label: string;
    rules?: object;
    textInputProps?: Omit<TextInputProps, 'theme'>
    keyboardType?: KeyboardTypeOptions
    currency?: boolean
}

export default function ControlledInput<TFieldValues extends FieldValues>({
    control,
    name,
    label,
    rules,
    textInputProps,
    keyboardType = "ascii-capable",
    currency = false
} : IControlledInputProps<TFieldValues>){
    return (
            <Controller
                control={control}
                name={name as Path<TFieldValues>}
                rules= { rules ? rules : {required: "Campo obrigatório"} }
                render={({ field: { onChange, onBlur, value }, fieldState: {error} }) => (
                    <TextInput
                        mode="outlined"
                        label={label}
                        activeOutlineColor="#6200EE"
                        onBlur={onBlur}
                        onChangeText={(text) => {
                            if (!currency) {
                                onChange(text)
                                return
                            }

                            const digits = text.replace(/\D/g, '').replace(/^0+/, '')
                            onChange(digits ? formatCurrency(Number(digits)) : '')
                        }}
                        value={value as string}
                        error={!!error}
                        keyboardType = { keyboardType }
                        {...textInputProps}>
                    </TextInput>
                )}>
            </Controller>
        )

}

