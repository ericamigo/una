<script setup>
import { AuthLayout } from '@/Layouts'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { InputError, InputLabel, TextInput, Checkbox } from '@/Components/Forms'

defineProps({
    canResetPassword: Boolean,
    status: String,
})

const form = useForm({
    email: '',
    password: '',
    remember: false,
})

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <Head title="Log in" />
    <AuthLayout>
        <div class="mx-auto w-full max-w-sm space-y-10 py-10">
            <div>
                <h1 class="mb-6 text-5xl font-semibold tracking-tight">UNA</h1>
                <h2 class="text-2xl font-semibold tracking-tight">Log in to your account</h2>
                <p>Enter your email and password below to log in</p>
            </div>

            <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
                {{ status }}
            </div>

            <form class="space-y-4" @submit.prevent="submit">
                <div>
                    <InputLabel value="Email" for="login-email" />
                    <TextInput
                        type="email"
                        id="login-email"
                        v-model="form.email"
                        :tabindex="1"
                        autocomplete="email"
                        autofocus
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.email" />
                </div>
                <div>
                    <div class="flex justify-between">
                        <InputLabel value="Password" for="login-password" />
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            :tabindex="5"
                            class="text-xs/5 outline-none"
                        >
                            Forgot Password
                        </Link>
                    </div>
                    <TextInput
                        type="password"
                        id="login-password"
                        v-model="form.password"
                        :tabindex="2"
                        autocomplete="password"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.password" />
                </div>
                <div class="flex">
                    <label class="flex items-center select-none" for="remember-me">
                        <Checkbox id="remember-me" v-model:checked="form.remember" :tabindex="3" name="remember" />
                        <span class="ms-2 cursor-pointer font-medium">Remember me</span>
                    </label>
                </div>
                <div class="grid">
                    <button type="submit" :tabindex="4" class="btn btn-primary justify-center">
                        <span>Log In</span>
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </form>

            <div class="text-xs text-zinc-500">
                Don't have an account?
                <Link :href="route('register')" :tabindex="6" class="outline-none">Sign up</Link>
            </div>
        </div>
    </AuthLayout>
</template>

