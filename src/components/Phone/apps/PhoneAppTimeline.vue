<template>
    <phone-app appname="timeline">
        <template #app-icon>
            <div class="icon"><div class="fa fa-stream"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-timeline"></div>
        </template>
    </phone-app>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 8px);
        padding-left: 3px;
        font-size: 1.5em;
        color: rgb(255, 255, 255);
        background-image: linear-gradient(to bottom, #d2dfed 0%,#c8d7eb 26%,#bed0ea 51%,#a6c0e3 51%,#afc7e8 62%,#bad0ef 75%,#99b5db 88%,#799bc8 100%); 
        text-shadow: -2px -2px rgba(0,0,0,0.7);
    }
</style>