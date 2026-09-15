import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./db/schemas/index.ts",
    out: "./drizzle",
    dialect: "sqlite",
    driver: "expo",
});