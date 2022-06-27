import createStore from './template'
import state from './states/game'

const validSections = ['hud', 'menu']

export const useGameStore = createStore('gameStore', {
    useUnreal: true,
    state,
    actions: {
        setGameCurrentSection (val) {},
        setGameNewGame (val) {
            this.newGame = val
            this.currentSection = val ? 'hud' : 'menu'
        }
    }
})