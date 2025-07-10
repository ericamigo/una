import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp, router } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { useDark } from '@vueuse/core'
import { ZiggyVue } from 'ziggy-js'
import Toast, { useToast } from 'vue-toastification'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(Toast, {
                position: 'bottom-right',
                timeout: 5000,
                maxToasts: 5,
                hideProgressBar: false,
                transition: 'Vue-Toastification__fade',
            })
            .mount(el)
    },
    progress: {
        color: '#0092b8',
        delay: 5,
    },
})

useDark()

router.on('success', (event) => {
    const toast = useToast()

    if (event.detail.page.props.flash.success) {
        toast.success(event.detail.page.props.flash.success, {
            icon: 'ri-checkbox-circle-fill',
        })
    }

    if (event.detail.page.props.flash.error) {
        toast.error(event.detail.page.props.flash.error, {
            icon: 'ri-error-warning-fill',
            timeout: false,
        })
    }
})
