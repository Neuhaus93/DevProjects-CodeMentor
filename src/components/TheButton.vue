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
  border: 1px solid blue;
  border-radius: 999px;
  padding: 12px;
}

button.active {
  color: blue;
}

button:hover {
  cursor: pointer;
}
</style>
