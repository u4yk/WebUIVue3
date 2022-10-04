<script setup>
import {usePhoneStore} from '~/stores/phone'
import {storeToRefs} from 'pinia';
import {capitalize} from '~/plugins/pinia/unreal'
import {computed} from '@vue/reactivity';
const uc = name => capitalize(name).replace(/\-/g, ' ')
const {appname} = defineProps({
    appname: {
        type: String,
        required: true
    }
})
const store = usePhoneStore()
const {currentApp} = storeToRefs(store)
const isActiveApp = computed( () => currentApp.value === appname)
const isHome = computed( () => currentApp.value === '')
const clickIcon = () => {
  currentApp.value = appname
}
</script>
<template>
    <div class="phone-app" :class="{'active-state': isActiveApp}">
        <div class="phone-app-icon" @click="clickIcon" v-show="isHome">
            <div class="phone-app-icon-icon"><slot name="app-icon"></slot></div>
            <div class="phone-app-icon-label">{{uc(appname)}}</div>
        </div>
        <div class="phone-app-main" v-show="isActiveApp">
            <slot name="app-main"></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.phone-app {
    display: flex;
    flex: 1 1 100%;
    justify-content: space-around;

    &.active-state {
        display: flex;
        flex: 1 1 100%;
    }
}
.phone-app-icon { 
    position: absolute;
    width: 4vw;
    height: 4vw;
    margin: 0;
    cursor: pointer;
}
.phone-app-icon-icon {
    width: 3vw;
    height: 3vw;
    background: #fff;
    border-radius: 10px;
    position: relative;
    top: 0;
    left: calc(0.5vw - 4px);
    overflow: hidden;
    border: 2px solid #fff;
    box-shadow: 3px 2px 1px 1px rgba(0,0,0,1);
    text-align: center;
    font-size: 1vw;
    .div {
        position: relative;
        
        &::before {
            font-size: 1vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 100%;
            width: 100%;
        }
    }
}
.phone-app-icon-label {
    width: 100%;
    position: absolute;
    height: 1.25vw;
    bottom: auto;
    left: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    color: #fff;
    margin-top: 0.5vh;
    font-size: 0.7vw;
    padding-bottom: 2vh;
}

.phone-app-main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    border-radius: 15px;
}
</style>