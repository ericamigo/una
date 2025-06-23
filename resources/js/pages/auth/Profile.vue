<script setup>
import { AppLayout } from '@/Layouts'
import { Checkbox, InputLabel, InputError, EditorInput, SelectInput, TextInput } from '@/Components/Forms'
import { Head, Link, useForm } from '@inertiajs/vue3'

const props = defineProps({
    profile: Object,
})

const form = useForm({
    name: props.profile.data.name,
    current_password: '',
})

function submit() {
    form.patch(route('profile.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset('current_password'),
    })
}
</script>

<template>
    <Head title="Profile" />
    <AppLayout>
        <div class="mx-auto w-full max-w-2xl space-y-6">
            <div>
                <h1 class="page-title">Profile</h1>
            </div>

            <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
                <div class="card">
                    <div class="card-body space-y-4">
                        <div>
                            <InputLabel value="Name" for="form-name" />
                            <TextInput id="form-name" v-model="form.name" class="w-full" required />
                            <InputError :message="form.errors.name" />
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
                        <Link :href="route('profile.edit')" class="btn btn-link">
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
        </div>
    </AppLayout>
</template>
