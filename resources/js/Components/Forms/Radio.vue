<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:checked'])

const props = defineProps({
    checked: {
        type: [String, Number, Boolean],
        required: true,
    },
    value: {
        default: null,
    },
})

const proxyChecked = computed({
    get() {
        return props.checked
    },

    set(val) {
        emit('update:checked', val)
    },
})
</script>

<template>
    <input
        type="radio"
        v-model="proxyChecked"
        :value="value"
        class="rounded-full border-zinc-200 text-cyan-600 focus:ring-cyan-600"
    />
</template>
