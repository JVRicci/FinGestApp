import { BillsDTO } from "@/schemas/billsSchema";



export const bills: BillsDTO[] = [
    {
        id: "ffjhfjhhfcbdfbhbeff",
        description: 'Conta de Luz',
        amount: 10000,
        dueDate: new Date('2023-06-10'),
        paid: false,
        type: 'expense'
    },
    {
        id: "sfvjfjdjkffvjkdv",
        description: 'Conta de Água',
        amount: 5000,
        dueDate: new Date('2023-06-15'),
        paid: true,
        type: 'expense'
    },
    {
        id: "sjhjhsdjjhbvssd",
        description: 'Pix Cliente X',
        amount: 3000,
        dueDate: new Date('2023-06-15'),
        paid: true,
        type: 'income'
    }
]