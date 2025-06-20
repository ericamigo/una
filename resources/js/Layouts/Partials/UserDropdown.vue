<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark(),
    toggleDark = useToggle(isDark)
</script>

<template>
    <div class="flex gap-2 p-4 md:p-6">
        <div>
            <button
                type="button"
                class="size-10 overflow-hidden rounded-lg border border-zinc-200 text-zinc-500 duration-200 outline-none hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
                @click="toggleDark()"
            >
                <i :class="[isDark ? 'ri-moon-line' : 'ri-sun-line']"></i>
            </button>
        </div>
        <div class="grow overflow-hidden">
            <button
                type="button"
                class="inline-flex w-10 items-center justify-center gap-2.5 rounded-lg border border-zinc-200 py-[7px] duration-200 outline-none hover:bg-white lg:w-full lg:px-3 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
                <i class="ri-user-smile-line ri-fw"></i>
                <span class="hidden grow truncate text-left font-bold lg:inline-block">Eric</span>
                <i class="ri-expand-up-down-line hidden text-zinc-500 lg:inline-block"></i>
            </button>
        </div>
    </div>
</template>
