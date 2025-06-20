<script setup>
import { Editor, EditorContent } from '@tiptap/vue-3'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import StarterKit from '@tiptap/starter-kit'

const model = defineModel({
    type: String,
    required: true,
})

const editor = ref(null),
    emit = defineEmits(['update:modelValue'])

onMounted(() => {
    editor.value = new Editor({
        content: model.value,
        editorProps: {
            attributes: {
                class: [
                    'prose text-zinc-900 leading-normal prose-p:mb-4 prose-p:mt-0 prose-p:last:mb-0 prose-li:mt-0 prose-li:mb-0 max-w-full px-3 py-[7px] border border-zinc-200 rounded-lg focus:outline-hidden bg-white focus:border-cyan-600 duration-150 focus:ring-1 focus:ring-cyan-600 outline-hidden prose-strong:font-semibold ',
                ].join(' '),
            },
        },
        extensions: [StarterKit],
        onUpdate: () => {
            emit('update:modelValue', editor.value.getHTML() === '<p></p>' ? '' : editor.value.getHTML())
        },
    })
})

onBeforeUnmount(() => {
    editor.value.destroy()
})

watch(
    () => model.value,
    () => {
        if (model.value == '' || model.value == '<p></p>') {
            editor.value.commands.clearContent(true)
        }
    }
)
</script>

<template>
    <EditorContent :editor="editor" />
</template>
