import { z } from 'zod';

export const incomeSchema = z.object({
    id: z.uuid(),
    description: z.string().min(1, 'Description is required'),
    amount: z.number().positive('Amount must be positive'),
    receivedDate: z.date(),
    category: z.string().min(1, 'Category is required'),
});

export type IncomeDTO = z.infer<typeof incomeSchema>; 