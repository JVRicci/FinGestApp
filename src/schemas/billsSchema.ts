import { z } from 'zod';

export const billsSchema = z.object({
    id: z.uuid(),
    description: z.string().min(1, 'Description is required'),
    amount: z.number().positive('Amount must be positive'),
    dueDate: z.date(),
    paid: z.boolean(),
    type: z.enum(['expense', 'income']),
});

export type BillsDTO = z.infer<typeof billsSchema>;