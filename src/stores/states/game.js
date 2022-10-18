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
    playerInventory: [],
    otherInventory: {
        name: '',
        items: []
    },
    stats: {},
    quests: [],
    quit: false,
})