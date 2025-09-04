<script setup>
import { DropdownMenuArrow, DropdownMenuContent, DropdownMenuSeparator } from 'reka-ui'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <div>
        <DropdownMenuRoot :modal="false">
            <DropdownMenuTrigger class="btn btn-outline">
                <span>Dropdown</span>
                <i class="ri-expand-up-down-line"></i>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                :align="`start`"
                :side="`bottom`"
                :sideOffset="8"
                class="dropdown-menu-content dark:bg-zinc-850 relative z-10 w-full min-w-64 rounded-lg border border-zinc-200 bg-white shadow-xs lg:w-[var(--reka-popper-anchor-width)] dark:border-zinc-700"
            >
                <div class="flex flex-col gap-px p-1">
                    <Link
                        :href="route('profile.edit')"
                        :class="['dropdown-menu-item', { 'active': route().current('profile.edit') }]"
                    >
                        <i class="ri-profile-line"></i>
                        <span>Profile</span>
                    </Link>
                    <Link
                        :href="route('account.edit')"
                        :class="['dropdown-menu-item', { 'active': route().current('account.edit') }]"
                    >
                        <i class="ri-shield-user-line"></i>
                        <span>Account</span>
                    </Link>
                    <DropdownMenuSeparator class="dropdown-menu-separator" />
                    <Link :href="route('account.edit')" :class="['dropdown-menu-item', { 'active': false }]">
                        <i class="ri-shield-user-line"></i>
                        <span>Account</span>
                    </Link>
                </div>
                <DropdownMenuArrow class="dropdown-menu-arrow" />
            </DropdownMenuContent>
        </DropdownMenuRoot>
    </div>
</template>
