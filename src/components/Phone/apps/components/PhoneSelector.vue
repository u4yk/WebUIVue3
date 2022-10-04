<template>
    <ul class="selectors">
        <li
            v-for="item in selectionList"
            @click="clickList(item)"
            :key="item"
            :class="{selected: item.split(' ')[0].toLowerCase() === selected}"
        >{{item}}</li>
    </ul>
</template>
<script setup>
const {selectionList, selected} = defineProps({
    selectionList: {
        type: Array,
        required: true
    },
    selected: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['item-selected'])
const clickList = item => {
    emit('item-selected', item)
}
</script>
<style lang="scss" scoped>
ul {
    height: 3vw;
    display: flex;
    position: absolute;
    flex: 1 1 100%;
    bottom: 0;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    background: #230b99;
    color: #fff;
    padding: 0;
    border: 0;
}
li {
    filter: none;
    flex: 1 1 50%;
    height: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    border-radius: 0;
    line-height: calc(3vw - 10px);
    border-top: 10px solid transparent;
    box-sizing: border-box;

    &:hover {
        filter: none;
        animation: none;
    }
    &.selected {
        border-top: 10px solid rgb(225, 56, 0);
    }
}
</style>

