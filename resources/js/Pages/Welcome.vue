<script setup>
import { computed } from 'vue'
import { Head, Link, usePage } from '@inertiajs/vue3'

const page = usePage(),
    auth = computed(() => page.props.auth)
</script>

<template>
    <Head title="Welcome" />
    <div class="flex min-h-dvh items-center">
        <div class="mx-auto w-full max-w-4xl space-y-10 py-20">
            <div class="text-center">
                <h1 class="text-[8rem]/[8rem] font-semibold tracking-tight" v-text="page.props.app.name"></h1>
                <p>because every great app starts with una</p>
            </div>
            <div class="flex justify-center gap-3">
                <template v-if="auth.user">
                    <div>
                        <Link :href="route('dashboard')" class="btn btn-primary">Dashboard</Link>
                    </div>
                </template>
                <template v-else>
                    <div>
                        <Link :href="route('login')" class="btn btn-primary">Log In</Link>
                    </div>
                    <div>
                        <Link :href="route('register')" class="btn">Register</Link>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
