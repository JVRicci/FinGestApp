import Header from '@/components/Header'

import { render, screen } from "@testing-library/react-native"
import { describe, expect, it } from "vitest"

describe("Math tests", () => {
    it("The number sum need to be less or equal 4", () => {
        expect(2 + 2).toBeLessThanOrEqual(5)
    })
})

describe("Imports", () => {
    it("importa react-native", async () => {
        await import("react-native")
    })

    it("importa vector icons", async () => {
        await import("@expo/vector-icons")
    })

    it("importa reanimated", async () => {
        await import("react-native-reanimated")
    })
})

describe("Components tests", async () => {
    it("test header content", async () => {
        await render(<Header username="Visitante" />)

        expect(screen.getByText("Olá, Visitante")).toBeTruthy()
    })
})
