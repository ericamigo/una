<script setup>
import { onMounted, useTemplateRef } from 'vue'

const model = defineModel({
    type: String,
    required: true,
})

const input = useTemplateRef('input')

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus()
    }
})

defineExpose({ focus: () => input.value.focus() })
</script>

<template>
    <textarea
        ref="input"
        v-model="model"
        class="flex cursor-pointer rounded-lg border-zinc-200 py-[7px] shadow-xs outline-hidden duration-150 placeholder:text-zinc-300 focus:cursor-auto focus:border-teal-500 focus:ring-teal-500"
    ></textarea>
</template>
