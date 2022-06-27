<script setup>
import {useVideoStore} from '~/stores/menu/video'
import { useMenuStore } from '~/stores/menu';
import { storeToRefs } from 'pinia';
import { capitalize } from '~/plugins/pinia/unreal';

const {currentClickedItem} = storeToRefs(useMenuStore())
const video = useVideoStore()
const updateRef = (e, k) => { 
    video[`setVideo${capitalize(k)}`](~~e.target.value)
}

</script>
<template>
    <div class="video-settings">
        <div class="config-item" v-for="v in video.refList" :key="v.key" @click.stop="currentClickedItem = `video_${v.key}`">
            <span>{{v.key}}</span>
            <span>
                {{v.value}}
                <input 
                    v-if="currentClickedItem === `video_${v.key}`"
                    :value="v.value"
                    @change.stop="updateRef($event, v.key)"
                    :name="`video_${v.key}`"
                    type="range"
                    min="0"
                    max="6"
                    step="1"/>
            </span>
        </div>
    </div>
</template>
<style scoped src="./configitems.css"></style>