<template>
    <phone-app appname="inventory">
        <template #app-icon>
            <div class="icon"><div class="fa fa-archive"></div></div>
        </template>
        <template #app-main>
            <div class="phone-app-inventory">
                <h1>Inventory</h1>
                <div class="inventory-filter">
                    <span class="left" @click="move(-1)">&#9664;</span>
                    {{filterName}}
                    <span class="right" @click="move(1)">&#9654;</span>
                </div>
                <div class="inventory-container">
                    <accordion v-for="item in updatedInventory" :key="item.id">
                        <template #accordion-head>
                            <h3>
                                <span :class="getItemIcon(item.type, item.inUse)"></span>
                                {{item.name}} ({{item.quantity}} | {{fmt.format(item.value)}} | {{getTotals(item.quantity, item.value)}})
                            </h3>
                        </template>
                        <template #accordion-body>
                            <div class="description" v-html="item.description" />
                            <div class="stats"></div>
                            <div class="buttons">
                                <button class="drop" @click="dropItem(item.id)">Drop</button>
                                <button v-if="canEquip(item)" class="equip" @click="equipItem(item.id, true)">Equip</button>
                                <button v-if="canUnequip(item)" class="equip" @click="equipItem(item.id, false)">Unequip</button>
                                <button v-if="canConsume(item.type)" class="consume" @click="consumeItem(item.id)">Consume</button>
                            </div>
                        </template>
                    </accordion>
                </div>
            </div>
        </template>
    </phone-app>
</template>
<script setup>
import { useGameStore } from '~/stores/game'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const store = useGameStore()
const {playerInventory} = storeToRefs(store)
const {equipItem, dropItem, consumeItem} = store
const catFilter = ref('')
const catIndex = ref(0)
const fmt = Intl.NumberFormat('en', {
    notation: 'compact',
    style: 'currency',
    currency: 'USD'
})

const filters = {
    '': 'All',
    weapon: 'Weapons',
    clothing: 'Clothing',
    consumable: 'Consumables',
    misc: 'Misc'
}
const keys = Object.keys(filters)
const maxFilters = keys.length - 1
const filterName = computed(() => (filters[catFilter.value]))
const updatedInventory = computed(() => playerInventory.value.filter(v => ['', v.type].includes(catFilter.value)))
const move = next => {
    catIndex.value += next
    
    if (catIndex.value < 0) {
        catIndex.value = maxFilters
    } else if (catIndex.value > maxFilters) {
        catIndex.value = 0
    }
    catFilter.value = keys[catIndex.value]
}
const getItemIcon = (type, inUse) => ({
    fa: true,
    'fa-shirt': type === 'clothing',
    'fa-person-rifle': type === 'weapon',
    'fa-burger': type === 'consumable',
    'fa-toolbox': type === 'misc',
    'in-use': inUse
})
const getTotals = (qty, val) => fmt.format(~~qty * ~~val)
const canEquip = ({type, inUse}) => ['clothing', 'weapon'].includes(type) && !inUse
const canUnequip = ({type, inUse}) => ['clothing', 'weapon'].includes(type) && inUse
const canConsume = type => ['consumable'].includes(type)

</script>
<style lang="scss" scoped>
.icon {
    width: 100%;
    height: 100%;
    position: absolute;
    line-height: calc(2em + 3px);
    font-size: 1.5em;
    color: #fff;
    background-image: linear-gradient(to top, #121f1f 0%, #d400ff 100%);
    text-shadow: -2px -2px rgba(0,0,0,0.7);
    .fa {
        margin: 0;
    }
}

h1 {
    background: #ff6f00;
    color: #d0e4eb;
    margin: 0;
    padding: 0.5em 1em;
}

.inventory-filter {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 3vmin;
    margin: 0.5em 0;

    .left {
        position: absolute;
        left: 1em;
    }
    .right {
        position: absolute;
        right: 1em;
    }
}
.inventory-container {
    --accordion-head-padding: 0.75em 1em;
    font-size: 2vmin;
}
h3 {
    margin: 0;
}
.fa {
    margin-right: 0.25em;
    &.in-use {
        color: #ff6f00;
    }
}

.description {
    margin: 1.25em;
    font-size: 1.5vmin;
}

.buttons {
    --accordion-head-padding: 0;
    padding: 0 1em;
    margin: 0 0 0.5em 0;
}

button {
    margin: 0;
    margin-right: 0.5em;
    font-size: 1.75vmin;
    padding: 0.5em 1em;
    background: #ff6f00;
    color: #e4e5ff;
    border: 1px solid #e4e5ff;
    border-radius: 10px;
}
</style>