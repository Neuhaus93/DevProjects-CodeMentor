<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <div role="button">
    <slot />
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped>
div {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 45px;
  cursor: pointer;
}

p {
  margin-left: 6px;
  font-weight: bold;
}
</style>
