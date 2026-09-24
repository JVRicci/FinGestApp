import { IncomeDTO } from "@/schemas/incomeDTO"
import { createIncome as insertIncome } from '../../db/repositories/entries'

interface IResponse {
    status: number,
    response: string
}

export const createIncome = async ({description, amount, category, receivedDate, status, paymentMethod}: IncomeDTO) : Promise<IResponse> => {
    const newIncome = await insertIncome({description, amount, category, receivedDate, status, paymentMethod})
    
    return {status: 201, response: "Success"}
}