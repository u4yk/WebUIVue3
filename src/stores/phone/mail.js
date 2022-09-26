import createStore from '../template'
import state from '../states/phone/mail'

export const usePhoneMailStore = createStore('phoneMailStore', {
    useUnreal: true,
    state
})