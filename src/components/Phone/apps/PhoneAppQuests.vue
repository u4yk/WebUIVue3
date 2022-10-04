<template>
    <phone-app appname="quests">
        <template #app-icon>
            <div class="icon"><div class="fa fa-map-marker-alt"></div></div>
        </template>
        <template #app-main>
            <div class=" phone-app-quests">
                <h1>Quests</h1>
                <accordion
                    v-for="quest in quests"
                    :key="`quest_${quest.id}`"
                    class="quest">
                    <template #accordion-head>
                        <div :class="getStatusIcon(quest.status)" :title="quest.status"/>
                        <h3 class="title" :title="quest.status">{{quest.title}}</h3>
                    </template>
                    <template #accordion-body>
                        <div class="quest-description" v-html="quest.description" />
                        <h4>Tasks</h4>
                        <div class="tasks">
                            <div v-for="task in quest.tasks" :key="`quest_${quest.id}_task_${task.id}`" class="task" :title="task.status">
                                {{task.title}}
                                <span :class="getStatusIcon(task.status)"/>
                            </div>
                        </div>
                        <button 
                            v-if="!['current','fail','complete'].includes(quest.status)"
                            @click="makeCurrentQuest(quest.id)">
                                Make Current Quest
                        </button>
                    </template>
                </accordion>
            </div>
        </template>
    </phone-app>
</template>
<script setup>
import { useGameStore } from '~/stores/game';
import { storeToRefs } from 'pinia';
const gs = useGameStore()
const {quests} = storeToRefs(gs)
const {makeCurrentQuest} = gs
const getStatusIcon = status => ({
    'fa': true,
    'fa-check': status === 'complete',
    'fa-ban': status === 'fail',
    'fa-question': !['complete', 'fail', 'current'].includes(status),
    'fa-plane-up': status === 'current'
})

</script>

<style lang="scss" scoped>
.icon .fa{
    width: 100%;
    height: 100%;
    position: absolute;
    line-height: calc(2em + 4px);
    font-size: 1.5em;
    color: #fff;
    background-image: linear-gradient(-140deg, #0c047a 0%, #ffb45e 70%, rgb(110, 63, 1) 71%, rgb(94, 0, 0) 100%);
    text-shadow: -1px -2px rgba(0,0,0,0.7);
    padding: 0;
    text-align: unset;
    margin: 0;
    left: 0;
    border: none;
}
h1 {
    font-weight: 900;
    font-size: 3vmin;
    margin: 0;
    padding: 1vmin 2vmin;
    background: #0c047a;
    color: #f4fdc2;
}
.fa {
    width: 1em;
    height: 1em;
    padding: 0.3em;
    font-size: 2vmin;
    float: left;
    font-weight: 900;
    border-radius: 10px;
    color: #fff;
    text-shadow: 0 -2px 2px #000;
    text-align: center;
    border: 0.125em solid #8a6a00;
    background-image: linear-gradient(to bottom, #ddceb4 0%,#c7a883 17%,#b18e52 33%,#8a6a00 67%,#574e00 83%,#241c00 100%);
}

.fa-check {
    background: radial-gradient(circle at 50% 100%, #87c804 0%, #72aa00 60%, #8eb92a 61%, #f4fdc2 100%);
    border-color: #87c804;
}
.fa-ban {
    background: radial-gradient(circle at 50% 100%, #c23444 0%, #ba2737 60%, #d24b5a 61%, #efc5ca 100%);
    border-color: #c23444;
}

.title {
    font-weight: 900;
    font-size: 2vmin;
    margin: 0 2.5em;
    line-height: 2em;
}

.tasks {
    font-size: 1vmin;
    padding: 0 3vmin;
    margin-bottom: 2vmin;
}
.task {
    float: left;
    width: 100%;
    margin: 0.3em 0;
    font-size: 1.5vmin;
    font-weight: 400;
    line-height: 2em;
    
    .fa {
        float: left;
        font-size: 1.5vmin;
        margin-right: 0.5em;
    }
}

.quest-description {
    padding: 1.5vmin 3vmin;
    font-size: 1.5vmin;
}

h4 {
    padding: 0 3vmin;
    font-size: 1.5vmin;
    margin: 0;
}

button {
    height: 2em;
    font-size: 2vmin;
    margin: 1em 1.5em;
    border-radius: 10px;
    border: 0.125em solid #72aa00;
    background: linear-gradient(to top, #87c804 0%, #72aa00 60%, #8eb92a 61%, #f4fdc2 100%);
    color: #fff;
    text-shadow: 1px 0px 4px #000;
}
</style>