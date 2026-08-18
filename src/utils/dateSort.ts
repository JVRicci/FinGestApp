import { BillsDTO } from "@/schemas/billsSchema"
import { IncomeDTO } from "@/schemas/incomeSchema"

const dataExtraction = (date: any) : Date => {
    return 'dueDate' in date ? date.dueDate : date.receivedDate
}

export default function movementsSorted(movementList: (BillsDTO | IncomeDTO)[])   {
    return movementList.sort((a, b) => {
        const date: Date = new Date (dataExtraction(a))
        const second_date : Date = new Date (dataExtraction(b))

        return second_date.getTime() - date.getTime()
    }) 
}