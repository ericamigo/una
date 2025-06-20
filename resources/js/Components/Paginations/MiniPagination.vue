<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    pagination: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div v-if="pagination.meta.last_page > 1">
        <div class="flex gap-2">
            <Link v-if="pagination.links.prev" :href="pagination.links.prev" class="btn btn-outline font-normal">
                Previous
            </Link>
            <button v-else type="button" class="btn btn-outline font-normal" disabled>Previous</button>
            <Link v-if="pagination.links.next" :href="pagination.links.next" class="btn btn-outline font-normal">
                Next
            </Link>
            <button v-else type="button" class="btn btn-outline font-normal" disabled>Next</button>
        </div>
    </div>
</template>
