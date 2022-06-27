<script setup>
import {useAudioStore} from '~/stores/menu/audio'
import { useMenuStore } from '~/stores/menu';
import { storeToRefs } from 'pinia'
import { capitalize } from '~/plugins/pinia/unreal';

const audio = useAudioStore()
const {currentClickedItem} = storeToRefs(useMenuStore())

const updateRef = (e, k) => { 
    audio[`setAudio${capitalize(k)}`](~~e.target.value)
}
</script>
<template>
    <div class="audio-config">
        <div class="config-item" v-for="item in audio.refList" :key="item.key" @click.stop="currentClickedItem = `audio_${item.key}`">
            <span>{{item.key}}</span>
            <span>
                {{item.value}}
                <input 
                    v-if="currentClickedItem === `audio_${item.key}`"
                    :value="item.value"
                    @change.stop="updateRef($event, item.key)"
                    :name="`audio_${item.key}`"
                    type="range"
                    min="0"
                    max="100"
                    step="1"/>
            </span>
        </div>
    </div>
</template>
<style scoped src="./configitems.css"></style>