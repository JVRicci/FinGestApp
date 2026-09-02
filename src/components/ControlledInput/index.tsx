import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";

interface IControlledInputProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: string;
    rules?: object;
    textInputProps?: Omit<TextInputProps, 'theme'>
}

export default function ControlledInput<TFieldValues extends FieldValues>({
    control,
    name,
    label,
    rules,
    textInputProps
} : IControlledInputProps<TFieldValues>){
    return (
            <Controller
                control={control}
                name={name}
                rules= {rules}
                render={({ field: { onChange, onBlur, value }, fieldState: {error} }) => (
                    <TextInput 
                        mode="outlined"
                        label={label}
                        activeOutlineColor="#6200EE"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value as string}
                        error={!!error}
                        {...textInputProps}>
                    </TextInput>
                )}>
            </Controller>
        )

}

