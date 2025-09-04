<script setup>
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'

const options = ['Laravel', 'Vue.js', 'Tailwind CSS', 'Inertia.js']
</script>

<template>
    <div>
        <RadioGroupRoot class="space-y-1">
            <template v-for="option in options" :key="option">
                <label class="flex gap-2">
                    <RadioGroupItem
                        :value="option"
                        class="my-0.5 flex size-5 items-center justify-center rounded-full border border-zinc-200 data-[state=checked]:border-teal-500 data-[state=checked]:bg-teal-500 dark:border-zinc-700 dark:data-[state=checked]:border-teal-500"
                    >
                        <RadioGroupIndicator class="size-2 rounded-full bg-white" />
                    </RadioGroupItem>
                    <span v-text="option"></span>
                </label>
            </template>
        </RadioGroupRoot>
    </div>
</template>
