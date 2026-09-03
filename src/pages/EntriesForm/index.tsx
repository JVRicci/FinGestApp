import BackButton from "@/components/BackButton"
import ComboBoxInput from "@/components/ComboBoxInput"
import ControlledInput from "@/components/ControlledInput"
import DateInput from "@/components/DateInput"
import statusBarHeight from "@/utils/statusBarHeight"
import { router } from "expo-router"
import { useForm } from 'react-hook-form'
import { Alert, Text, TouchableOpacity, View } from "react-native"

interface IFormInputs {
    description: string
}

interface IPeriodOptions {
    label: string,
    value: string
}

const periodOptions: IPeriodOptions[] = [
    { label : "Único" , value : "unico" },
    { label : "Semanal" , value : "semanal" },
    { label : "Mensal" , value : "mensal" },
    { label : "Anual" , value : "anual" }
]

export default function EntriesForm () {
    const {control, handleSubmit, formState: {errors} } = useForm<IFormInputs>({
        // defaultValues: { description: ''}
    })

    const onSubmit = (data: IFormInputs) =>{ 
        Alert.alert("Sucesso", "Receita adicionada com sucesso!");
        router.back()
    }

    return (
        <View style={{ paddingTop: statusBarHeight() }}>
                <View className="flex flex-row items-center gap-6 ps-8">
                    <BackButton />
                    <Text className="text-2xl text-bold ">Adicionar receita</Text>
                </View>
                
                <View className="ps-14 pe-14 mt-8">
                    <DateInput label="Data de recebimento" />
                    
                    <ControlledInput 
                        control={control} 
                        name="description" 
                        label="Descrição"
                        rules={{required : "Adicione uma descrição", minLength: 4}}
                    />

                    <ComboBoxInput 
                        label="Categoria"
                        options={periodOptions}
                        placeholder="Categoria"
                    />

                    <ControlledInput 
                        control = {control}
                        name="description"
                        label= "Valor recebido"
                        keyboardType="numeric"
                        rules={{required:"Insira um valor recebido", minValue: 3}}
                    />
                    
                    <View className="mt-20 bg-purple-500 items-center p-2 rounded-full">
                        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                            <Text className="text-white text-2xl">Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
    )
}
