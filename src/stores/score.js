// src/stores/score.ts
import { defineStore } from "pinia";

export const useScoreStore = defineStore("score", {
  state: () => ({
    score: 0,
  }),
  actions: {
    incrementScore() {
      this.score++;
    },
    resetScore() {
      this.score = 0;
    },
  },
});