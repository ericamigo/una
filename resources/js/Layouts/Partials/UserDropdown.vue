<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { useDark, useToggle } from '@vueuse/core'
import { PopoverContent, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { computed } from 'vue'

const isDark = useDark(),
    toggleDark = useToggle(isDark),
    page = usePage(),
    auth = computed(() => page.props.auth)
</script>

<template>
    <div class="relative p-4 md:p-6">
        <PopoverRoot v-slot="{ open }">
            <PopoverTrigger as-child>
                <button
                    type="button"
                    :class="[
                        'inline-flex w-10 items-center justify-center gap-2.5 rounded-lg border border-zinc-200 py-[7px] duration-200 outline-none lg:w-full lg:px-3 dark:border-zinc-700',
                        open ? 'dark:bg-zinc-850 bg-white' : 'dark:hover:bg-zinc-850 hover:bg-white',
                    ]"
                >
                    <i :class="['ri-user-smile-line ri-fw duration-200', { 'text-cyan-600': open }]"></i>
                    <span
                        class="hidden grow truncate text-left font-semibold lg:inline-block"
                        v-text="auth.user.name"
                    ></span>
                    <i class="ri-expand-up-down-line hidden text-zinc-500 lg:inline-block"></i>
                </button>
            </PopoverTrigger>
            <PopoverContent
                :collisionPadding="16"
                :sideOffset="8"
                class="dark:bg-zinc-850 w-full min-w-52 rounded-lg border border-zinc-200 bg-white shadow-xs lg:w-[var(--reka-popper-anchor-width)] dark:border-zinc-700"
            >
                <div class="flex flex-col gap-px p-1">
                    <div class="p-3">
                        <div class="font-semibold" v-text="auth.user.name"></div>
                        <div class="text-xs text-zinc-500" v-text="auth.user.email"></div>
                    </div>
                    <hr class="-mx-1 my-1 border-zinc-200 dark:border-zinc-700" />
                    <Link href="#" class="dropdown-menu-item">
                        <i class="ri-profile-line"></i>
                        <span>Profile</span>
                    </Link>
                    <Link href="#" class="dropdown-menu-item">
                        <i class="ri-profile-line"></i>
                        <span>Account</span>
                    </Link>
                    <hr class="-mx-1 my-1 border-zinc-200 dark:border-zinc-700" />
                    <button type="button" class="dropdown-menu-item" @click="toggleDark()">
                        <i :class="[isDark ? 'ri-moon-line' : 'ri-sun-line']"></i>
                        <span>Appearance</span>
                        <span class="ml-auto text-xs/6 text-zinc-500" v-text="isDark ? 'Dark' : 'Light'"></span>
                    </button>
                    <hr class="-mx-1 my-1 border-zinc-200 dark:border-zinc-700" />
                    <Link :href="route('logout')" method="post" as="button" type="button" class="dropdown-menu-item">
                        <i class="ri-expand-right-line"></i>
                        <span>Log Out</span>
                    </Link>
                </div>
            </PopoverContent>
        </PopoverRoot>
    </div>
</template>
