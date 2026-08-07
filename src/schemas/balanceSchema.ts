import z from 'zod';

export const balanceSchema = z.object({
  balance: z.number().min(0, { message: 'Balance must be a positive number' }),
  expenses: z.number().min(0, { message: 'Expenses must be a positive number' }),
});

export type BalanceDTO = z.infer<typeof balanceSchema>;