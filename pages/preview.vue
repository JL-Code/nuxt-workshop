<template>
  <div class="md-preview">
    <MdPreview :editorId="id" :modelValue="text" />
    <ClientOnly>
      <MdCatalog :editorId="id" :scrollElement="scrollElement" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const id = "preview-only";
const text = ref("# Hello Editor");
const scrollElement = ref<HTMLElement>();

onMounted(() => {
  scrollElement.value = document.documentElement;
});
</script>
