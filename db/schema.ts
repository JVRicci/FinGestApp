import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

type billType = 'expense' | 'income'

export const billsModel = sqliteTable("bills", {
    id: integer("id").primaryKey({autoIncrement: true}),

    description: text("description").notNull(),
    amount: integer("amount").notNull(),
    dueDate: text("dueDate"),
    paid: integer("paid", { mode: "boolean"})
        .notNull()
        .default(false),

    billType: text("type").$type<billType>().default("expense"),
    // How many times that bill need to pay?
    times: integer("times").default(1),

    createdAt: integer("created_at", {
        mode: "timestamp_ms"
    })
        .notNull()
        .$defaultFn(() => new Date()),

    updatedAt: integer('updated_at', {
        mode: 'timestamp_ms'
    })
        .notNull()
        .$onUpdate(() => new Date())
})