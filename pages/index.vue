<template>
  <div>useFetch Tests</div>
  <input type="text" v-model="id" />
  <button type="button" @click="handleUseFetch">useFetch Test</button>
  <button type="button" @click="handleUseAsyncData">useAsyncData Test</button>

  <div>
    <div v-for="item in items">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
interface NavItem {
  id: string;
  name: string;
  img: string;
  url?: string;
  type: string;
  children?: NavItem[];
}
const items = reactive<NavItem[]>([]);
const id = ref(0);

// const endpoint = ref(`/api/product/categories/navigation?id=${id.value}`);

const endpoint = computed(
  () => `/api/product/categories/navigation?id=${id.value}`
);

const handleUseFetch = async (server = true) => {
  console.log("server", server);
  const { data, error } = await useFetch<any>(() => endpoint.value, {
    server,
  });
  if (error.value) {
    console.error(error.value);
  } else {
    console.log("data", data.value);
  }
};

await handleUseFetch();

// onMounted(async () => {
//   await handleUseFetch(false);
// });

const handleUseAsyncData = async () => {
  const { data, error } = await useAsyncData<NavItem[]>("navItems", () =>
    $fetch(endpoint.value)
  );
  if (error.value) {
    console.error(error.value);
  } else {
    console.log("data", data.value);
  }
};

// await handleUseAsyncData();
</script>

<style lang="less"></style>
