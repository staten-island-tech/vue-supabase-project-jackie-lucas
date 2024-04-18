<script setup>
import { ref, watch } from "vue";

const text = ref("Unknown");
</script>
<template>
  <input v-model="text" type="input" />
  <div>{{ text }}</div>
</template>