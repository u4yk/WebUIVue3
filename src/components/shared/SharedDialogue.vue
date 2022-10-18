<template>
    <div class="dialogue-container">
        <div class="rs" v-for="history in dialogue" :key="history?.request?.id">
            <div class="request">{{history?.request?.text}}</div>
            <div 
                class="response-list animated" 
                v-if="!history?.response && history?.request?.responses.length">
                <div
                    class="response"
                    ref="response"
                    v-for="response in history.request.responses"
                    :key="response.id"
                    @click="clicked(response.id, response.next)">{{response.text}}</div>
            </div>
            <div class="response" v-else-if="history?.response">{{history?.response?.text}}</div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['responseSelected'])
const { dialogue, animatedResponse } = defineProps({
  dialogue: {
    type: Array,
    default: () => []
  },
  animatedResponse: {
    type: Boolean,
    default: false
  }
})

const clicked = (id, next) => {
    emit('responseSelected', { id, next })
}
</script>
<style scoped>
.dialogue-container {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    width: 90%;
    height: 90%;
    position: relative;
    padding: 5%;
    overflow: hidden;
}
.rs {
    display: block;
    width: 100%;
}
.request {
    display: block;
    float: left;
    text-align: left;
    border-radius: 10px;
    background: var(--dialogue-background);
    padding: 0.25em 1em;
    width: auto;
    max-width: 80%;
    min-width: 50%;
    clear: both;
    margin-bottom: 1em;
    cursor: default;
}
.response-list {
    float: right;
    border-radius: 10px;
    background: var(--dialogue-background);
    padding: 0 1em;
    width: auto;
    max-width: 80%;
    min-width: 50%;
    clear: both;
    text-align: right;
    margin-bottom: 1em;
}
.animated {
    animation: animated-border 1s 0s infinite normal forwards;
}
@keyframes animated-border {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}
@keyframes animated-hover {
    0% {
        filter: invert(0);
    }
    100% {
        filter: invert(100%);
    }
}
.response {
    float: right;
    text-align: right;
    border-radius: 10px;
    background: var(--dialogue-background);
    padding: 0.25em 1em;
    width: auto;
    max-width: 80%;
    min-width: 50%;
    clear: both;
    margin-bottom: 1em;
    cursor: default;
}

.response-list .response {
    cursor: pointer;
    margin: 0;
    border-radius: 0;
    padding: 0.5em 0;
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid rgb(69, 58, 58);
    background: transparent;
    margin-bottom: 0;
}

.response-list .response:hover {
    animation: animated-hover 0.5s linear 0s infinite normal forwards;
}
.response-list .response:last-child {
    border-bottom: 0;
}

</style>
