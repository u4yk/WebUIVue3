import createStore from './template'
import state from './states/hud'

export const useHudStore = createStore('hudStore', {
    useUnreal: true,
    state
})