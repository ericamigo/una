<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <nav
        class="fixed top-0 z-[100] flex w-full justify-between border-b border-zinc-200 bg-zinc-100 lg:bottom-0 lg:w-64 lg:flex-col lg:border-r lg:border-b-0 dark:border-zinc-700 dark:bg-zinc-800"
    >
        <div class="flex p-4 md:px-6 lg:py-6">
            <Link :href="route('dashboard')" class="text-xl/10 font-extrabold tracking-tight">UNA</Link>
        </div>
        <div class="px-3 lg:grow">
            <div class="flex flex-col gap-px">
                <Link href="#" :class="['sidebar-menu-item', { 'active': route().current('dashboard') }]">
                    <i class="ri-fw ri-dashboard-line"></i>
                    <span>Dashboard</span>
                </Link>
                <div class="h-4"></div>
                <Link href="#" class="sidebar-menu-item">
                    <i class="ri-fw ri-pencil-ruler-2-line"></i>
                    <span>Projects</span>
                </Link>
                <Link href="#" class="sidebar-menu-item">
                    <i class="ri-fw ri-group-line"></i>
                    <span>Customers</span>
                </Link>
                <Link href="#" class="sidebar-menu-item">
                    <i class="ri-fw ri-list-check-3"></i>
                    <span>Tasks</span>
                </Link>
            </div>
        </div>
        <div class="flex p-4 md:px-6 lg:p-3">
            <button type="button" class="inline-flex items-center gap-2 px-3 py-1">
                <i class="ri-fw ri-user-smile-line"></i>
                <span>Eric</span>
            </button>
        </div>
    </nav>
</template>
