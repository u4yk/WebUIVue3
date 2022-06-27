<script setup>
import { useGameStore } from '~/stores/game'
import { storeToRefs } from 'pinia'
import { computed, defineProps } from 'vue'

const {epsilon} = defineProps({
    epsilon: {
        type: Number,
        default: 0.1
    }
})

const { health, healthMax } = storeToRefs(useGameStore())
const pct = computed(() => (health.value / healthMax.value))
const styles = computed(() => `transform: scaleX(${pct.value});`)
const classes = computed(() => ({'danger': pct.value < epsilon}))
</script>
<template>
    <div class="health-bar-container">
        <div class="health-bar-inner" :class="classes" :style="styles"></div>
        <div class="health-bar-outer" :class="classes"></div>
    </div>
</template>
<style scoped>
.health-bar-container {
    position: fixed;
    overflow: hidden;
    border-radius: 10px;
}
.health-bar-inner {
    height: 100%;
    position: absolute;
    z-index: 2;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    transform: scale3d(1, 1, 1);
    transform-origin: 0 0;
    transition: transform 0.55s ease-in-out;
}
.danger {
    background: rgba(255, 0, 0, 0.5);
    animation: WillRobinson 0.6s linear 0s infinite normal forwards;
}
.health-bar-outer {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
}


@keyframes WillRobinson {
    0% {
        filter: hue-rotate(0) saturate(0) opacity(0.5);
    }
    50% {
        filter: hue-rotate(180deg) saturate(1) opacity(1);
    }
    100% {
        filter: hue-rotate(360deg) saturate(0) opacity(0.5);
    }
}
</style>