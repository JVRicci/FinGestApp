import { useState } from 'react'
import { View } from 'react-native'
import { Dropdown, Option } from 'react-native-paper-dropdown'

interface IComboBoxInput {
    label: string,
    placeholder: string
    options: Option[]
}

export default function ComboBoxInput ({ label, placeholder, options}: IComboBoxInput) {
    const [ value, setValue ] = useState<string>()

    return (
        <View>
            <Dropdown 
                label = { label }
                placeholder = { placeholder }
                options = { options }
                value = { value }
                onSelect={ (val: string | undefined ): void => setValue(val) }
                mode='outlined'
                disabled= {false}
            />
        </View>
    )
}
