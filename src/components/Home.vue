<template>
    <div id="home" class="first-child">
        <header>
            <router-link to="/">
            <div class="title-container">
                <h1><span>Q</span>uiz</h1>
                <div class="question-mark-container">
  
                    <img src="/src/assets/images/question-mark-title.png" alt="Question Mark Logo" />
                </div>
            </div>
             </router-link>
        </header>

        <main>
            <div class="presentation-container">
                <p>
                    <span class="total-questions-counter">{{ dataQuestions.length }}</span>
                    questions, no timer, javascript only (for the moment...)
                </p>
            </div>

            <div class="button-container">
                <router-link to="/quiz">
                    <button id="ready">Ready?</button>
                </router-link>
            </div>
        </main>

    </div>
</template>

<script setup lang="ts">
import dataQuestions from "../assets/data/data.json";
</script>

<style>

.first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
}

#home {
    gap: 10%;
}

header {
    & .title-container {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 12px;
        transform: translateX(16px);

        & h1 {
            color: var(--texts-color);
            font-size: 64px;
            font-family: serif;

            & span {
                color: var(--title-container)
            }
        }

        & .question-mark-container {

            height: 100px;
            width: 100px;

            & img {
                color: white;
                height: 100%;
                width: 100%;
            }
        }
    }
}

main {
    width: 824px;

    & .presentation-container {
        min-height: 96px;

        display: flex;
        justify-content: center;
        align-items: center;

        & p {
            color: #DFE0E2;
            font-size: 24px;
        }
    }
}

@media screen and (max-width: 800px) {

    main {
        width: 400px;
    }

    #home {

        & header *,
        & main * :not(button),
        & footer * {
            transform: scale(0.9);
        }

        & #ready {
            height: 54px;
            width: 200px;
            font-size: 20px;
        }
    }

}
</style>