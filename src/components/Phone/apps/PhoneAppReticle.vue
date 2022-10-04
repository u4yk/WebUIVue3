<template>
    <phone-app appname="reticle">
        <template #app-icon>
            <div class="icon"><div class="fa fa-bullseye"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-reticle"></div>
        </template>
    </phone-app>
</template>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 3px);
        font-size: 1.5em;
        color: #fff;
        background-image: linear-gradient(45deg, #43ffa1 0%, #ff835e 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);
    }
</style>