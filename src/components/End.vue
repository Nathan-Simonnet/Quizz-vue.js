<template>
    <div id="end-page" class="first-child">
        <h1>
            <span id="first-letter">Y</span>our score:
            <span>{{ score }}/{{ data.length }}</span>
        </h1>
        <button @click="handleButtonClick">Restart</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import data from "../assets/data/data.json";
import { useScoreStore } from "../stores/score"; // Assuming you're using Pinia for state management

const router = useRouter();
const scoreStore = useScoreStore();
const score = scoreStore.score;

// Handle button click to restart the quiz
const handleButtonClick = () => {
    router.push("/quiz");
};
</script>

<style>
#end-page {
    & h1 {
        margin: 24px;
        font-size: 60px;
        color: var(--texts-color);

        & span {
            color: var(--title-container);
        }

        & span#first-letter {
            font-size: 75px;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }
}

@media screen and (max-width: 600px) {
    #end-page *:not(button) {
        transform: scale(0.8);
    }

    #end-page button {
        height: 60px;
        width: 200px;
    }
}
</style>
