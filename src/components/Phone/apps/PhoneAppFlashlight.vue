<template>
    <phone-app appname="flashlight">
        <template #app-icon>
            <div class="icon"><div class="fa fa-lightbulb"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-flashlight" :class="{enabled}">
                <h1>Flashlight</h1>
                <phone-toggle :default-value="enabled" class="toggle" @toggle-updated="updateRef" />
            </div>
        </template>
    </phone-app>
</template>
<script setup>
import { usePhoneFlashlightStore} from '~/stores/phone/flashlight'
import { storeToRefs } from 'pinia'

const store = usePhoneFlashlightStore()
const {enabled} = storeToRefs(store)

const updateRef = (v) => {
    store.setPhoneFlashlightEnabled(v)
}

</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 3px);
        font-size: 1.5em;
        color: #fff;
        background-image: radial-gradient(circle, rgb(254, 244, 155) 0%, rgb(133, 8, 8) 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);
    }
    h1 {
        width: 100%;
        text-align: center;
        background: #4242e0;
        margin: 0;
        padding: 1vh 0;
        color: #fff;
        flex: 1 0 100%;
    }

    .phone-app-flashlight {
        position: relative;
        height: 100%;
        background: #000;
        transition: background-color 0.5s;

        &.enabled {
            background: #fff;
        }
    }
    .toggle {
        left: 8.5vw;
        top: 55vh;
        font-size: 5vw;
    }
</style>