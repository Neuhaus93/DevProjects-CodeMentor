BodyPartType
<script setup lang="ts">
import { computed } from "vue";
import IconDownload from "./components/icons/IconDownload.vue";
import IconShuffle from "./components/icons/IconShuffle.vue";
import IconButton from "./components/IconButton.vue";
import TheButton from "./components/TheButton.vue";
import { useStyles, BODY_PARTS } from "@/stores/styles";
import type { BodyPartType } from "@/stores/styles";

const styles = useStyles();
const parts = Object.keys(BODY_PARTS) as BodyPartType[];

const capitalizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

styles.randomizeStyle();

const filteredParts = computed(() => {
  return parts.filter((e) => e !== "nose");
});
</script>

<template>
  <h1>ALPACA GENERATOR</h1>
  <div class="edit-section">
    <div class="img-container">
      <img
        v-for="(part, index) in parts"
        :key="index"
        class="img"
        :style="`z-index: ${index}`"
        :src="`/assets/${part}/${styles[part]}.png`"
      />
      <div class="action-buttons">
        <IconButton text="Random" @click="styles.randomizeStyle()"
          ><IconShuffle :size="16"
        /></IconButton>
        <IconButton text="Download" @click="styles.downloadImage()"
          ><IconDownload :size="16"
        /></IconButton>
      </div>
    </div>
    <div class="spacer" />
    <div style="flex: 1">
      <div>
        <h4>ACCESSORIZE THE ALPACA'S</h4>
        <div class="button-grid">
          <TheButton
            v-for="part in filteredParts"
            :key="part"
            :selected="styles.selectedPart === part"
            @click="styles.setSelectedPart(part)"
            >{{ capitalizeString(part) }}</TheButton
          >
        </div>
      </div>
      <div style="margin-top: 24px">
        <h4>STYLE</h4>
        <div class="button-grid">
          <TheButton
            v-for="style in styles.partStyles"
            :key="style"
            :selected="styles.checkIfSelected(style)"
            @click="styles.setStyle(styles.selectedPart, style)"
            >{{ capitalizeString(style) }}</TheButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edit-section {
  display: flex;
  margin-top: 32px;
  height: 360px;
}

h4 {
  font-weight: bold;
  margin-bottom: 8px;
}

.img-container {
  flex-shrink: 0;
  width: 270px;
  height: 270px;
  position: relative;
  margin-top: 8px;
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.action-buttons {
  margin-top: 300px;
  display: flex;
  justify-content: space-between;
}

.spacer {
  flex-shrink: 0;
  width: 150px;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  row-gap: 6px;
  column-gap: 6px;
}
</style>
