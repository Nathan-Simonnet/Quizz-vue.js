<template>
  <div class="first-child" id="quiz">
    <!-- Header -->
    <header>
      <div class="title-container">
        <h1><span>Q</span>uiz</h1>
        <div class="question-mark-container">
          <router-link to="/">
            <img :src="logo" alt="Question Mark Logo" />
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <div class="presentation-container">
        <p>{{ dataQuestions[counter].question }}</p>
      </div>

      <div class="buttons-container">
        <div v-for="(choice, index) in dataQuestions[counter].choices" :key="index" class="button-container">
          <button :id="choice" @click="handleButtonClick($event, choice)">
            {{ choice }}
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer>
      <div class="questions-counter-container">
        <span id="current-question-counter">{{ counter + 1 }}</span> /
        <span class="total-questions-counter">{{ dataQuestions.length }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/images/question-mark-title.png";
import dataQuestions from "../assets/data/data.json";
import { useScoreStore } from "../stores/score"; // Assuming you're using Pinia for state management

const router = useRouter();
const counter = ref(0);
const scoreStore = useScoreStore();

// Handle button click
const handleButtonClick = (event: Event, choice: string) => {
  const clickedButton = event.target as HTMLButtonElement;
  const answer = dataQuestions[counter.value].answer;

  if (choice === answer) {
    clickedButton.classList.add("good-response");
    scoreStore.incrementScore();
  } else {
    clickedButton.classList.add("bad-response");
    const correctButton = document.getElementById(answer);
    correctButton?.classList.add("good-response");
  }

  // Disable buttons during transition
  const quizElement = document.getElementById("quiz");
  if (quizElement) quizElement.style.pointerEvents = "none";

  setTimeout(() => {
    if (counter.value < dataQuestions.length - 1) {
      counter.value++;
    } else {
      router.push("/end");
    }

    // Re-enable buttons and reset styles
    if (quizElement) quizElement.style.pointerEvents = "auto";
    clickedButton.classList.remove("bad-response");
    const correctButton = document.getElementById(answer);
    correctButton?.classList.remove("good-response");
  }, 1000);
};

// Reset score on initial render
onMounted(() => {
  scoreStore.resetScore();
});
</script>

<style>

.buttons-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;


  & .button-container {
    margin: 24px;

    & button {
      font-size: 22px;
      height: 80px;
      width: 280px;
    }
  }
}

.good-response {
  background: rgb(49, 138, 49) !important;
}

.bad-response {
  background: rgb(155, 59, 49) !important;
}

@media screen and (max-width: 800px) {

  #quiz {

    & header,
    & main,
    & footer {
      margin: 0;
    }

    & header *,
    & main * :not(button),
    & footer * {
      transform: scale(0.9);
    }

    .title-container{
      gap: 0;
    }

    & .buttons-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & .button-container {
        margin: 0;

        & button {
          height: 60px;
          width: 220px;

        }
      }
    }
  }

}
</style>