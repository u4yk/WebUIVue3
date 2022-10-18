<template>
  <div class="compass">
    <ul :style="ulStyles" ref="root">
        <li :style="liStyle(0)">N</li>
        <li v-for="i in quadMax" :key="`north_${i}`" :style="liStyle(i)">|</li>
        <li :style="liStyle(quad)">E</li>
        <li v-for="i in quadMax" :key="`east_${i}`" :style="liStyle(quad+i)">|</li>
        <li :style="liStyle(2*quad)">S</li>
        <li v-for="i in quadMax" :key="`south_${i}`" :style="liStyle(2*quad+i)">|</li>
        <li :style="liStyle(3*quad)">W</li>
        <li v-for="i in quadMax" :key="`west_${i}`" :style="liStyle(3*quad+i)">|</li>
    </ul>
  </div>
</template>
<script setup>
import { useHudStore } from '~/stores/hud'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const {maxUnits, yOffset, edgeEpsilon } = defineProps({
  maxUnits: {
    type: Number,
    default: 32
  },
  yOffset: {
    type: Number,
    default: 1
  },
  edgeEpsilon: {
    type: Number,
    default: 0
  }
})

const { rotation } = storeToRefs(useHudStore())
const quad = maxUnits / 4
const quadMax = quad - 1
const ulStyles = computed(() => `transform: rotateX(-90deg) rotate(${-(rotation.value - 90)}deg);`)
const offset = 360 / maxUnits
const halfPoint = quad / 2
const qtPoint = quad / 4
const qt3Point = halfPoint + qtPoint

const liStyle = (i) => {
  let em = 1.25
  const mod = i % quad
  let extra = ''
  if (mod === 0) {
    em = 2.5
    extra = ' font-weight: 400; color: var(--compass-red);'
  } else if (halfPoint === mod) {
    em = 2.75
    extra = ' font-weight: 300; color: var(--compass-blue);'
  }else if ([qtPoint, qt3Point].includes(mod)) {
    em = 2.25
    extra = ' font-weight: 300;'
  } else if (mod < edgeEpsilon || mod > quad - edgeEpsilon) {
    extra = ' display: none;'
  }

  const y = quadMax * yOffset
  const rot = i * offset
  return `font-size: ${em}em; transform: translate3d(-50%, -50%, 0) rotate(${rot}deg) translateY(-${y}vw) rotateX(90deg);${extra}`
}
</script>
<style lang="scss" scoped>
@use "sass:math";
@function strip-units($number) {
  @return math.div($number, ($number * 0 + 1));
}

ul {
  zoom: 0.25;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(-90deg) rotate(45deg);
  position: relative;
}

li {
  --compass-red: rgb(112, 17, 0);
  --compass-blue: rgb(4, 8, 130);
  position: absolute;
  top: 50%;
  left: 50%;
  backface-visibility: hidden;
  font-weight: 600;
  color: rgb(0, 0, 0);
  // filter: blur(0.6vw);
  &:hover {
    animation: none;
  }

}
.quadrant {
  font-size: 1em;
}
</style>