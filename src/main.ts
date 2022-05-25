import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPrismic } from '@prismicio/vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(createPrismic({
    endpoint: 'warehouse-test-site',
}))
app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    use: [apiPlugin],
});

app.mount('#app')
