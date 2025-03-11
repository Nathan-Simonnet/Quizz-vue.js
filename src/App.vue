
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
:root {
  --background-color: #2F3542;

  --title-container: #FEA601;
  --texts-color: #DFE4EA;

  --button-color: #2F3542;
  --button-block-color: #DFE4EA;
  --buttons-block-hover-container: #dea726;
}

* {
  /* border: 1px solid red; */
  padding: 0;
  margin: 0;
  user-select: none;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body {
  background: #2F3542;
  text-align: center;
  height: 100vh;
}

body,
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app {
  height: 100%;
  width: 100%;
   /* border: 4px solid purple; */
}

button {
  height: 70px;
  width: 300px;

  background: #DFE4EA;
  border-radius: 8px;
  border: 2px solid #DFE4EA;
  color: var(--button-color);
  font-weight: bold;
  font-size: 28px;
  cursor: pointer;
  transition: 0.1s;
}

button:hover {
  border: 2px solid #DFE4EA;
  background: #dea726;
}

button:active {
  transform: scale(0.9);
}

a{
text-decoration: none;
}
a:visited{
  text-decoration: none;
}

</style>