import createStore from './template'
import state from './states/game'

const validSections = ['hud', 'menu']

export const useGameStore = createStore('gameStore', {
    useUnreal: true,
    state,
    actions: {
        setGameNewGame (val) {
            this.newGame = val
            this.currentSection = val ? 'hud' : 'menu'
        },
        dropItem (id) {
            const inv = this.$state.playerInventory
            const idx = inv.findIndex(v => v.id === id)
            const item = inv[idx]

            if (['clothing', 'weapon'].includes(item.type)) {
                this.equipItem(id, false)
            }
            
            if (item.quantity > 1) {
                --item.quantity
            } else {
                inv.splice(idx, 1)
            }

            this.ue5('setDroppedItem', item)
        },
        equipItem (id, inUse) {
            const inv = this.$state.playerInventory
            const idx = inv.findIndex(v => v.id === id)
            const item = inv[idx]
            item.inUse = inUse
            this.$state.playerInventory[idx] = item
            this.ue5('setEquippedItem', item)
        },
        consumeItem (id) {
            const inv = this.$state.playerInventory
            const idx = inv.findIndex(v => v.id === id)
            const item = inv[idx]
            
            if (item.quantity > 1) {
                --item.quantity
            } else {
                inv.splice(idx, 1)
            }
            
            this.$state.playerInventory = inv
            this.ue5('setConsumedItem', item)
        }
    }
})