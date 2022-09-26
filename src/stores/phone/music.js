import createStore from '../template'
import state from '../states/phone/music'

export const usePhoneMusicStore = createStore('phoneMusicStore', {
    useUnreal: true,
    state
})