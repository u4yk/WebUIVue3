<script setup>
import { useKeyBindingStore } from '~/stores/menu/keyBinding'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const ks = useKeyBindingStore()
const refs = storeToRefs(ks)
const refList = computed(() => Object.entries(refs))

</script>
<template>
    <div class="key-bindings">
        <div class="config-item" v-for="[k, v] of refList" :key="k">
            <span>{{k}}</span><span>{{v.value.replace('"', '')}}</span>
        </div>
    </div>
</template>
<style scoped src="./configitems.css"></style>