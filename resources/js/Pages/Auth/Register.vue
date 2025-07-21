<script setup>
import { AuthLayout } from '@/Layouts'
import { Head, Link, useForm, usePage } from '@inertiajs/vue3'
import { InputError, InputLabel, TextInput } from '@/Components/Forms'

const page = usePage(),
    form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

function submit() {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <Head title="Register" />
    <AuthLayout>
        <div class="mx-auto w-full max-w-sm space-y-10 py-10">
            <div>
                <h1 class="mb-6 text-5xl font-semibold tracking-tight" v-text="page.props.app.name"></h1>
                <h2 class="text-2xl font-semibold tracking-tight">Create an account</h2>
                <p>Enter your details below to create your account</p>
            </div>

            <form class="space-y-4" @submit.prevent="submit">
                <div>
                    <InputLabel value="Name" for="register-name" />
                    <TextInput
                        id="register-name"
                        v-model="form.name"
                        :tabindex="1"
                        autocomplete="name"
                        autofocus
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.name" />
                </div>
                <div>
                    <InputLabel value="Email" for="register-email" />
                    <TextInput
                        type="email"
                        id="register-email"
                        v-model="form.email"
                        :tabindex="2"
                        autocomplete="email"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.email" />
                </div>
                <div>
                    <InputLabel value="Password" for="register-password" />
                    <TextInput
                        type="password"
                        id="register-password"
                        v-model="form.password"
                        :tabindex="3"
                        autocomplete="password"
                        class="w-full"
                        required
                    />
                    <InputError :message="form.errors.password" />
                </div>
                <div>
                    <InputLabel value="Confirm Password" for="register-password-confirmation" />
                    <TextInput
                        type="password"
                        id="register-password-confirmation"
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
                        <span>Create Account</span>
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </form>

            <div class="text-xs text-zinc-500">
                Already have an account?
                <Link :href="route('login')" :tabindex="6" class="outline-none">Log in</Link>
            </div>
        </div>
    </AuthLayout>
</template>
