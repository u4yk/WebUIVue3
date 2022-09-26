<template>
    <div class="contact" @click.stop="showMenu(true)">
        <div class="contact-avatar" :style="getAvatar(contact.avatar)" />
        <div class="contact-name">{{contact.name}}</div>
        <div :class="{'contact-menu': true, 'is-visible': isVisible}" >
            <slot name="contact-menu" />
        </div>
        <div class="contact-menu-underlay" v-show="isVisible" @click.stop="showMenu(false)"></div>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    const {contact} = defineProps({
        contact: {
            type: Object,
            default: {}
        }
    })
    const getAvatar = img => `background-image: url(${img})`
    const isVisible = ref(false)
    const showMenu = val => {
        isVisible.value = val 
    }
</script>
<style lang="scss" scoped>
.contact {
    display: grid;
    grid-template-areas: "a b"
        "a c";
    grid-template-columns: 4em auto;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 0;
    position: relative;
    padding: 0.25em 0.5em;
}
.contact-avatar {
    height: 4em;
    width: 4em;
    background: #005700;
    grid-area: a;
    border-radius: 1000px;
}
.contact-name {
    margin-left: 2rem;
    font-size: 1.25em;
    line-height: 1.75em;
    font-weight: 900;
    grid-area: b;
}
.contact-timestamp {
    margin-left: 1rem;
    font-size: 0.75em;
    line-height: 0.125em;
    font-weight: 500;
    grid-area: c;
}
.contact-menu {
    position: absolute;
    z-index: 100;
    min-height: 0;
    height: 0;
    width: 15vw;
    left: 1.5vw;
    top: 1.5vh;
    background: #ffe5a5;
    border: 0 none;
    border-radius: 15px;
    opacity: 0;
    transition: min-height 0.5s, border 0.5s, opacity 0.5s;
    
    &.is-visible {
        opacity: 1;
        min-height: 25vh;
        border: 1px solid #000;
    }
}
.contact-menu-underlay {
    position: absolute;
    width: 1000vw;
    height: 1000vh;
    z-index: 99;
    top: -500vh;
    left: -500vw;
}
</style>