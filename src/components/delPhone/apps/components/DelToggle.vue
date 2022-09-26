<template>
    <div :class="{'del-toggle': true, enabled}">
        <input type="range" min="0" max="1" :value="v" class="slider" @click.prevent="updateRef"/>
    </div>
</template>
<script setup>
    import {ref, computed} from 'vue'
    const emit = defineEmits(['toggle-updated'])
    const { defaultValue } = defineProps({ 
        defaultValue: {
            type: Boolean,
            default: false
        }
    })
    const v = ref(defaultValue ? 1 : 0)
    const updateRef = () => {
        v.value = !!v.value ? 0 : 1
        emit('toggle-updated', !!v.value)
    }
    const enabled = computed(() => !!v.value)
</script>
<style lang="scss" scoped>
.del-toggle {
    position: relative;
    filter: blur(0.009em);
    &.enabled {
        .slider {
            &::-webkit-slider-thumb {
                transform: translate3d(1em, 0, 0);
                background: radial-gradient(circle at 50% 100%, #87c804 0%, #72aa00 60%, #8eb92a 61%, #f4fdc2 100%);
            }
        }
    }
}
.slider {
    appearance: none;
    outline: none;
    overflow: hidden;
    position: absolute;
    font-size: 1em;
    width: 2em;
    height: 1em;
    border-radius: 1em;
    margin: 0;
    background: #b5c6d0;
    border: 0.25vh solid #b5c6d0;
    box-shadow: inset 0em 0.1em 0.5em #13384e;
    
    &::-webkit-slider-thumb {
        appearance: none;
        position: absolute;
        width: 1em;
        height: 1em;
        left: 0;
        top: 0;
        transform: translate3d(0, 0, 0);
        background: radial-gradient(circle at 50% 100%, #c23444 0%, #ba2737 60%, #d24b5a 61%, #efc5ca 100%);
        border-radius: 100px;
        border: 0.25vh solid #13384e;
        cursor: pointer;
        transition: transform 0.5s;
        font-size: 1em;
        box-shadow: 0em 0.1em 0.2em #13384e;
    }
}
</style>