import createStore from './template'
import state from './states/phone'

export const usePhoneStore = createStore('phoneStore', {
    useUnreal: true,
    state,
    getters: {
        appList: state => state.apps.map(v => ({appname: v}))
    },
    actions: {
        updatePhoneApps (val) {
            this.apps = val
        }
    }
})