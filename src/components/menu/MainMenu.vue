<script setup>
import {useMenuStore} from '~/stores/menu'
import {useGameStore} from '~/stores/game'
import { storeToRefs } from 'pinia';

const menu = useMenuStore()
const { currentSubMenu} = storeToRefs(menu)
const gameStore = useGameStore()
const { currentSection } = storeToRefs(gameStore)

</script>
<template>
    <div class="main-menu">
        <ul>
            <li @click="gameStore.setGameNewGame(true)">New Game</li>
            <li>Load Game</li>
            <li @click="currentSubMenu = 'config'">Settings</li>
            <li @click="gameStore.setGameQuit(true)">Quit</li>
        </ul>
    </div>
</template>
<style src="./rightmenu.css"></style>