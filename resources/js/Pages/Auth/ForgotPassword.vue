<script setup>
import { AuthLayout } from '@/Layouts'
import { Head, Link, useForm, usePage } from '@inertiajs/vue3'
import { InputLabel, InputError, TextInput } from '@/Components/Forms'

defineProps({
    status: String,
})

const page = usePage(),
    form = useForm({
        email: '',
    })

function submit() {
    form.post(route('password.email'))
}
</script>

<template>
    <Head title="Forgot Password" />
    <AuthLayout>
        <div class="mx-auto w-full max-w-sm space-y-10 py-10">
            <div>
                <h1 class="mb-6 text-5xl font-semibold tracking-tight" v-text="page.props.app.name"></h1>
                <h2 class="text-2xl font-semibold tracking-tight">Forgot Password</h2>
                <p>Enter your email to receive a password reset link</p>
            </div>

            <div v-if="status" class="text-sm font-medium text-green-600">
                {{ status }}
            </div>

            <form class="space-y-4" @submit.prevent="submit">
                <div>
                    <InputLabel value="Email" for="forgot-password-email" />
                    <TextInput
                        type="email"
                        id="forgot-password-email"
                        v-model="form.email"
                        :tabindex="2"
                        autocomplete="email"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.email" />
                </div>
                <div class="grid">
                    <button
                        type="submit"
                        :disabled="form.processing"
                        :tabindex="5"
                        class="btn btn-primary justify-center"
                    >
                        <span>Email password reset link</span>
                        <i class="ri-mail-send-line"></i>
                    </button>
                </div>
            </form>

            <div class="text-xs text-zinc-500">
                <Link :href="route('login')" :tabindex="6" class="flex gap-2 outline-none">
                    <i class="ri-arrow-left-line"></i>
                    Back to Log in
                </Link>
            </div>
        </div>
    </AuthLayout>
</template>
