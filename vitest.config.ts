import path from 'node:path'
import { reactNative } from 'vitest-native'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [
        reactNative({
            engine: 'mock'
        }) 
    ],
    resolve:{
        alias: {
            '@' : path.resolve(__dirname, "./src")
        }
    },
    test: {
        globals: true, 
        environment: 'node', 
        setupFiles: ['./vitest.setup.ts'],
    },
})