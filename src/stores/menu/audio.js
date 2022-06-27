import createStore from '../template'
import state from '../states/audio'

export const useAudioStore = createStore('audioStore', {
    useUnreal: true,
    state,
    getters: {
        refList () {
            return Object.entries(this.$state).map(item => ({key: item[0], value: item[1]}))
        }
    }
})