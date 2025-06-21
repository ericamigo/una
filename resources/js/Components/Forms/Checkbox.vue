<script setup>
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'

const emit = defineEmits(['update:checked'])

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        required: true,
    },
    value: {
        default: null,
    },
})

const proxyChecked = computed({
    get() {
        return props.checked
    },

    set(val) {
        emit('update:checked', val)
    },
})
</script>

<template>
    <CheckboxRoot
        v-model="proxyChecked"
        class="dark:bg-zinc-850 flex h-5 w-5 shrink-0 appearance-none items-center justify-center rounded-md border border-zinc-200 bg-white duration-200 outline-none hover:bg-stone-50 data-[state=checked]:border-cyan-600 data-[state=checked]:bg-cyan-600 dark:border-zinc-700 dark:data-[state=checked]:border-cyan-600 dark:data-[state=checked]:bg-cyan-600"
    >
        <CheckboxIndicator class="flex h-full w-full items-center justify-center text-white">
            <i class="ri-check-line"></i>
        </CheckboxIndicator>
    </CheckboxRoot>
</template>
