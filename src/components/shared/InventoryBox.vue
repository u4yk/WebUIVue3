<template>
    <div class="inventory-box">
        <div v-if="label.length > 0" class="inventory-box-owner">{{label}}</div>
        <accordion v-for="item in items" :key="item.id">
            <template #accordion-head>
                <h3><span class="quantity">{{item.quantity}}</span> {{item.name}}</h3>
                <h4>${{item.value * ~~item.quantity}} (${{item.value}}/item)</h4>
            </template>
            <template #accordion-body>
                <div class="type" :class="item.type">{{item.type}}</div>
                <div class="description" v-html="item.description" />
                    <button v-if="canUse" @click="useItem(item.id)">{{item.useMessage}}</button>
            </template>
        </accordion>
    </div>
</template>
<script setup>
const {label, items, canUse} = defineProps({
    label: {
        type: String,
        default: ''
    },
    items: {
        type: Array,
        required: true
    },
    canUse: {
        type: Boolean,
        default: false
    }
})
const removeItem = id => {
    emit('item-removed', id)
}
const useItem = id => {
    emit('item-use', id)
}
const emit = defineEmits(['item-removed', 'item-use'])
</script>
