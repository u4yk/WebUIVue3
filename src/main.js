import { createApp } from 'vue'
import App from './App.vue'
import ComponentMount from '~/plugins/ComponentMount'
import {createPinia} from 'pinia'
import UnrealPinia from '~/plugins/pinia'

createApp(App).use(ComponentMount).use(createPinia().use(UnrealPinia)).mount('#app')
