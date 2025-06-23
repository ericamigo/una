<script setup>
import { AuthLayout } from '@/Layouts'
import { Head, useForm } from '@inertiajs/vue3'
import { InputLabel, InputError, TextInput } from '@/Components/Forms'

const props = defineProps({
    email: String,
    token: String,
})

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation')
        },
    })
}
</script>

<template>
    <Head title="Reset Password" />
    <AuthLayout>
        <div class="mx-auto w-full max-w-sm space-y-10 py-10">
            <div>
                <h1 class="mb-6 text-5xl font-semibold tracking-tight">UNA</h1>
                <h2 class="text-2xl font-semibold tracking-tight">Reset Password</h2>
                <p>Please enter your new password below</p>
            </div>

            <form class="space-y-4" @submit.prevent="submit">
                <div>
                    <InputLabel value="Email" for="reset-password-email" />
                    <TextInput
                        type="email"
                        id="reset-password-email"
                        v-model="form.email"
                        :tabindex="2"
                        autocomplete="email"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.email" />
                </div>
                <div>
                    <InputLabel value="Password" for="reset-password-password" />
                    <TextInput
                        type="password"
                        id="reset-password-password"
                        v-model="form.password"
                        :tabindex="3"
                        autocomplete="password"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.password" />
                </div>
                <div>
                    <InputLabel value="Confirm Password" for="reset-password-password-confirmation" />
                    <TextInput
                        type="password"
                        id="reset-password-password-confirmation"
                        v-model="form.password_confirmation"
                        :tabindex="4"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.password_confirmation" />
                </div>
                <div class="grid">
                    <button
                        type="submit"
                        :disabled="form.processing"
                        :tabindex="5"
                        class="btn btn-primary justify-center"
                    >
                        <span>Reset Password</span>
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </form>
        </div>
    </AuthLayout>
</template>

