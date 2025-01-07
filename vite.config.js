import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            // ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
    ],
    ssr: {
        noExternal: [
            '@uiw/react-md-editor',
            'react-markdown',
            '@uiw/react-markdown-preview',
            'lodash',
            '@tabler/icons-react',
            'react-share',
            'react-copy-to-clipboard',
            'laravel-precognition',
            'laravel-precognition-react',
            'laravel-precognition-react-inertia',
        ],
    },
});
