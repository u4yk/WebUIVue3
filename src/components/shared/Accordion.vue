<template>
    <div class="accordion">
        <div class="accordion-head" @click="toggleMessage">
            <slot name="accordion-head" />
        </div>
        <div class="accordion-body" :class="{visible}"> 
            <slot name="accordion-body" />
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const visible = ref(false)
const toggleMessage = () => {
    visible.value = !visible.value
}
</script>
<style lang="scss" scoped>
.accordion {
    width: 100%;
}
.accordion-head {
    padding: var(--accordion-head-padding, 1.5em 2em 0.75em);
    cursor: default;
    border-bottom: 1px solid #000;
}
.accordion-body {
    max-height: 0;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    border-bottom: 1px solid #000;
    transition: max-height 1s ease-in-out, opacity 1s ease-in-out;
    display: grid;

    &.visible {
        max-height:40vh;
        opacity: 1;
    }
}
</style>