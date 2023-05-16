<template>
    <phone-app appname="crafting">
        <template #app-icon>
            <div class="icon"><div class="fas fa-tools"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-crafting"></div>
        </template>
    </phone-app>
</template>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 4px);
        font-size: 1.5em;
        color: #fff;
        background-image: linear-gradient(to bottom, #cb30d0 0%, #67080d 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .div::before {
            color: #fffffe;
        }
    }
</style>