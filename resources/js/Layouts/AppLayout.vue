<script setup>
import Navigation from './Partials/Navigation.vue'
</script>

<template>
    <div class="min-h-dvh">
        <Navigation />
        <main class="p-4 md:p-6 lg:pl-70">
            <slot></slot>
        </main>
    </div>
</template>
