<script setup>
import MiniPagination from './MiniPagination.vue'

defineProps({
    pagination: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div v-if="pagination.meta.last_page > 1" class="flex justify-between gap-6">
        <div class="text-base/10 font-bold">
            Page {{ pagination.meta.current_page }} of {{ pagination.meta.last_page }}
        </div>
        <div class="flex gap-2">
            <MiniPagination :pagination />
        </div>
    </div>
</template>
