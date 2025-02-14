<template>
    <div id="home" class="first-child">
        <header>
            <div class="title-container">
                <h1><span>Q</span>uiz</h1>
                <div class="question-mark-container">
                    <router-link to="/">
                    <img src="/src/assets/images/question-mark-title.png" alt="Question Mark Logo" />
                    </router-link>
                </div>
            </div>
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

        <footer>
            <div class="questions-counter-container">
                <span id="current-question-counter">0</span> /
                <span class="total-questions-counter">{{ dataQuestions.length }}</span>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import logo from "../assets/images/question-mark-title.png";
import dataQuestions from "../assets/data/data.json";
</script>

<style>


.first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.first-child {
    height: 100%;
    width: 100%;
}


.title-container{
    display:flex;
    justify-content:center;
    align-items:center;
    
    gap: 12px;
}

header,
.presentation-container,
.button-container,
footer {
    margin: 24px;
}

header {
    margin-top: auto;

    & .title-container {
        display: flex;
        justify-content: center;
        align-items: center;

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

footer {
    margin-bottom: 0;
    margin-top: auto;
    height: auto;
    width: 100%;

    color: var(--title-container);
    font-weight: bold;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    & .questions-counter-container {
        padding-right: 24px;
        padding-bottom: 24px;
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