<template>
    <div class="hud">
        <hud-compass class="hud-compass" :max-units="256" :y-offset="2" :edge-epsilon="4" v-show="displayState === 'main'"/>
        <health-bar class="health-bar" :epsilon="0.1" v-show="displayState === 'main'"/>
        <hud-dialogue v-show="displayState === 'dialogue'"/>
        <phone v-show="displayState === 'phone'" />
    </div>
</template>
<script setup>
import { useHudStore } from '~/stores/hud';
import { storeToRefs } from 'pinia';
const hud = useHudStore()
const {displayState} = storeToRefs(hud)
</script>
<style scoped>
.hud-compass {
    position: fixed;
    width: 65vw;
    height: 10vh;
    top: 5vh;
    left: 17.5vw;
    font-size: 10vw;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 15px;
}
.health-bar {
    position: fixed;
    width: 80vw;
    height: 10vh;
    bottom: 5vh;
    left: 10vw;
}
</style>