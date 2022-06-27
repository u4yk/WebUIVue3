import createStore from './template'
import state from './states/menu'

export const useMenuStore = createStore('menuStore', {
    state
})