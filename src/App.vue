<template>
  <div class="main">

    <div class="header">
      <Header />
    </div>

    <div class="instructions">
      <p>Type <span class="green-text">help</span> to see a list of available commands</p>
      <p>Type <span class="green-text">clear</span> to clear the terminal</p>
      <p>Use <span class="green-text">up</span> and <span class="green-text">down</span> arrow keys to select previous
        commands</p>
    </div>

    <div class="command-prompt m-30">
      <Command />
    </div>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Command from './components/Command.vue';

export default {
  name: "App",
  components: {
    Header,
    Command
  },
}
</script>

<style scoped lang="scss">
@import "./styles/main.scss";
</style>
