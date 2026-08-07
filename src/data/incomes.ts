import { IncomeDTO } from "@/schemas/incomeSchema";

export const incomes: IncomeDTO[] = [
    {
        id:"shfcjhdfhedfbcef",
        description: "Salário",
        amount: 3500.00,
        receivedDate: new Date("2026-08-05"),
        category: "Trabalho"
    },
    {
        id: "fwefedgrerdgvrrgreg",
        description: "Freelance",
        amount: 800.00,
        receivedDate: new Date("2026-08-15"),
        category: "Extra"
    }
];