<script setup>
import { onMounted, ref } from 'vue'

const model = defineModel({
    type: String,
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
    <textarea
        ref="input"
        v-model="model"
        class="flex cursor-pointer rounded-lg border-zinc-200 py-[7px] outline-hidden duration-150 placeholder:text-zinc-300 focus:cursor-auto focus:border-cyan-600 focus:ring-cyan-600"
    ></textarea>
</template>
