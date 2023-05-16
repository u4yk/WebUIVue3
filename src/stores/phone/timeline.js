import createStore from '../template'
import state from '../states/phone/timeline'

export const usePhoneTimelineStore = createStore('phoneTimelineStore', {
    useUnreal: true,
    state
})