<template>
    <phone-app appname="mail">
        <template #app-icon>
            <div class="icon"><div class="fa fa-envelope"></div></div>
        </template>
        <template #app-main>
            <div class="del-app-mail">
                <h1>Mail</h1>
                <div class="messages">
                    <accordion
                        v-for="(msg, i) in messages"
                        :key="`message_${i}`"
                        class="message">
                        <template #accordion-head>
                            <h3 class="from">{{msg.from}}</h3>
                            <h4 class="title">{{msg.title}}</h4>
                        </template>
                        <template #accordion-body>
                            <div class="msg-body" v-html="msg.body" />
                        </template>
                    </accordion>
                </div>
            </div>
        </template>
    </phone-app>
</template>
<script setup>
import {usePhoneMailStore} from '~/stores/phone/mail'
import {storeToRefs} from 'pinia'
import { computed, reactive } from 'vue'
const store = usePhoneMailStore()
const {appState, addressBook, messages} = storeToRefs(store)
const selectionList = ['Address Book', 'Messages']
const currentSelected = computed(() => appState.value)
const visibleMsgs = reactive({})
const selected = state => {
    appState.value = state.split(' ')[0].toLowerCase()
}
const toggleMessage = id => {
    visibleMsgs[id] = !visibleMsgs[id]
}
const isBodyVisible = id => visibleMsgs[id]
</script>
<style lang="scss" scoped>
.icon {
    width: 100%;
    height: 100%;
    position: absolute;
    line-height: calc(2em + 4px);
    font-size: 1.5em;
    color: #fff;
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    text-shadow: -2px -2px rgba(0,0,0,0.7);
}
h1 {
    padding: 0.5em 1em;
    margin: 0;
    background: #083e67;
    color: #fff;
    user-select: none;
}
h3 {
    margin-block-start: 0;
    margin-block-end: 0.75em;
    line-height: 0.8em;
    user-select: none;
}
h4 {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 0.8em;
    user-select: none;
}
.messages {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 72vh;
    
    &::-webkit-scrollbar {
        width: 0.25em;
        transform: translateX(-1em);
        &:hover{
            width: 1em;
        }
    }
    
    &::-webkit-scrollbar-track-piece { 
        background: transparent;
        width: 2em;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    // /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 0.5em;
    }

}
.msg-body {
    line-height: 1.25em;;
    padding: 2em 2em;
    color: #000;
    background: #ffffff;
    box-shadow: inset 0 0.5em 2em #083e67;
}
</style>