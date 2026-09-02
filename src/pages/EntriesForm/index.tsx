import BackButton from "@/components/BackButton"
import ControlledInput from "@/components/ControlledInput"
import statusBarHeight from "@/utils/statusBarHeight"
import { router } from "expo-router"
import { useForm } from 'react-hook-form'
import { Text, TouchableOpacity, View } from "react-native"

interface IFormInputs {
    description: string
}

export default function EntriesForm () {
    const {control, handleSubmit, formState: {errors} } = useForm<IFormInputs>({
        // defaultValues: { description: ''}
    })

    const onSubmit = (data: IFormInputs) =>{ 
        alert("Preenchido com sucesso");
        router.back()
    }

    return (
        <View style={{ paddingTop: statusBarHeight() }}>
            <View className="flex flex-row items-center gap-6 ps-8">
                <BackButton />
                <Text className="text-2xl text-bold ">Adicionar receita</Text>
            </View>
            
            <View className="ps-14 pe-14 mt-8">
                <ControlledInput 
                    control={control} 
                    name="description" 
                    label="Descrição"
                    rules={{required: "Campo obrigatório"}}
                    />
                
                <View className="mt-20 ps-14 ml-auto bg-purple-500 w-44 p-2 rounded-full">
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                        <Text className="text-white text-2xl">Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
