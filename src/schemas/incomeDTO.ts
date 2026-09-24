import { z } from 'zod';

export const IncomeDTO = z.object({
    id: z.uuid(),
    description: z.string().min(1, 'Description is required'),
    amount: z.number().positive('Amount must be positive'),
    receivedDate: z.date(),
    category: z.union([
        z.literal('daily'),
        z.literal('weekly'),
        z.literal('monthly'),
        z.literal('yearly'),
    ]),
    status: z.union([
        z.literal('paid'),
        z.literal('pending'),
        z.literal('cancelled'),
    ]).default('pending'),
    paymentMethod: z.union([
        z.literal("credit"),
        z.literal("debit"),
        z.literal("cash")
    ]).optional()
});

export type IncomeDTO = z.infer<typeof IncomeDTO>; 