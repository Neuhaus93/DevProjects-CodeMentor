<script setup lang="ts">
const props = defineProps({
  selected: Boolean,
});
</script>

<template>
  <button :class="{ active: props.selected }"><slot /></button>
</template>

<style scoped>
button {
  background-color: white;
  border: 1px solid dodgerblue;
  color: dodgerblue;
  border-radius: 999px;
  padding: 12px;
}

button.active {
  background-color: darkslateblue;
  border: 1px solid darkslateblue;
  color: white;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
  border: 1px solid darkslateblue;
}
</style>
