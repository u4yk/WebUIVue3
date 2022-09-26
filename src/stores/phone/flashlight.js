import createStore from '../template'
import state from '../states/phone/flashlight'

export const usePhoneFlashlightStore = createStore('phoneFlashlightStore', {
    useUnreal: true,
    state
})