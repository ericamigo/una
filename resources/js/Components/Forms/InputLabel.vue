<script setup>
defineProps({
    value: {
        type: String,
    },
    optional: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <label class="mb-1 inline-flex cursor-pointer gap-2 text-sm font-semibold">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <span v-if="optional" class="text-[10px]/5 font-normal text-zinc-500 select-none">&mdash; Optional</span>
    </label>
</template>
