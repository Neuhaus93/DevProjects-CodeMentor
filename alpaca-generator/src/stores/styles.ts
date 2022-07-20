import { defineStore } from "pinia";
import mergeImages from "merge-images";

export const BODY_PARTS = {
  backgrounds: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
  ears: ["default", "tilt-backward", "tilt-forward"],
  neck: ["bend-backward", "bend-forward", "default", "thick"],
  hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  accessories: ["earings", "flower", "glasses", "headphone"],
  leg: [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  nose: ["default"],
  mouth: ["astonished", "default", "eating", "laugh", "tongue"],
  eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
};
export type BodyPartType = keyof typeof BODY_PARTS;

type StyleStoreState = { selectedPart: BodyPartType } & Record<
  BodyPartType,
  string
>;

export const useStyles = defineStore({
  id: "style",
  state: () =>
    ({
      selectedPart: "backgrounds",
      accessories: "earings",
      backgrounds: "blue50",
      ears: "default",
      eyes: "default",
      hair: "bang",
      leg: "bubble-tea",
      nose: "default",
      mouth: "default",
      neck: "bend-backward",
    } as StyleStoreState),
  getters: {
    partStyles: (state): string[] => {
      return BODY_PARTS[state.selectedPart];
    },
    checkIfSelected: (state) => {
      return (styleId: string) => state[state.selectedPart] === styleId;
    },
  },
  actions: {
    setStyle(key: BodyPartType, name: string) {
      this[key] = name;
    },
    setSelectedPart(bodyPart: BodyPartType) {
      this.selectedPart = bodyPart;
    },
    randomizeStyle() {
      const parts = Object.keys(BODY_PARTS) as BodyPartType[];

      for (const part of parts) {
        const availableStyles = BODY_PARTS[part];
        const randomStyleIndex = getRandomInt(availableStyles.length);
        const randomStyle = availableStyles[randomStyleIndex];

        this.setStyle(part, randomStyle);
      }
    },
    downloadImage() {
      const parts = Object.keys(BODY_PARTS) as BodyPartType[];
      const imagesArr = parts.map((part) => {
        return `src/assets/${part}/${this[part]}.png`;
      });

      mergeImages(imagesArr).then((b64) => {
        const a = document.createElement("a");
        a.href = b64;
        a.id = "testing";
        a.download = "Alpaca.png";
        a.click();
      });
    },
  },
});

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
