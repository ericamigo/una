<script setup></script>

<template>
    <div class="flex gap-2 p-4 md:p-6">
        <div>
            <button
                type="button"
                class="size-10 rounded-lg border border-zinc-200 text-zinc-500 duration-200 hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
                <i class="ri-moon-line"></i>
            </button>
        </div>
        <div class="grow overflow-hidden">
            <button
                type="button"
                class="inline-flex w-full items-center gap-2.5 rounded-lg border border-zinc-200 px-3 py-[7px] duration-200 hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
                <i class="ri-user-smile-line ri-fw"></i>
                <span class="grow truncate text-left font-bold">Eric</span>
                <i class="ri-expand-up-down-line text-zinc-500"></i>
            </button>
        </div>
    </div>
</template>
