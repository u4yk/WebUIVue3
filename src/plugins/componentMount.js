import componentList from './componentList.json'
import { defineAsyncComponent } from 'vue'

export default function ComponentMount(app){
    componentList.forEach( v => {
        const name = v.split('/').pop().split('.')[0]
        const component = defineAsyncComponent(() => import(/* @vite-ignore */v))
        app.component(name, component)
    })    
}