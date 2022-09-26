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
    <div class="del-phone">
        <div class="del-phone-parent">
            <div class="del-phone-underlay"></div>
            <div class="del-phone-wrapper">
                <div class="del-phone-logo"></div>
            </div>
            <div class="del-phone-container">
                <component v-for="(item, i) in appList" :is="item.appname" :name="item.appname" :key="i" />
            </div>
            <button class="del-phone-button" @click="goHome"></button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.del-phone {
    position: fixed;
    width: 35vw;
    height: 90vh;
    top: 5vh;
    right: 5vw;
    border-radius: 20px;
    overflow: hidden;
}
.del-phone-parent {
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
    background: rgb(49, 48, 48);
}

.del-phone-underlay {
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

.del-phone-button {
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

.del-phone-container {
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
    grid-template-rows: repeat( auto-fill, minmax(5vw, 1fr) );
    grid-template-columns: repeat( auto-fit, minmax(3.5vw, 1fr) );
    gap: 1vh 0.25vw;
}
</style>