<script setup>
import { onMounted, ref } from 'vue'

const model = defineModel({
    type: [String, Number],
    required: true,
})

const input = ref(null)

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus()
    }
})

defineExpose({ focus: () => input.value.focus() })
</script>

<template>
    <select
        ref="input"
        v-model="model"
        class="dark:bg-zinc-850 cursor-pointer rounded-lg border-zinc-200 py-[7px] outline-hidden duration-150 focus:cursor-auto focus:border-cyan-600 focus:ring-cyan-600 dark:border-zinc-700 dark:focus:border-cyan-600"
    >
        <slot></slot>
    </select>
</template>
