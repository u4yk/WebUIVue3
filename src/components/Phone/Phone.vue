<script setup>
import {usePhoneStore} from '~/stores/phone'
import {storeToRefs} from 'pinia';

const store = usePhoneStore()
const {appList} = storeToRefs(store)

const goHome = () => {
    store.updatePhoneCurrentApp('')
}
</script>
<template>
    <div class="phone">
        <div class="phone-parent">
            <div class="phone-underlay"></div>
            <div class="phone-logo-wrapper">
                <div class="phone-logo"></div>
            </div>
            <div class="phone-container">
                <component v-for="(item, i) in appList" :is="item.appname" :name="item.appname" :key="i" />
            </div>
            <button class="phone-button" @click="goHome"></button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.phone {
    position: fixed;
    width: 35vw;
    height: 90vh;
    top: 5vh;
    right: 5vw;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
}
.phone-parent {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgb(49, 48, 48);
}

.phone-underlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(199deg, rgba(0,0,0,1) 0%, rgb(90, 90, 90) 27%, rgba(24,24,24,1) 29%, rgb(77, 77, 77) 100%);
    opacity: 1;
    box-shadow: inset 5px -5px 10px 6px #000000;
    border-radius: 25px;
}

.phone-button {
    width: 15vw;
    height: 4vh;
    z-index: 3;
    position: absolute;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px;
    background: #858585;
    outline: none;
    box-shadow: inset -5px -5px 16px 1px black;
    border: 1px solid #858585;

    &:active {
        box-shadow: inset 1px 2px 9px 5px black;
    }
}

.phone-container {
    padding: 4.5vh 5% 0.5vh;
    width: 70%;
    height: 72vh;
    float: left;
    margin: 5vh 10%;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #000;
    box-shadow: inset 2px 2px 5px #000;
    z-index: 10;
    position: relative;
    background-image: linear-gradient( 135deg, #F97794 10%, #623AA2 100%);
    display: grid;
    grid-template-rows: repeat( auto-fill, minmax(5em, 1fr) );
    grid-template-columns: repeat( auto-fit, minmax(4em, 1fr) );
    gap: 2em 1.5em;
    user-select: none;
}
</style>