import createStore from '../template'
import state from '../states/video'

const excludes = ['screenResolution', 'screenResolutionList']
export const useVideoStore = createStore('videoStore', {
    useUnreal: true,
    state,
    getters: {
        refList () {
            return Object.
                entries(this.$state).
                filter(v => !excludes.includes(v[0])).
                map(item => ({key: item[0], value: item[1]}))
        }
    }
})