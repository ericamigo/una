<script setup>
import { DialogClose, DialogTitle } from 'reka-ui'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui'
</script>

<template>
    <div>
        <DialogRoot>
            <DialogTrigger class="btn btn-outline">
                <span>Dialog</span>
                <i class="ri-slideshow-view"></i>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay class="dialog-overlay" />
                <DialogContent :aria-describedby="undefined" class="dialog-content">
                    <div class="card max-w-xl">
                        <div class="max-h-full w-full grow overflow-y-auto">
                            <div class="card-body space-y-6">
                                <div class="flex justify-between gap-4 md:gap-6">
                                    <div>
                                        <DialogTitle class="page-title"></DialogTitle>
                                    </div>
                                    <div>
                                        <DialogClose as-child>
                                            <button
                                                type="button"
                                                class="flex size-10 cursor-pointer items-center justify-center opacity-50 duration-200 outline-none hover:opacity-100"
                                            >
                                                <i class="ri-close-large-line"></i>
                                            </button>
                                        </DialogClose>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </DialogPortal>
        </DialogRoot>
    </div>
</template>
