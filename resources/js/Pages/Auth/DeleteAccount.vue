<script setup>
import { InputError, TextInput } from '@/Components/Forms'
import { useForm } from '@inertiajs/vue3'

const form = useForm({
    current_password: '',
})

function submit() {
    form.delete(route('account.destroy'), {
        preserveScroll: true,
        onBefore: () => confirm('Are you sure you want to delete your account?'),
    })
}
</script>

<template>
    <div
        class="space-y-4 rounded-lg border border-rose-500/20 bg-rose-50 p-4 text-rose-500 selection:bg-rose-500 md:space-y-6 md:p-6 dark:bg-rose-950/20"
    >
        <div class="space-y-1">
            <h4 class="text-lg font-semibold tracking-tight">Delete Account</h4>
            <p>Please proceed with caution, this cannot be undone.</p>
        </div>
        <form @submit.prevent="submit">
            <div class="flex gap-2">
                <div class="grow">
                    <TextInput
                        type="password"
                        id="delete-current-password"
                        v-model="form.current_password"
                        class="w-full !border-rose-500/20 text-rose-500 placeholder:text-rose-500/20 focus:!border-rose-500 focus:ring-rose-500"
                        placeholder="Enter current password"
                        required
                    />
                    <InputError :message="form.errors.current_password" />
                </div>
                <div>
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="btn border-rose-500 bg-rose-500 text-white hover:border-rose-600 hover:bg-rose-600"
                    >
                        <i class="ri-delete-bin-line"></i>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
