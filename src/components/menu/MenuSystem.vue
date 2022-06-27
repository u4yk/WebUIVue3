<script setup>
import {useMenuStore} from '~/stores/menu'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const menu = useMenuStore()
const {currentSubMenu, currentClickedItem} = storeToRefs(menu)
const isValidSubMenu = computed(() => ['audio', 'video', 'key-binding'].includes(currentSubMenu.value))
const h1 = computed(() => currentSubMenu.value.replace('-', ' '))

</script>
<template>
    <div class="menu-system" @click.stop="currentClickedItem = ''">
        <div :class="{'is-visible': isValidSubMenu}" class="left-menu left-item">
            <h1>{{h1}}</h1>
            <audio-config class='left-item' :class="{'is-visible': currentSubMenu === 'audio'}"></audio-config>
            <key-binding class='left-item' :class="{'is-visible': currentSubMenu === 'key-binding'}"></key-binding>
            <video-settings class='left-item' :class="{'is-visible': currentSubMenu === 'video'}"></video-settings>
        </div>
        <div class="right-menu">
            <main-menu v-show="currentSubMenu === ''"></main-menu>
            <config-menu v-show="currentSubMenu !== ''"></config-menu>
        </div>
    </div>
</template>
<style scoped>
.left-menu {
    position: fixed;
    top: 17vh;
    left: 3vw;
    width: 50vw;
    border-radius: 25px;
    background: rgba(0,0,0,0.5);
    padding: 5vh 3vw;
    color: #fff;
    z-index: 5;
}

.left-menu.left-item {
    height: unset;
}
.right-menu {
    font-size: 48px;
    padding: 2vh 1vw;
    position: fixed;
    top: 20vh;
    right: 3vw;
    background: var(--secondary-color);
    color: var(--primary-color);
    border-radius: 25px;
    z-index: 5;
}

h1 {
    font-size: 4vh;
    text-transform: capitalize;
    margin-top: 0;
    padding: 0 2vw;
}

.left-item {
    opacity: 0;
    transition: opacity 0.5s;
    height: 0;
    filter: blur(5px);
    z-index: 0;
    position: relative;
    
}

.left-item.is-visible {
    opacity: 1;
    height: unset;
    filter: none;
    z-index: 5;
}

video {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 4;
}
</style>