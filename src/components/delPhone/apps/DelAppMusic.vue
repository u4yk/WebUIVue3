<template>
    <del-phone-app appname="music">
        <template #app-icon>
            <div class="icon"><div class="fa fa-music"></div></div>
        </template>
        <template #app-main>
            <div class="del-phone-app-music"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-music',
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: calc(2em + 4px);
        font-size: 1.5em;
        color: #fff;
        background-image: linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

    }
</style>