import ComboBoxInput from "@/components/ComboBoxInput"
import ControlledInput from "@/components/ControlledInput"
import DateInput from "@/components/DateInput"
import dateFormatter from "@/utils/dateFormatter"
import { useForm } from 'react-hook-form'
import { Alert, Text, TouchableOpacity, View } from "react-native"
import Modal from 'react-native-modal'
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper'

interface IFormInputs {
    description: string,
    category: string,
    date: Date,
    value: string,
    method: string
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

const paymentMethodOptions: IPeriodOptions[] = [
    { label : "Cartão de crédito" , value : "credit" },
    { label : "Cartão de débito" , value : "debit" },
    { label : "Dinheiro" , value : "cash" }
]

interface IEntriesForm {
    isVisible: boolean,
    onClose: () => void
}

export default function EntriesForm ({ isVisible, onClose }: IEntriesForm) {
    const {control, handleSubmit, formState: {errors} } = useForm<IFormInputs>()

    const onSubmit = (data: IFormInputs) =>{ 
        const formattedData = {
            ...data,
            date: dateFormatter(data.date),
        }

        Alert.alert("Sucesso", "Receita adicionada com sucesso!");
        console.log(formattedData)
    }

    return (
        <Modal 
            isVisible={ isVisible }
            onBackdropPress={ onClose }
            onBackButtonPress={ onClose }
            avoidKeyboard
            className="flex-1 m-0 justify-center items-center"
        >
            <PaperProvider
                theme = {MD3LightTheme}
            >
                <View className=" my-[50%] mx-auto bg-zinc-50 rounded-xl py-8">
                    <View className="flex flex-row items-center gap-6 mb-8 justify-between px-14">
                        <Text className="text-2xl text-bold">
                            Adicionar receita
                        </Text>
                    </View>
                
                    <View className="ps-14 pe-14 gap-4">
                        
                        <ControlledInput 
                            control={control} 
                            name="description" 
                            label="Descrição"
                            rules={{required : "Adicione uma descrição", minLength: 4}}
                        />
                        
                        <ComboBoxInput
                            control={control}
                            name="category"
                            label="Categoria"
                            options={periodOptions}
                            placeholder="Categoria"
                            required={true}
                        />

                        <DateInput 
                            label="Data de recebimento" 
                            name="date" 
                            control={control} 
                            rules={{
                                required: true
                            }}
                        />

                        <ComboBoxInput
                            control={control}
                            name="method"
                            label="Método de pagamento"
                            options={paymentMethodOptions}
                            placeholder="Método de pagamento"
                            required={true}
                        />

                        <ControlledInput 
                            control = {control}
                            name="value"
                            label= "Valor recebido"
                            keyboardType="numeric"
                            currency
                            rules={{required:"Insira um valor recebido"}}
                        />
                        
                        <TouchableOpacity
                            onPress={handleSubmit(onSubmit)}
                            className="h-14 mt-10 bg-purple-500 justify-center items-center p-2 rounded-full"
                        >
                            <Text className="text-white text-lg font-bold">
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </PaperProvider>
        </Modal>
    )
}
