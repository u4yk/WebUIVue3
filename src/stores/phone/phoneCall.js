import createStore from '../template'
import state from '../states/phone/phoneCall'

export const usePhoneCallStore = createStore('phoneCallStore', {
    useUnreal: true,
    state
})