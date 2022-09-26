<template>
    <del-phone-app appname="factions">
        <template #app-icon>
            <div class="icon"><div class="fa fa-users"></div></div>
        </template>
        <template #app-main>
            <div class="del-phone-app-factions"></div>
        </template>
    </del-phone-app>
</template>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 2em;
        font-size: 1.5em;
        color: #fff;
        background-image: linear-gradient(45deg, #d88200 0%, #052d5a 50%, #800e0e 75%, #1f000a 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);
    }
</style>