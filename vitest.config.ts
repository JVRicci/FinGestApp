import { reactNative } from 'vitest-native'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [
        reactNative() 
    ],
    test: {
        globals: true, 
        environment: 'node', 
    },
})