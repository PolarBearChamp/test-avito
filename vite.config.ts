import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic', // Add this line
        }),
        viteTsconfigPaths(),
    ],
})
