<template>
    <phone-app appname="call">
        <template #app-icon>
            <div class="icon"><div class="fa fa-phone"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-phone">
                <div class="address-book" v-show="appState === 'address'">
                    <div v-if="addressBook.length === 0" class="empty-message">
                        <h3>There are no entries in your address book. It must be embarrassing that you have no friends.</h3>
                    </div>
                    <phone-contact
                        v-else
                        v-for="(contact, i) in addressBook"
                        :key="`contact_${i}`"
                        :contact="contact"
                    />
                </div>
                <div class="recent" v-show="appState === 'recent'">
                    <div v-if="recentCalls.length === 0" class="empty-message">
                        <h3>No one has called you yet. Try making yourself more popular so people will want to talk to you.</h3>
                    </div>
                    <phone-contact
                        v-else
                        v-for="(contact, i) in recentCalls"
                        :key="`contact_${i}`"
                        :contact="contact"
                    />
                </div>
                <div class="current-call"  v-show="appState === 'current'" :class="{'is-ringing': isRinging}">
                    <div class="caller-avatar-container">
                        <div class="caller-avatar" :style="getAvatar(currentCaller?.avatar)" />
                    </div>
                    <div class="caller-name">{{currentCaller?.name}}</div>
                    <div class="caller-options" :class="{ringing: isRinging}">
                        <div class="ring fa fa-volume-control-phone" @click="answer"/>
                        <div class="hangup fa fa-phone-slash" @click="hangup" />
                    </div>
                </div>
                <phone-selector
                    :selection-list="selectionList"
                    :selected="currentSelected"
                    @item-selected="selected"
                />
            </div>
        </template>
    </phone-app>
</template>
<script setup>
    import {usePhoneCallStore} from '~/stores/phone/phoneCall'
    import {storeToRefs} from 'pinia'
    import { computed } from 'vue'
    const store = usePhoneCallStore()
    const { appState, currentCaller, recentCalls, addressBook, isRinging } = storeToRefs(store)
    const getAvatar = img => `background-image: url(${img})`
    const currentSelected = computed(() => appState.value)
    const selected = state => {
        appState.value = state.split(' ')[0].toLowerCase()
    }
    const selectionList = ['Address Book', 'Recent Calls']
    const handleCall = () => {
        isRinging.value = false
    }
    const answer = () => {
        handleCall()
    }
    const hangup = () => {
        handleCall()
        recentCalls.value.push(currentCaller.value)
        appState.value = 'address'
    }
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 4px);
        font-size: 1.5vw;
        color: #fff;
        background-image: linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .div::before {
            color: #fff;
        }
    }
    .empty-message {
        display: flex;
        flex: 1 1 100%;
        align-items: center;
        align-content: space-between;
        justify-self: center;
        padding: 10%;

        h3 {
            display: flex;
            flex: 1 1 100%;
            justify-content: center;
            justify-self: center;
            align-self: center;
        }
    }
    .current-call {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 2vw;
        background: #000;
        z-index: 10;

        &.is-ringing {
            animation: ringing 1s linear 0s infinite forwards alternate;
        }
    }

    @keyframes ringing {
        0% { background-color: #000}
        25% { background-color: rgb(38, 5, 5)}
        50% { background-color: rgb(5, 39, 10)}
        75% { background-color: rgb(13, 10, 56)}
        100% {background-color: rgb(255, 255, 255);}
    }
    .caller-avatar-container {
        width: 6em;
        height: 6em;
        overflow: hidden;
        border: 1px solid #b5c6d0;
        position: relative;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 1000px;
        padding: 0.25em;
        background: #fff;
    }
    .caller-avatar {
        width: 6em;
        height: 6em;
        position: absolute;
        overflow: hidden;
        border: 1px solid #b5c6d0;
        border-radius: 1000px;
        background: #008a00;
    }
    .caller-name {
        font-weight: 300;
        width: 100%;
        text-align: center;
        position: absolute;
        top: calc(50% + 2em);
        color: #b5c6d0;
    }
    .caller-options {
        position: absolute;
        top: calc(50% + 6em);
        width: 100%;
        display: flex;
        flex: 1 1 100%;
        gap: 30%;
        justify-content: center;
        
        &.ringing {
            transform: translate3d(0, 0, 0);
            
            .ring {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }

            .hangup {
                background: radial-gradient(circle at 50% 100%, #c23444 0%, #ba2737 60%, #d24b5a 61%, #efc5ca 100%);
                width: 2em;
                transform: translate3d(0, 0, 0);
            }
        }
        div {
            height: 2em;
            width: 2em;
            font-size: 1.125em;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            border: 0.125em solid #fff;
            transform-origin: center;
            text-shadow: 0px -2px #000;
        }
        .ring {
            background: radial-gradient(circle at 50% 100%, #87c804 0%, #72aa00 60%, #8eb92a 61%, #f4fdc2 100%);
            transition: transform 0.5s, opacity 0.25s;
            transform: translate3d(-150%, 0, 0);
            opacity: 0;
            
        }
        .hangup {
            background: linear-gradient(to top, #c23444 0%, #ba2737 60%, #d24b5a 61%, #efc5ca 100%);
            width: 10em;
            transform: translate3d(-2.75em, 0, 0);
            transition: transform 0.5s, width 0.5s 0.25s ease-out;
        }
    }
    .recent {
        overflow: hidden auto;
        height: 73vh;
    }
    .address-book, .recent {
        display: grid;
        width: 30vw;
        flex: 1 1 30vw;
        align-content: start;
    }
    .contact {
        width: 30vw;
    }
</style>