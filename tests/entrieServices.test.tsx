import { IncomeDTO } from '@/schemas/incomeDTO';
import { createIncome } from '@/services/entriesServices';
import { randomUUID } from 'crypto';
import { describe, expect, it, vi } from 'vitest';


vi.mock('../db/repositories/entries', () => ({
    createIncome: vi.fn()
}))

function makeMockIncome(overrides?: Partial<IncomeDTO>): IncomeDTO {
    return {
        id: randomUUID(),
        description: 'Mock de Receita Padrão',
        amount: 100.00,
        receivedDate: new Date('2026-09-24'),
        category: 'monthly',
        status: 'pending',
        paymentMethod: 'cash',
        ...overrides // Permite que você mude apenas o campo que quer testar
    };
}

describe('Entries Services tests', () => {
    it('New entry status need to be 201', async () => {
        // Given
        const responseExpected = 201;
        vi.mocked(createIncome).mockResolvedValue
        const incomeMock = makeMockIncome()

        // When
        const newEntry = await createIncome(incomeMock)


        // Then
        expect(newEntry.status).toBe(responseExpected);
    })
})