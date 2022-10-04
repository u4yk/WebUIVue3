export default () => ({
    currentSection: 'menu',
    health: 0,
    healthMax: 0,
    isDead: false,
    isPaused: false,
    newGame: false,
    loadGame: false,
    playerLocation: {},
    playerRotation: 0,
    playerInventory: [
        /**
         * {
         * id,
         * name,
         * type,
         * value,
         * quantity,
         * description
         * stats,
         * inUse,
         * }
         */
    ],
    otherInventory: {
        name: '',
        items: []
    },
    stats: {},
    quests: [],
    quit: false,
})