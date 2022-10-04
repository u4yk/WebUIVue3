<script setup>      </script>
<template>
    <phone-app appname="health">
        <template #app-icon>
            <div class="icon"><div class="fa fa-briefcase-medical"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-health">
                <h1 class="head">Health Check</h1>
                <div class="content">
                    <h2 class="subhead">Health</h2>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-first-aid"></div></span>
                        <span class="left">Health</span>
                        <span class="right">{{health}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-laptop-medical"></div></span>
                        <span class="left">Health Max</span>
                        <span class="right">{{healthMax}}</span>
                    </div>
                    <h2 class="subhead">LASERS</h2>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-bible"></div></span>
                        <span class="left">Luck</span>
                        <span class="right">{{luck}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-camera"></div></span>
                        <span class="left">Allure</span>
                        <span class="right">{{allure}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-running"></div></span>
                        <span class="left">Speed</span>
                        <span class="right">{{speed}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-heartbeat"></div></span>
                        <span class="left">Endurance</span>
                        <span class="right">{{endurance}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-brain"></div></span>
                        <span class="left">Reason</span>
                        <span class="right">{{reason}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><div class="fa fa-fist-raised"></div></span>
                        <span class="left">Strength</span>
                        <span class="right">{{strength}}</span>
                    </div>
                </div>
            </div>
        </template>
    </phone-app>
</template>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 44px;
        color: #fff;
        background-image: linear-gradient(30deg, #1394df 0%, #20394e 50%, #0c161b 51%, #b0d9fa 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);
    }
    .phone-app-health {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    h1 {
        color: #fff;
        background: #ff0000;
        margin: 0;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        padding: 1em;
    }
    .content {
        height: calc(100% - 3em);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .health-item, h2 {
        width: 100%;
        float: left;
        padding: 0.25em 1em;
    }
    .inline-icon {
        float: left;
        .div {
            color: #0183ce;
            font-size: 1.25em !important;
            line-height: 1.25em !important;
        }
    }
    .left {
        float: left;
        padding-left: 1em;
        font-size: 1.25rem;
        color: #012438;
    }
    .right {
        float: right;
        font-size: 1.25rem;
        color: #012438;
    }
</style>