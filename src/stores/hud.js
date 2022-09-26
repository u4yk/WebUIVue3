import createStore from './template'
import state from './states/hud'

export const useHudStore = createStore('hudStore', {
    useUnreal: true,
    state,
    actions: {
        replaceHudDialogue (id) {
            const dlg = JSON.parse(JSON.stringify(this.dialogue))
            const last = dlg[dlg.length - 1]
            const response = last.request.responses.find(v => v.id === id)

            if (response) {
                last.response = response
            }
            this.setHudDialogue(response.next)
            this.dialogue = dlg
        },
        updateHudDialogue (res) {
            if (res.reset) {
                this.dialogue = [res.data]
            } else {
                this.dialogue.push(res.data)
            }
        }
    }
})