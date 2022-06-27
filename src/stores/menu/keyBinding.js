import createStore from '../template'
import state from '../states/keyBinding'

export const useKeyBindingStore = createStore('keyBindingStore', {
    useUnreal: true,
    state
})