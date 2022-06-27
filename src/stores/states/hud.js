export default () => ({
    cameraPosition: {
        x: 0,
        y: 0,
        z: 0
    },
    elevatorFloors: -1,
    dialogue: {},
    displayState: 'main',
    inventory: {
        player: [],
        other: []
    },
    isReticleOn: false,
    isReticleFired: false,
    notifications: [],
    reticleColor: [255,255,255,1],
    reticleStyle: 'crosshair',
})