<script setup>
    import { useHudStore } from '~/stores/hud'
    import { storeToRefs } from 'pinia'
    import { computed } from 'vue'

    const { rotation } = storeToRefs(useHudStore())
    const styles = computed(() => `transform: rotate(${(rotation.value + 135)}deg);`)
</script>

<template>
    <phone-app appname="maps">
        <template #app-icon><div class="icon"><div class="fa fa-globe"></div></div></template>
        <template #app-main>
            <div class="phone-app-maps">
                <div class="del-phone-map-main"></div>
                <div class="fa fa-location-arrow" :style="styles"></div>
            </div>
        </template>
    </phone-app>
</template>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 2px);
        font-size: 1.5em;
        color: #fff;
        background-image: linear-gradient(45deg, #222d3f 0%, #237ff8 100%);
        text-shadow: -1px -2px 2px #000;
    }
    .del-phone-map-main {
        position: absolute;
        transform: translate(0,0);
    }
    .phone-app-maps {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .fa-location-arrow {
            position: absolute;
            transform: rotate(0);
            top: calc(50% - 1rem);
            left: calc(50% - 1rem);
            height: 1rem;
            width: 1rem;
        }
    }
</style>