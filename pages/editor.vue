<template>
  <div class="markdown-editor">
    <md-editor
      v-model="text"
      :toolbarsExclude="toolbarsExclude"
      noUploadImg
      @onChange="onChange"
      @onSave="onSave"
      @onError="onError"
    />
  </div>
</template>

<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import type { ToolbarNames } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("");
const toolbarsExclude: ToolbarNames[] = [
  "github",
  "mermaid",
  "katex",
  "htmlPreview",
];
const toolbars: ToolbarNames[] = ["italic", "underline", "-", "bold", "="];
const onChange = (value: string) => {};
const onError = (err: { name: string; message: string }) => {};
const onSave = (value: string, html: Promise<string>) => {
  console.log("onSave", value);
};
const onUploadImg = (
  files: Array<File>,
  callback: (urls: Array<string>) => void
) => {
  console.log(Array.from(files));
};
</script>

<style lang="less"></style>
