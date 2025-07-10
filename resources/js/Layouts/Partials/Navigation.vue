<script setup>
import { Link } from '@inertiajs/vue3'
import { useToggle } from '@vueuse/core'
import UserDropdown from './UserDropdown.vue'

const [showMenu, toggleMenu] = useToggle()
</script>

<template>
    <nav
        class="fixed top-0 z-[100] flex w-full justify-between border-b border-zinc-200 bg-zinc-100 lg:bottom-0 lg:w-72 lg:flex-col lg:border-r lg:border-b-0 dark:border-zinc-700 dark:bg-zinc-800"
    >
        <div class="p-4 md:px-6 lg:hidden">
            <button
                type="button"
                class="flex size-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700"
                @click="toggleMenu()"
            >
                <i class="ri-menu-line"></i>
            </button>
        </div>
        <div class="flex p-4 md:px-6 lg:py-6">
            <Link :href="route('dashboard')" class="text-xl/10 font-extrabold tracking-tight">UNA</Link>
        </div>
        <div
            :class="[
                'fixed top-0 bottom-0 left-0 z-50 w-64 border-r border-zinc-200 bg-zinc-100 p-4 duration-200 md:px-6 lg:relative lg:z-auto lg:w-full lg:grow lg:-translate-x-0 lg:border-r-0 lg:py-0 dark:border-zinc-700 dark:bg-zinc-800',
                showMenu ? '-translate-x-0' : '-translate-x-64',
            ]"
        >
            <div class="flex flex-col gap-px">
                <Link
                    :href="route('dashboard')"
                    :class="['sidebar-menu-item', { 'active': route().current('dashboard') }]"
                >
                    <i class="ri-fw ri-dashboard-line"></i>
                    <span>Dashboard</span>
                </Link>
                <div class="h-4"></div>
                <a
                    href="https://github.com/ericamigo/una"
                    class="sidebar-menu-item"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <i class="ri-fw ri-github-fill"></i>
                    <span>Github</span>
                </a>
            </div>
        </div>
        <div
            :class="[
                'fixed top-0 left-0 z-40 h-full w-full bg-zinc-100/90 duration-200 lg:hidden dark:bg-zinc-800/90',
                showMenu ? 'visible opacity-100' : 'invisible opacity-0',
            ]"
            @click="toggleMenu()"
        ></div>
        <UserDropdown />
    </nav>
</template>
