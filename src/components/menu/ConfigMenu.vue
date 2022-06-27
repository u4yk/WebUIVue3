<script setup>
import {useMenuStore} from '~/stores/menu'
import { storeToRefs } from 'pinia';

const {currentSubMenu} = storeToRefs(useMenuStore())
</script>
<template>
    <div class="config-menu">
        <ul>
            <li @click="currentSubMenu = 'audio'">Audio</li>
            <li @click="currentSubMenu = 'video'">Video</li>            
            <li @click="currentSubMenu = 'key-binding'">Key Bindings</li>
            <li @click="currentSubMenu = ''">Back to Main</li>
        </ul>
    </div>
</template>
<style scoped src="./rightmenu.css"></style>