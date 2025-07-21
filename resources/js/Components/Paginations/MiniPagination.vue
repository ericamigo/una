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
            <Link
                v-if="pagination.links.prev"
                :href="pagination.links.prev"
                class="btn btn-outline w-10 justify-center !px-0 font-normal"
            >
                <i class="ri-arrow-left-s-line"></i>
            </Link>
            <button v-else type="button" class="btn btn-outline w-10 justify-center !px-0 font-normal" disabled>
                <i class="ri-arrow-left-s-line"></i>
            </button>
            <Link
                v-if="pagination.links.next"
                :href="pagination.links.next"
                class="btn btn-outline w-10 justify-center !px-0 font-normal"
            >
                <i class="ri-arrow-right-s-line"></i>
            </Link>
            <button v-else type="button" class="btn btn-outline w-10 justify-center !px-0 font-normal" disabled>
                <i class="ri-arrow-right-s-line"></i>
            </button>
        </div>
    </div>
</template>
