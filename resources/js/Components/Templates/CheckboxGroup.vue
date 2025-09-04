<script setup>
import { CheckboxGroupRoot, CheckboxIndicator, CheckboxRoot } from 'reka-ui'

const options = ['Laravel', 'Vue.js', 'Tailwind CSS', 'Inertia.js']
</script>

<template>
    <div>
        <CheckboxGroupRoot class="space-y-1">
            <template v-for="option in options" :key="option">
                <label class="flex gap-2">
                    <CheckboxRoot
                        :value="option"
                        class="my-0.5 flex size-5 items-center justify-center rounded-md border border-zinc-200 data-[state=checked]:border-teal-500 data-[state=checked]:bg-teal-500 dark:border-zinc-700 dark:data-[state=checked]:border-teal-500"
                    >
                        <CheckboxIndicator>
                            <i class="ri-check-line"></i>
                        </CheckboxIndicator>
                    </CheckboxRoot>
                    <span v-text="option"></span>
                </label>
            </template>
        </CheckboxGroupRoot>
    </div>
</template>
