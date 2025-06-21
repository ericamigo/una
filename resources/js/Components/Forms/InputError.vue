<script setup>
defineProps({
    message: {
        type: String,
    },
})
</script>

<template>
    <div v-show="message" class="mt-1">
        <p class="text-xs text-rose-500">
            {{ message }}
        </p>
    </div>
</template>
