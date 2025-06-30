<script setup>
import { AppLayout } from '@/Layouts'
import { Checkbox, InputLabel, InputError, EditorInput, SelectInput, TextInput } from '@/Components/Forms'
import { Head, useForm } from '@inertiajs/vue3'

const form = useForm({
    name: '',
    email: '',
    about: '',
    select: '',
    is_active: false,
})
</script>

<template>
    <Head title="Dashboard" />
    <AppLayout>
        <div class="mx-auto w-full max-w-7xl space-y-6">
            <div>
                <h1 class="page-title">Dashboard</h1>
            </div>

            <div class="card">
                <div class="card-body space-y-4">
                    <div>
                        <h4 class="text-lg font-semibold tracking-tight">Personal Information</h4>
                        <div class="text-sm text-zinc-500">
                            Corrupti doloremque, rerum mollitia quis beatae dolore possimus optio, magni placeat
                            aspernatur aut!
                        </div>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laboriosam voluptatem
                        accusantium commodi nobis laborum, consequuntur aspernatur. Ut, dolorem? Sapiente tempore sint
                        in dolorum necessitatibus consectetur placeat ad accusamus quas?
                    </div>
                </div>
                <div class="card-body border-t">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laboriosam voluptatem accusantium
                    commodi nobis laborum, consequuntur aspernatur. Ut, dolorem? Sapiente tempore sint in dolorum
                    necessitatibus consectetur placeat ad accusamus quas?
                </div>
            </div>

            <hr class="border-zinc-200 dark:border-zinc-700" />

            <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
                <div class="card">
                    <div class="card-body space-y-4">
                        <div>
                            <h4 class="text-lg font-semibold tracking-tight">Personal Information</h4>
                        </div>
                        <div>
                            <InputLabel value="Name" for="form-name" />
                            <TextInput id="form-name" v-model="form.name" class="w-full" required />
                            <InputError :message="form.errors.name" />
                        </div>
                        <div>
                            <InputLabel value="Email" for="form-email" />
                            <TextInput type="email" id="form-email" v-model="form.email" class="w-full" required />
                            <InputError :message="form.errors.email" />
                        </div>
                        <div>
                            <InputLabel value="About" for="form-about" />
                            <EditorInput id="form-about" v-model="form.about" />
                            <InputError :message="form.errors.about" />
                        </div>
                    </div>
                    <div class="card-body space-y-4 border-t">
                        <div>
                            <h4 class="text-lg font-semibold tracking-tight">Another Section</h4>
                        </div>
                        <div>
                            <InputLabel value="Select One" for="form-select" />
                            <SelectInput id="form-email" v-model="form.select" class="w-full" required>
                                <option value=""></option>
                                <option v-for="i in 4" :key="i" :value="i" v-text="`Option ${i}`"></option>
                            </SelectInput>
                            <InputError :message="form.errors.select" />
                        </div>
                        <div class="flex">
                            <label class="flex items-center select-none" for="form-is-active">
                                <Checkbox id="form-is-active" v-model:checked="form.is_active" name="is_active" />
                                <span class="ms-2 cursor-pointer font-medium">Active</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end gap-2">
                    <div>
                        <button type="button" class="btn btn-link">
                            <i class="ri-arrow-left-line"></i>
                            <span>Back</span>
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary">
                            <i class="ri-save-line"></i>
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
            </form>

            <hr class="border-zinc-200 dark:border-zinc-700" />

            <div class="card overflow-hidden">
                <div class="table-wrapperx">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 10">
                                <td class="max-w-px font-semibold">
                                    <div class="flex w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                        <div class="grow truncate">Amazing Name {{ i }}</div>
                                    </div>
                                </td>
                                <td>email{{ i }}@mail.com</td>
                                <td>Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
