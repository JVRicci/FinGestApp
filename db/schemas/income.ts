import { randomUUID } from 'crypto'
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

type status = "paid" | "pending" | "cancelled"
type paymentMethod = "credit" | "debit" | "cash"
type frequency = "daily" | "weekly" |  "monthly" | "yearly"

export const incomeModel = sqliteTable("incomes", {
    id: text("id")
        .primaryKey()
        .$defaultFn(
            () => randomUUID()
        ),
    
    description: text("description")
        .notNull(),
    amount: integer().notNull(),
    receivedDate: integer("received_date", { mode: "timestamp"})
        .notNull(),
    category: text("category")
        .notNull(),
    status: text("status")
        .$type<status>()
        .default("pending")
        .notNull(),
    frequency: text("frequency")
        .$type<frequency>()
        .default('daily')
        .notNull(),

    paymentMethod: text("payment_method")
        .$type<paymentMethod>(),

    createdAt: integer("created_at", { mode: "timestamp_ms"})
        .$defaultFn((): Date => new Date())
        .notNull(),
    
    updatedAt: integer("updatedAt", { mode: "timestamp_ms"})
        .$onUpdate((): Date => new Date())
        .notNull()
}) 