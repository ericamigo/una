<script setup>
import { AppLayout } from '@/Layouts'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { InputLabel, InputError, TextInput } from '@/Components/Forms'
import DeleteAccount from './DeleteAccount.vue'

const props = defineProps({
    account: Object,
})

const form = useForm({
    email: props.account.email,
    password: '',
    password_confirmation: '',
    current_password: '',
})

function submit() {
    form.patch(route('account.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset('password', 'password_confirmation', 'current_password'),
    })
}
</script>

<template>
    <Head title="Account" />
    <AppLayout>
        <div class="mx-auto w-full max-w-2xl space-y-6">
            <div>
                <h1 class="page-title">Account</h1>
            </div>

            <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
                <div class="card">
                    <div class="card-body space-y-4">
                        <div>
                            <InputLabel value="Email" for="form-email" />
                            <TextInput type="email" id="form-email" v-model="form.email" class="w-full" required />
                            <InputError :message="form.errors.email" />
                        </div>
                    </div>
                    <div class="card-body space-y-4 border-t">
                        <div>
                            <InputLabel
                                value="Password"
                                :optional="form.password === ''"
                                class="!mb-0"
                                for="form-password"
                            />
                            <div class="mb-1 text-xs text-zinc-500">
                                Only fill in the password fields if you want to update your current password.
                            </div>
                            <TextInput type="password" id="form-password" v-model="form.password" class="w-full" />
                            <InputError :message="form.errors.password" />
                        </div>
                        <div>
                            <InputLabel
                                value="Confirm Password"
                                :optional="form.password === ''"
                                for="form-password-confirmation"
                            />
                            <TextInput
                                type="password"
                                id="form-password-confirmation"
                                v-model="form.password_confirmation"
                                :required="form.password !== ''"
                                class="w-full"
                            />
                            <InputError :message="form.errors.password_confirmation" />
                        </div>
                    </div>
                    <div class="card-body space-y-4 border-t">
                        <div>
                            <InputLabel value="Current Password" for="form-current-password" />
                            <TextInput
                                type="password"
                                id="form-current-password"
                                v-model="form.current_password"
                                class="w-full"
                                required
                            />
                            <InputError :message="form.errors.current_password" />
                        </div>
                    </div>
                </div>
                <div class="flex justify-end gap-2">
                    <div v-if="form.isDirty">
                        <Link :href="route('account.edit')" class="btn btn-link">
                            <i class="ri-reset-left-line"></i>
                            <span>Reset</span>
                        </Link>
                    </div>
                    <div>
                        <button type="submit" :disabled="form.processing" class="btn btn-primary">
                            <i class="ri-save-line"></i>
                            <span>Submit Changes</span>
                        </button>
                    </div>
                </div>
            </form>

            <div class="h-10"></div>

            <DeleteAccount />
        </div>
    </AppLayout>
</template>
