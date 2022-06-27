<script setup>
import {useGameStore} from '~/stores/game'
import { storeToRefs } from 'pinia'

const { currentSection } = storeToRefs(useGameStore())
</script>
<template>
    <div class="game">
        <menu-system v-show="currentSection === 'menu'"></menu-system>
        <hud v-show="currentSection === 'hud'"></hud>
    </div>
</template>
<style>
body {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
}
</style>