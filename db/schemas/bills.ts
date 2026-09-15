import { randomUUID } from 'crypto';
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

type billType = 'expense' | 'income';
type status = "paid" | "pending" | "cancelled";
type paymentMethod = "credit" | "debit" | "cash"

export const billsModel = sqliteTable("bills", {
    id: text("id").primaryKey().$defaultFn(() => randomUUID()),

    description: text("description").notNull(),
    amount: integer("amount").notNull(),
    dueDate: text("dueDate"),
    billType: text("type").$type<billType>().default("expense"),
    // How many times that bill need to pay?
    times: integer("times").default(1),
    status: text("status")
        .$type<status>()
        .$defaultFn(()=>"pending")
        .notNull(),
    
    paymentMethod: text("payment_method").$type<paymentMethod>(),

    createdAt: integer("created_at", {
        mode: "timestamp_ms"
    })
        .notNull()
        .$defaultFn((): Date => new Date()),

    updatedAt: integer('updated_at', {
        mode: 'timestamp_ms'
    })
        .notNull()
        .$onUpdate((): Date => new Date())
})