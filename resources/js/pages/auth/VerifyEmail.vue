<script setup>
import { AuthLayout } from '@/Layouts'
import { Head, Link, useForm } from '@inertiajs/vue3'

defineProps({
    status: String,
})

const form = useForm({})

const submit = () => {
    form.post(route('verification.send'))
}
</script>

<template>
    <Head title="Verify Email" />
    <AuthLayout>
        <div class="mx-auto w-full max-w-sm space-y-10 py-10">
            <div>
                <h1 class="mb-6 text-5xl font-semibold tracking-tight">UNA</h1>
                <h2 class="text-2xl font-semibold tracking-tight">Verify Email</h2>
                <p>Please verify your email address by clicking on the link we just emailed to you.</p>
            </div>

            <div v-if="status === 'verification-link-sent'" class="text-sm font-medium text-green-600">
                A new verification link has been sent to the email address you provided during registration.
            </div>

            <form class="flex flex-wrap gap-2" @submit.prevent="submit">
                <div class="grow">
                    <button type="submit" :disabled="form.processing" class="btn btn-primary w-full justify-center">
                        <i class="ri-mail-send-line"></i>
                        <span>Resend Verification Email</span>
                    </button>
                </div>
                <div>
                    <Link :href="route('logout')" method="post" as="button" class="flex gap-2 px-3 py-2">
                        <span class="font-semibold">Log Out</span>
                        <i class="ri-expand-right-line"></i>
                    </Link>
                </div>
            </form>
        </div>
    </AuthLayout>
</template>
