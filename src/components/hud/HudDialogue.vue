<script setup>
import { useHudStore } from '~/stores/hud'
import { storeToRefs } from 'pinia'
import { computed } from '@vue/reactivity'

const hud = useHudStore()
const { dialogue } = storeToRefs(hud)
const { replaceHudDialogue, setHudDisplayState } = hud
const currentDlg = computed( () => {
    return dialogue
})

const dialogueResponse = ({id, next}) => {
    replaceHudDialogue(id, next)
}
const close = () => {
    setHudDisplayState('main')
}
</script>
<template>
    <div class="hud-dialogue">
        <shared-dialogue
            class="dialogue-wrapper" 
            :dialogue="dialogue" 
            @response-selected="dialogueResponse"/>
        <button @click="close">End Conversation</button>
    </div>
</template>
<style scoped>
.hud-dialogue {
    position: fixed;
    left: 0;
    bottom: 5vh;
    width: 100vw;
    height: 90vh;
    font-size: 1vw;
    top: 0;
}
.dialogue-wrapper {
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 100%);
}
button {
    background: var(--dialogue-background);
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    bottom: -5%;
    right: 5%;
    font-size: 1vw;
    cursor: pointer;
}
</style>