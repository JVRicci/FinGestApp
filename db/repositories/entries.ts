import { desc, eq } from 'drizzle-orm';
import { db } from '../index';
import { incomeModel } from '../schemas';

type NewIncome = typeof incomeModel.$inferInsert

export const createIncome = async (data: NewIncome) =>{
    return db
        .insert(incomeModel)
        .values(data)
        .returning()
}

export const listIncomes = async () => {
    return db
        .select()
        .from(incomeModel)
        .orderBy(desc(incomeModel.createdAt), )
}

export const updateIncome = async (id: string, data: Partial<NewIncome>) => {
    return db
        .update(incomeModel)
        .set(data)
        .where(eq(incomeModel.id, id))
        .returning()
}

export const deleteIncome = async (id: string)=> {
    return db
        .delete(incomeModel)
        .where(eq(incomeModel.id, id))
        .returning()
}