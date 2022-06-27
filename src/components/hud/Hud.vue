<template>
    <div class="hud">
        <health-bar class="health-bar" :epsilon="0.1"/>
    </div>
</template>
<style scoped>
.hud-compass {
    position: fixed;
    width: 80vw;
    height: 10vh;
    bottom: 20vh;
    left: 10vw;
}
.health-bar {
    position: fixed;
    width: 80vw;
    height: 10vh;
    bottom: 5vh;
    left: 10vw;
}
</style>