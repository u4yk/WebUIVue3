import { defineStore, acceptHMRUpdate } from "pinia"

const createStore = (name, opts) => {
    const store = defineStore(name, opts)
    if (import.meta.hot) {
        import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot))
    }
    
    return store
}

export default createStore