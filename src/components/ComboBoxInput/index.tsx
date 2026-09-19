import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'
import { View } from 'react-native'
import { Dropdown, Option } from 'react-native-paper-dropdown'

interface IComboBoxInput<T extends FieldValues>  {
    name: FieldPath<T>,
    label: string,
    placeholder: string
    options: Option[]
    control: Control<T>
    required?: boolean
}

export default function ComboBoxInput<T extends FieldValues>({ 
        name,
        label,
        placeholder,
        options,
        control,
        required
    }: IComboBoxInput<T>) {

    return (
        <View>
            <Controller 
            control={control}
            name={name}
            rules = {{ required: required}}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <Dropdown
                        label={label}
                        placeholder={placeholder}
                        options={options}
                        value={value}
                        onSelect={(selectedValue) => onChange(selectedValue)}
                        mode="outlined"
                        error={!!error}
                    />
                )}
            />
        </View>
    )
}
