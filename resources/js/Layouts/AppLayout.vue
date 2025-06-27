<script setup>
import Navigation from './Partials/Navigation.vue'
</script>

<template>
    <div class="min-h-dvh pt-[73px] md:pt-[89px] lg:pt-0">
        <Navigation />
        <main class="p-4 md:p-6 lg:pl-78">
            <slot></slot>
        </main>
    </div>
</template>
