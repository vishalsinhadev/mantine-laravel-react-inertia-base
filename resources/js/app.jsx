import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'


createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx')),

    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    //     return pages[`./Pages/${name}.jsx`]
    // },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
        // hydrateRoot(el, <App {...props} />)
    },
})